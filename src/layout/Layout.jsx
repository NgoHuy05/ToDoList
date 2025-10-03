import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaTasks } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { FaNoteSticky } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FcParallelTasks } from "react-icons/fc";

import { useState } from "react";
import { NavLink } from "react-router-dom";

const Layout = () => {
  const [isOpenSider, setIsOpenSider] = useState(true);
  const handleChangeOpenSider = () => {
    setIsOpenSider(!isOpenSider);
  };
  return (
    <>
      <Header />
      <div className="bg-white text-black min-h-screen">
        <div
          className={`grid ${
            isOpenSider ? "grid-cols-[270px_1fr]" : "grid-cols-[60px_1fr]"
          }  gap-4`}
        >
          {isOpenSider ? (
            <div className="flex flex-col gap-5 bg-gray-200/50 m-5 p-4 min-h-screen rounded-2xl ">
              <div>
                <div className="flex justify-between items-center ">
                  <div className="text-xl font-bold">Menu</div>
                  <button
                    className="text-2xl  hover:bg-gray-300 transition duration-300 cursor-pointer"
                    onClick={handleChangeOpenSider}
                  >
                    <IoMdMenu />
                  </button>
                </div>
              </div>

              <form className="flex gap-2 items-center bg-white rounded-2xl p-2 border border-gray-600">
                <div className="font-bold text-xl">
                  <CiSearch />
                </div>
                <input type="text" placeholder="Search" className="w-4/5 p-1 outline-none  " />
              </form>

              <div className="uppercase font-bold">Tasks</div>
              <div className="flex flex-col gap-2">
                <NavLink
                  to="tasks/all-tasks"
                  className="flex justify-between items-center p-1 rounded hover:bg-gray-300 transition duration-300 cursor-pointer"
                >
                  <div className="flex gap-2 items-center">
                    <div>
                      <FcParallelTasks />
                    </div>
                    <div>AllTasks</div>
                  </div>
                  <div>5</div>
                </NavLink>
                <NavLink
                  to="tasks/upcoming"
                  className="flex justify-between items-center p-1 rounded hover:bg-gray-300 transition duration-300 cursor-pointer"
                >
                  <div className="flex gap-2 items-center">
                    <div>
                      <FaAnglesRight />
                    </div>
                    <div>Upcoming</div>
                  </div>
                  <div>5</div>
                </NavLink>

                <NavLink
                  to="tasks/today"
                  className="flex justify-between items-center p-1 rounded hover:bg-gray-300 transition duration-300 cursor-pointer"
                >
                  <div className="flex gap-2 items-center">
                    <div>
                      <FaTasks />
                    </div>
                    <div>Today</div>
                  </div>
                  <div>5</div>
                </NavLink>

                <NavLink
                  to="calendar"
                  className="flex justify-between items-center p-1 rounded hover:bg-gray-300 transition duration-300 cursor-pointer"
                >
                  <div className="flex gap-2 items-center">
                    <div>
                      <FaCalendarAlt />
                    </div>
                    <div>Calendar</div>
                  </div>
                  <div>5</div>
                </NavLink>

                <NavLink
                  to="stickywall"
                  className="flex justify-between items-center p-1 rounded hover:bg-gray-300 transition duration-300 cursor-pointer"
                >
                  <div className="flex gap-2 items-center">
                    <div>
                      <FaNoteSticky />
                    </div>
                    <div>Sticky Wall</div>
                  </div>
                  <div>5</div>
                </NavLink>
              </div>

              <div className="uppercase font-bold">Lists</div>
              <div className="flex flex-col gap-2">
                <NavLink
                  to="tasks/personal"
                  className="flex justify-between items-center p-1 rounded hover:bg-gray-300 transition duration-300 cursor-pointer"
                >
                  <div className="flex gap-2 items-center">
                    <div className="size-[20px] bg-red-500 rounded"></div>
                    <div>Personal</div>
                  </div>

                  <div>5</div>
                </NavLink>

                <NavLink
                  to="tasks/work"
                  className="flex justify-between items-center p-1 rounded hover:bg-gray-300 transition duration-300 cursor-pointer"
                >
                  <div className="flex gap-2 items-center">
                    <div className="size-[20px] bg-sky-500 rounded"></div>
                    <div>Work</div>
                  </div>
                  <div>5</div>
                </NavLink>
                <NavLink
                  to="tasks/others"
                  className="flex justify-between items-center p-1 rounded hover:bg-gray-300 transition duration-300 cursor-pointer"
                >
                  <div className="flex gap-2 items-center">
                    <div className="size-[20px] bg-yellow-500 rounded"></div>
                    <div>Others</div>
                  </div>
                  <div>5</div>
                </NavLink>
              </div>

              <NavLink
                to="setting"
                className="flex gap-2 items-center p-1 rounded hover:bg-gray-300 transition duration-300 cursor-pointer"
              >
                <div>
                  <IoMdSettings />
                </div>
                <div>Setting</div>
              </NavLink>
            </div>
          ) : (
            <button
              className="m-5 size-[24px] text-2xl hover:bg-gray-300 transition duration-300 cursor-pointer"
              onClick={handleChangeOpenSider}
            >
              <IoMdMenu />
            </button>
          )}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
