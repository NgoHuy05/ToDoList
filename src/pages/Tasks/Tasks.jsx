import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Tasks = () => {
  const location = useLocation();
  const path = location.pathname.replace("/tasks/", "");
  const [isOpenCreateTask, setIsOpenCreateTask] = useState(false);
  const [tasks, setTasks] = useState(() => {
    const savedItem = localStorage.getItem("tasks");
    return savedItem ? JSON.parse(savedItem) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const getDefaultList = () => {
    if (path === "today" || path === "upcoming" || path === "all-tasks") return "None";
    if (path === "work") return "Work";
    if (path === "personal") return "Personal";
    if (path === "others") return "Others";
    return "None";
  };
const getTodayDate = () => new Date().toISOString().split("T")[0];

  const getEmptyForm = () => ({
    id: null,
    title: "",
    description: "",
    list: getDefaultList(),
    dueDate: getTodayDate(),
    subtasks: []
  });

  const [form, setForm] = useState(getEmptyForm);

  useEffect(() => {
    handleCloseCreateTask(true);
  },[location])


  const handleOpenCreateTask = () => {
    setIsOpenCreateTask(true);
    setForm(getEmptyForm());
  };
  const handleCloseCreateTask = () => {
    setIsOpenCreateTask(false);
  };
const handleEditTask = (task) => {
  setForm({ ...task, subtasks: task.subtasks || [] }); 
  setIsOpenCreateTask(true);
};

const handleSave = () => {
  const taskWithSubtasks = { ...form, subtasks: form.subtasks || [] };

  if (form.id) {
    setTasks(tasks.map((item) => (item.id === form.id ? taskWithSubtasks : item)));
  } else {
    const newTask = { ...taskWithSubtasks, id: Date.now() };
    setTasks([...tasks, newTask]);
  }
  setForm(getEmptyForm());
};

  const handleDelete = (task) => {
    setTasks(tasks.filter((item) => item.id !== task.id));
    setForm(getEmptyForm());
  };
  const handleAddSubtask = () => {
  const newSubtask = {
    id: Date.now(),
    title: "",
    completed: false
  };
  setForm({ ...form, subtasks: [...form.subtasks, newSubtask] });
};

const handleChangeSubtask = (id, key, value) => {
  setForm({
    ...form,
    subtasks: form.subtasks.map((st) =>
      st.id === id ? { ...st, [key]: value } : st
    )
  });
};

const handleDeleteSubtask = (id) => {
  setForm({
    ...form,
    subtasks: form.subtasks.filter((st) => st.id !== id)
  });
};
  return (
    <>
      <div
        className={`grid ${
          isOpenCreateTask ? "grid-cols-[55%_42%]" : "grid-cols-1"
        } gap-5 m-5`}
      >
        <div className="flex flex-col gap-[25px]">
          <div className="flex gap-5 items-center">
            <div className="text-2xl font-bold uppercase">{path}</div>
            <div className="text-2xl font-bold">5</div>
          </div>
          <button
            className="flex w-full gap-2 items-center border border-gray-300 rounded p-2 hover:bg-gray-300 transition duration-300 cursor-pointer"
            onClick={handleOpenCreateTask}
          >
            <div>
              <FaPlus />
            </div>
            <div>Add New Task</div>
          </button>

          <div className="min-h-screen">
              <Outlet context={{ tasks, handleEditTask }} />
          </div>
        </div>
        <div
          className={`${
            isOpenCreateTask ? "flex flex-col" : "hidden"
          } bg-gray-200/50 p-4 rounded-xl gap-4 `}
        >
          <div className="flex justify-between items-center text-2xl font-bold">
            <div>Task:</div>
            <button
              className="cursor-pointer hover:bg-gray-200 transition duration-300"
              onClick={handleCloseCreateTask}
            >
              <IoClose />
            </button>
          </div>

          <input
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="p-2 border border-gray-600 rounded outline-none"
          />
          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="p-2 border border-gray-600 rounded outline-none w-full h-[100px] resize-none"
          ></textarea>

          <div className="flex items-center gap-20">
            <div>List</div>
            <select
              className="outline-none border border-gray-300 rounded p-2"
              value={form.list}
              onChange={(e) => setForm({ ...form, list: e.target.value })}
            >
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
              <option value="Others">Others</option>
              <option value="None">None</option>
            </select>
          </div>

          <div className="flex items-center gap-10">
            <div>Due date</div>
            <input
              type="date"
              value={form.dueDate}
              onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
              className="p-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="font-bold text-2xl">Subtasks:</div>

<div className="flex flex-col gap-3">
  {form.subtasks.map((subtask) => (
    <div key={subtask.id} className="flex items-center gap-3">
      <input
        type="checkbox"
        checked={subtask.completed}
        onChange={(e) =>
          handleChangeSubtask(subtask.id, "completed", e.target.checked)
        }
      />
      <input
        type="text"
        value={subtask.title}
        onChange={(e) =>
          handleChangeSubtask(subtask.id, "title", e.target.value)
        }
        className="flex-1 p-2 border border-gray-400 rounded"
        placeholder="Subtask title"
      />
      <button
        onClick={() => handleDeleteSubtask(subtask.id)}
        className="text-red-500 font-bold transition duration-300 cursor-pointer"
      >
        <IoClose/>
      </button>
    </div>
  ))}

  <button
    onClick={handleAddSubtask}
    className="flex w-full gap-2 items-center border border-gray-300 rounded p-2 hover:bg-gray-300 transition duration-300 cursor-pointer"
  >
    <FaPlus />
    <div>Add New Subtask</div>
  </button>
</div>


          <div className="flex mt-[20px] gap-4 justify-around">
            <button
              onClick={() => handleDelete(form)}
              className="bg-red-500 font-bold text-white px-4 py-2 rounded-2xl hover:bg-red-700 transition cursor-pointer"
            >
              Delete Task
            </button>

            <button
              onClick={handleSave}
              className="bg-blue-500 font-bold text-white px-4 py-2 rounded-2xl hover:bg-blue-700 transition cursor-pointer"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
