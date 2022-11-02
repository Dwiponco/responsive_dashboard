import React from "react";
import { AiOutlineCalendar, AiOutlineShoppingCart } from "react-icons/ai";
import { FiShoppingBag, FiEdit } from "react-icons/fi";
import { BsKanban } from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";

const links = [
  {
    links: [
      {
        name: "ecommerce",
        path: "/ecommerce",
        state: "ecommerce",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    links: [
      {
        name: "orders",
        path: "/orders",
        state: "orders",
        icon: <AiOutlineShoppingCart />,
        children: [
          {
            name: "orders2",
            path: "/orders2",
            state: "orders",
            // icon: <AiOutlineShoppingCart />,
          },
          {
            name: "orders3",
            path: "/orders3",
            state: "orders",
            // icon: <AiOutlineShoppingCart />,
          },
        ],
      },
      {
        name: "employees",
        path: "/employees",
        state: "employees",
        icon: <IoMdContacts />,
      },
      {
        name: "customers",
        path: "/customers",
        state: "customers",
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    links: [
      {
        name: "calendar",
        path: "/calendar",
        state: "calendar",
        icon: <AiOutlineCalendar />,
        children: [
          {
            name: "calendar2",
            path: "/calendar/calendar2",
            state: "calendar",
            icon: <AiOutlineShoppingCart />,
          },
          {
            name: "calendar3",
            path: "/calendar/calendar3",
            state: "calendar",
            icon: <AiOutlineShoppingCart />,
          },
        ],
      },
      {
        name: "kanban",
        path: "/kanban",
        state: "kanban",
        icon: <BsKanban />,
      },
      {
        name: "editor",
        path: "/editor",
        state: "editor",
        icon: <FiEdit />,
      },
      {
        name: "color-picker",
        path: "/color-picker",
        state: "color-picker",
        icon: <BiColorFill />,
      },
    ],
  },
];

export default links;
