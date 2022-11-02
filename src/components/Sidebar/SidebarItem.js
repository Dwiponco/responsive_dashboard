import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

import { useStateContext } from "../../contexts/ContextProvider";

const SidebarItem = ({ link }) => {
  const location = useLocation();
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();
  const [open, setOpen] = useState(false);
  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const activeLink =
    "flex items-center justify-between jus gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white  text-md m-2";
  const normalLink =
    "flex items-center justify-between gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  if (link.children) {
    return (
      <>
        <NavLink
          //   to={`/${link.name}`}
          key={link.path}
          onClick={() => {
            setOpen(!open);
          }}
          style={{
            backgroundColor: link.state === location.state ? currentColor : "",
          }}
          className={link.state === location.state ? activeLink : normalLink}
        >
          {link.icon}
          <span className="capitalize flex justify-start w-full">
            {link.name}
          </span>
          <FiChevronDown className="mr-4" style={{ width: "40px" }} />
        </NavLink>
        <div className={open ? "bg-gray-50 ml-[10px]" : "hidden"}>
          {link.children.map((d, i) => (
            <SidebarItem link={d} key={i} />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <NavLink
        to={`/${link.name}`}
        state={link.state}
        key={link.path}
        onClick={() => {
          handleCloseSideBar();
          setOpen(false);
        }}
        style={({ isActive }) => ({
          backgroundColor: isActive ? currentColor : "",
        })}
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        {link.icon}
        <span className="capitalize flex justify-start w-full">
          {link.name}
        </span>
      </NavLink>
    );
  }
};

export default SidebarItem;
