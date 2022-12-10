import React, { useState } from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const productItems = [
    { title: "Mobile Phones", icons: <HiOutlineMoon /> },
    { title: "Mobile Phones", icons: <HiOutlineMoon /> },
    { title: "Mobile Phones", icons: <HiOutlineMoon /> },
    { title: "Mobile Phones", icons: <HiOutlineMoon /> },
    { title: "Mobile Phones", icons: <HiOutlineMoon /> },
    { title: "Mobile Phones", icons: <HiOutlineMoon /> },
    { title: "Mobile Phones", icons: <HiOutlineMoon /> },
  ];

  return (
    <div
      className={`relative ${
        open ? "w-52" : "w-16"
      } bg-green-600 py-2 duration-300`}
    >
      <div
        className="absolute -right-4 top-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-4 border-green-600 bg-white text-xl text-green-600"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <MdKeyboardArrowRight />
      </div>
      <div className="text-center uppercase text-white">
        <h1>Categories</h1>
      </div>
    </div>
  );
};

export default Sidebar;
