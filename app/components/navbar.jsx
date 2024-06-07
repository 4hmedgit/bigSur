"use client";
import { useState } from "react";
import logo from "../../public/logo/logo.svg";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#F5F5F5] ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between xl:mx-48 lg:mx-16 md:mx-24 sm:mx-8 xs:mx-6 py-6 ">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={logo} className="h-full 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-32 xs:w-32" alt="BigSur Logo" quality={100} />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex gap-6 p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a
                href="/network"
                className={`block py-2 px-3 text-lg font-bold leading-[23.94px] md:hover:bg-transparent md:border-0 md:p-0 hover:text-[#26BE69] ${
                  activeLink === "Network"
                    ? "text-[#26BE69] border-4 border-black"
                    : "text-black"
                }`}
                aria-current="page"
                onClick={() => handleLinkClick("Network")}
              >
                Network
              </a>
            </li>
            <li>
              <a
                href="/community"
                className={`block py-2 px-3 text-lg font-bold leading-[23.94px] md:hover:bg-transparent md:border-0 md:p-0 hover:text-[#26BE69] ${
                  activeLink === "Community" ? "text-[#26BE69]" : "text-black"
                }`}
                onClick={() => handleLinkClick("Community")}
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="/developer"
                className={`block py-2 px-3 text-lg font-bold leading-[23.94px] md:hover:bg-transparent md:border-0 md:p-0 hover:text-[#26BE69] ${
                  activeLink === "Developer" ? "text-[#26BE69]" : "text-black"
                }`}
                onClick={() => handleLinkClick("Developer")}
              >
                Developer
              </a>
            </li>
          </ul>
        </div>
        <div className={`md:hidden fixed inset-y-0 right-0 z-50 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

          <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full bg-white shadow-lg">
            <div className="p-4">
              <button
                className="absolute top-0 right-0 p-4 text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <ul className="font-medium space-y-4">
                <li>
                  <Link
                    href="#"
                    className={`block py-2 px-3 text-lg font-bold leading-[23.94px] hover:text-[#26BE69] ${
                      activeLink === "Network" ? "text-[#26BE69]" : "text-black"
                    }`}
                    onClick={() => handleLinkClick("Network")}
                  >
                    Network
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`block py-2 px-3 text-lg font-bold leading-[23.94px] hover:text-[#26BE69] ${
                      activeLink === "Community" ? "text-[#26BE69]" : "text-black"
                    }`}
                    onClick={() => handleLinkClick("Community")}
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={`block py-2 px-3 text-lg font-bold leading-[23.94px] hover:text-[#26BE69] ${
                      activeLink === "Developer" ? "text-[#26BE69]" : "text-black"
                    }`}
                    onClick={() => handleLinkClick("Developer")}
                  >
                    Developer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
     
    </nav>
  );
}

export default Navbar;
