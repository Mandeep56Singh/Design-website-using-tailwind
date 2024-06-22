import React from "react";
import { NavLink } from "react-router-dom";

type props = {
  isActive: boolean;
};
const Header: React.FC = () => {
  const getActiveClass = (isActive: boolean) => {
    if (isActive) return "text-orange-500";
  };
  return (
    <header className="mx-auto xl:w-[1210px] ">
      <div className="mt-5 flex h-[50px] justify-between sm:mt-4 xsm:mt-2">
        <div className="mx-3 flex items-center gap-1 ">
          <img
            src="src/assets/images/logos/Vector.png"
            alt="logo"
            className="sm:size-8  "
          />
          <h1 className="text-2xl text-black-light sm:mt-2 sm:text-2xlp xsm:mt-2 xsm:font-DM-serif-Display font-semibold">
            SELHONO
          </h1>
        </div>
        <nav className="flex items-center gap-3 xl:gap-12">
          <ul className="hidden lg:mr-5 lg:flex lg:gap-12">
            <li className="font-Jost text-xl font-medium">
              <NavLink
                to="/"
                className={({ isActive }: props) => getActiveClass(isActive)}
              >
                Home
              </NavLink>
            </li>
            <li className="font-Jost text-xl font-medium">
              <NavLink
                to="/services"
                className={({ isActive }: props) => getActiveClass(isActive)}
              >
                Services
              </NavLink>
            </li>
            <li className="font-Jost text-xl font-medium">
              <NavLink
                to="/projects"
                className={({ isActive }: props) => getActiveClass(isActive)}
              >
                Projects
              </NavLink>
            </li>
            <li className="font-Jost text-xl font-medium">
              <NavLink
                to="/about"
                className={({ isActive }: props) => getActiveClass(isActive)}
              >
                About
              </NavLink>
            </li>
            <li className="font-Jost text-xl font-medium">
              <NavLink
                to="/contact"
                className={({ isActive }: props) => getActiveClass(isActive)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div>
            <img
              src="src/assets/images/icons/search.png"
              alt="search"
              className="md:mr-4"
            />
          </div>
          <img
            src="src/assets/images/icons/menu.svg"
            alt="menu"
            className="mr-5 block size-6 md:mr-24 lg:hidden"
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
