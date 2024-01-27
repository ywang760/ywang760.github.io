import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { name: "About", route: "/" },
  { name: "Projects", route: "/projects" },
  { name: "Experiences", route: "/experiences" },
  { name: "Resume", route: "/resume" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white px-6 py-6 shadow">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-primary-600 lg:text-3xl hover:text-primary-700 "
            >
              Yutong Wang
            </Link>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 flex"
              aria-label="toggle menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 mt-4 md:mt-0 space-y-2 md:space-y-0`}
        >
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              href={item.route}
              className={`text-base ${
                pathname === item.route
                  ? "text-primary-600 hover:text-primary-700"
                  : "text-gray-600 hover:text-gray-700"
              } block text-base`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
