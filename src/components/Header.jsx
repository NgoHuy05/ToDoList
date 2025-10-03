import React, { useState } from "react";
import { FaHome, FaUser, FaEnvelope, FaHeart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";
import { IoDocumentText } from "react-icons/io5";

const navItems = [
  { path: "/", label: "Home", icon: <FaHome /> },
  { path: "docs", label: "Document", icon: <IoDocumentText /> },
];

const Header = () => {
  const [isOpenMenuHeader, setIsOpenMenuHeader] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 w-full flex justify-between font-bold bg-white text-gray-900 shadow p-4 ">
        <Link
          to="/"
          className="flex justify-center items-center gap-3 cursor-pointer"
        >
          <div className="text-amber-500 text-[20px] py-1 px-2 rounded  font-serif boder border-2">
            H
          </div>
            <div>ToDoList</div>
      
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex gap-2 items-center p-1 hover:bg-gray-200 rounded transition duration-300 cursor-pointer ${
                  isActive ? "underline underline-offset-[10px] decoration-2" : ""
                }`
              }
            >
              {item.icon} {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex gap-2 items-center">
          Welcome <FaHeart />
        </div>

        <div
          onClick={() => setIsOpenMenuHeader(!isOpenMenuHeader)}
          className="flex items-center p-2 hover:bg-gray-200 rounded transition duration-300 cursor-pointer text-[25px] lg:hidden "
        >
          <IoMdMenu />
        </div>
      </div>

      {isOpenMenuHeader && (
        <div className="sticky top-[95px] w-full bg-white shadow-md z-40 lg:hidden">
          <nav className="flex flex-col text-gray-900 font-semibold">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpenMenuHeader(false)}
                className="p-4 hover:bg-gray-100 flex items-center gap-2"
              >
                {item.icon} {item.label}
              </NavLink>
            ))}

            <div className="flex justify-center items-center border-b-2 border-gray-600 w-[98%] m-auto"></div>
            <div className="p-4 flex items-center gap-2 ">
              Welcome <FaHeart />
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
