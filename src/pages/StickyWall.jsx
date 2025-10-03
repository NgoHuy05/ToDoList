import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const StickyWall = () => {
  const [isOpenSticky, setIsOpenSticky] = useState(false);
  const [stickys, setStickys] = useState(() => {
    const saveItemd = localStorage.getItem("stickys");
    return saveItemd ? JSON.parse(saveItemd) : [];
  });

  useEffect(() => {
    localStorage.setItem("stickys", JSON.stringify(stickys));
  }, [stickys]);

  const getEmptyForm = () => ({
    id: null,
    title: "",
    content: "",
    color: "bg-amber-300",
    duaDate: "",
  });
  const [form, setForm] = useState(getEmptyForm);

  const handleOpenCreateSticky = () => {
    setIsOpenSticky(true);
    setForm(getEmptyForm());
  };
  const handleCloseSticky = () => {
    setIsOpenSticky(false);
    setForm(getEmptyForm());
  };
  const handleEditSticky = (sticky) => {
    setIsOpenSticky(true);
    setForm(sticky);
  };
  const handleSave = () => {
    if (form.id) {
      setStickys(stickys.map((item) => (item.id === form.id ? form : item)));
    } else {
      const newSticky = { ...form, id: Date.now() };
      setStickys([...stickys, newSticky]);
    }
    setForm(getEmptyForm());
    setIsOpenSticky(false);
  };
  const handleDelete = (sticky) => {
    setStickys(stickys.filter((item) => item.id !== sticky.id));
    setForm(getEmptyForm());
    setIsOpenSticky(false);

  };
  return (
    <>
      {isOpenSticky && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
    <div className="flex flex-col w-[666px] h-[500px] bg-white p-4 rounded-xl gap-4 shadow-lg">
      <div className="flex justify-between items-center text-2xl font-bold">
        <div>Sticky:</div>
        <button
          className="cursor-pointer hover:bg-gray-200 transition duration-300 px-2"
          onClick={handleCloseSticky}
        >
          <IoClose/>
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
        placeholder="Content"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
        className="p-2  border border-gray-600 rounded outline-none w-full h-[200px] resize-none"
      ></textarea>
      <div className="flex items-center gap-20">
            <div>Color</div>
            <select
              className="outline-none border border-gray-300 rounded p-2"
              value={form.color}
              onChange={(e) => setForm({ ...form, color: e.target.value })}
            >
              <option value="bg-amber-300">yellow</option>
              <option value="bg-red-300">red</option>
              <option value="bg-blue-300">blue</option>
              <option value="bg-green-300">green</option>
              <option value="bg-violet-300">violet</option>
              <option value="bg-orange-300">orange</option>
              <option value="bg-pink-300">pink</option>
            </select>
          </div>
      <div className="flex justify-between items-center gap-5 m-auto">
        <button
        onClick={handleSave}
        className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600"
      >
        Save 
      </button>
      <button
        onClick={() => handleDelete(form)}
        className="bg-red-500 text-white py-2 px-4 rounded-xl hover:bg-red-600"
      >
        Delete
      </button>
      </div>
    </div>
  </div>
)}
<div className={` p-5 border border-gray-300 m-5 z-0 ${isOpenSticky ? "opacity-30 pointer-events-none" : ""}`}>
  <div className=" flex flex-wrap gap-10 m-5">
    {stickys.map((item) => (
      <div
        key={item.id}
        onClick={() => handleEditSticky(item)}
        className={`flex flex-col gap-4 size-[333px]  ${item.color} p-4 rounded transition-all duration-300 hover:scale-105 cursor-pointer`}
      >
        <div className="text-xl font-bold"> {item.title} </div>
        <div className="whitespace-pre-line"> {item.content} </div>
      </div>
    ))}

    <div
      onClick={handleOpenCreateSticky}
      className="flex flex-col gap-4 size-[333px] items-center justify-center bg-gray-200 p-4 rounded transition-all duration-300 hover:scale-105 cursor-pointer"
    >
      <div className="text-3xl">
        <FaPlus />
      </div>
    </div>
  </div>
</div>


    </>
  );
};

export default StickyWall;
