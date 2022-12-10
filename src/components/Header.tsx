import React from "react";
import {
  HiOutlineHome,
  HiOutlineViewGrid,
  HiOutlineGift,
  HiOutlinePhone,
  HiOutlineSearch,
} from "react-icons/hi";

const Header = () => {
  const menu = [
    { title: "Home", link: "#" },
    { title: "Product", link: "#" },
    { title: "Offers", link: "#" },
    { title: "Contact", link: "#" },
  ];

  return (
    <div className="relative h-20 bg-green-800 text-white">
      <div className="relative flex items-center justify-between px-10 py-2 text-lg">
        <div>Logo</div>
        <ul className="absolute top-1/2 left-1/2 flex -translate-y-1/2 -translate-x-1/2 transform items-center space-x-10 font-semibold uppercase">
          {menu.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-5">
          <div className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-white py-1 px-3">
            <a>Sign in</a>
          </div>
          <div className="flex cursor-pointer items-center justify-center rounded-lg bg-white py-1 px-3 text-green-800">
            <a>Sign up</a>
          </div>
        </div>
      </div>
      <div className="absolute top-14 left-1/2 flex h-12 w-[500px] -translate-x-1/2 transform rounded-bl-[25px] rounded-tr-[25px] bg-white shadow-lg">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Product"
          className="w-full border-none bg-transparent px-8  text-gray-500 outline-none"
        />
        <div className="flex h-full w-40 cursor-pointer items-center justify-center rounded-bl-[25px] rounded-tr-[25px] bg-green-600 text-lg font-medium">
          <a>Search</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
