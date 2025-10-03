import { FaAngleRight } from "react-icons/fa6";
import { useOutletContext } from "react-router-dom";
import { BiTaskX } from "react-icons/bi";

const Today = () => {
  const { tasks, handleEditTask } = useOutletContext();
  const isToday = (date) => {
    const today = new Date().toISOString().split("T")[0];
    return date === today;
  };
  const convertDate = (date) => {
    const dateForm = new Date(date);
    return dateForm.toISOString().split("T")[0];
  };
  return (
    <div className="flex flex-col gap-5">
      {tasks
        .filter((task) => isToday(task.dueDate))
        .map((task) => (
          <div
            key={task.id}
            onClick={() => handleEditTask(task)}
            className="flex flex-col border border-gray-300 rounded p-2 hover:bg-gray-300 transition duration-300 cursor-pointer gap-5"
          >
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  className="w-4 h-4 cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                />
                <div>{task.title}</div>
              </div>
              <div>
                <FaAngleRight />
              </div>
            </div>

            <div className="flex gap-[50px]">
              <div className="flex gap-2 items-center">
                <BiTaskX />
                <div>{convertDate(task.dueDate)}</div>
              </div>
              <div className="flex gap-2 items-center">
                <div>{task.subtasks?.length || 0}</div>
                <div>subtasks</div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="">List: </div>
                <div>{task.list}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Today;
