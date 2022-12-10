import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { MdKeyboardArrowRight, MdCategory } from "react-icons/md";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const productItems = [
    { title: "Categories", icon: <MdCategory />, isTitle: true },
    { title: "Mobile Phones", icon: <HiShoppingCart /> },
    { title: "Mobile Phones", icon: <HiShoppingCart /> },
    { title: "Mobile Phones", icon: <HiShoppingCart /> },
    { title: "Mobile Phones", icon: <HiShoppingCart /> },
    { title: "Mobile Phones", icon: <HiShoppingCart /> },
    { title: "Mobile Phones", icon: <HiShoppingCart /> },
    { title: "Mobile Phones", icon: <HiShoppingCart /> },
  ];

  return (
    <div
      className={`relative ${
        open ? "w-52" : "w-16"
      } bg-green-600 py-2 transition-all duration-300`}
    >
      <div
        className="absolute -right-4 top-14 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-4 border-green-600 bg-white text-xl text-green-600"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <MdKeyboardArrowRight />
      </div>
      <ul className="space-y-4 p-2">
        {productItems.map((item, index) => (
          <li
            key={index}
            className={`${
              item.isTitle && "pointer-events-none mb-10"
            } flex cursor-pointer items-center space-x-4 rounded-lg px-3 py-2 text-green-100 hover:bg-green-200 hover:text-green-600`}
          >
            <div className="pointer-events-none text-2xl">{item.icon}</div>
            <a
              className={`whitespace-nowrap ${
                !open && "scale-0"
              } pointer-events-none origin-left transform transition-transform duration-300`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
