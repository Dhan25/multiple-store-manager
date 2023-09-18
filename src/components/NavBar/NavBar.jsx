import React, { useState } from "react";
import logo from "../../assets/images/store-logo.svg";
import { data } from "../../constant/Data";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [navMenu, setNavMenu] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-10">
      <nav className="bg-white flex items-center justify-between lg:px-32 px-6 py-6 shadow-md">
        <a href="" className="flex items-center">
          <img src={logo} alt="" className="h-10 md:h-12" />
          <span className="ml-2 italic font-font-roboto font-semibold text-lg text-gray-900">
            Shappy
          </span>
        </a>

        {/* Menu For Large Screen */}
        <ul className="lg:flex items-center gap-12 hidden">
          {data.map((item) => (
            <li key={item.id} className="uppercase text-gray-900 font-medium">
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>

        {/* Handle Click Menu */}
        <div className="lg:hidden inline-block">
          {navMenu ? (
            <IoClose
              className="w-6 h-6 cursor-pointer"
              onClick={() => setNavMenu(false)}
            />
          ) : (
            <FaBars
              className="w-6 h-6 cursor-pointer"
              onClick={() => setNavMenu(true)}
            />
          )}

          {/* Mobile Menu */}
          <div
            className={`absolute top-0 left-0 h-screen md:w-[400px] w-3/4 p-6 backdrop-blur-lg bg-gray-100 shadow-2xl ${
              navMenu ? "left-0" : "left-full"
            }`}
          >
            <ul className="text-gray-950">
              {data.map((item) => (
                <li key={item.id} className="border-b border-gray-900 mt-5 text-lg uppercase">
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
