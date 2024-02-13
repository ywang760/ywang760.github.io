import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface navItem {
  name: string;
  route: string;
}

const NAV_ITEMS: navItem[] = [
  { name: "About", route: "/" },
  { name: "Projects", route: "/projects" },
  { name: "Experiences", route: "/experiences" },
  { name: "Resume", route: "/portfolio/resume.pdf" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white px-6 py-6 shadow">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center min-h-[4vh]">
        <div className="flex justify-between items-center">
          {pathname !== "/" && (
            <div>
              <Link
                href="/"
                className="text-2xl font-bold text-primary-600 lg:text-3xl hover:text-primary-700 "
              >
                Yutong Wang
              </Link>
            </div>
          )}
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
          {NAV_ITEMS.map((item, idx) =>
            item.name === "Resume" ? (
              <a
                key={idx}
                href={item.route}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-700 block text-base"
              >
                {item.name}
              </a>
            ) : (
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
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
