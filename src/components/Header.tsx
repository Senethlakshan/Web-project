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
    <div className="relative h-[8rem] bg-green-800 text-white">
      <div className="relative flex items-center justify-between px-10 py-4 text-[1.8rem]">
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
      <div className="absolute top-[5.5rem] left-1/2 flex h-[5rem] w-[50rem] -translate-x-1/2 transform rounded-bl-[3rem] rounded-tr-[3rem] bg-white shadow-lg">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Product"
          className="ml-[2.5rem] w-full border-none bg-transparent  text-gray-500 outline-none"
        />
        <div className="flex h-full w-[16rem] cursor-pointer items-center justify-center rounded-bl-[3rem] rounded-tr-[3rem] bg-green-600 text-[1.6rem] font-medium">
          <a>Search</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
