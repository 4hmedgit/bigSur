import React from "react";
import logo from "../../public/logo/logo.svg";
import Image from "next/image";

function Footer() {
  return (

    <div className="relative overflow-hidden">
      <footer className="overflow-hidden w-full my-10 mx-auto border-t border-[#B2B2B2] ">
        <div className="container  max-w-screen-xl mx-auto xl:px-44 lg:px-10 md:px-20 sm:px-10 xs:px-10 mt-10 py-8  grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="flex justify-between items-start">
              <div className="flex flex-col items-start gap-4">
                <Image src={logo} alt="BigSur Logo" quality={100} className="h-10" />
                <p className="text-sm">
                  Next-Gen DEPIN Network for IoT and
                  <br />
                  Industrial Security
                </p>
              </div>
              <div className="lg:hidden md:hidden sm:flex xs:flex justify-end space-x-4 md:mt-0">
                <a
                  href="https://discord.com"
                  aria-label="Discord"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-discord"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.146.25-.308.577-.422.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.438-.845.05.05 0 0 0-.052-.025c-1.1.161-2.156.446-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.027.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.422.582-.875.818-1.351a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011c-.448-.134-.873-.309-1.288-.504a.05.05 0 0 1-.007-.086.051.051 0 0 1 .015-.011 8.875 8.875 0 0 0 1.926.616.05.05 0 0 0 .057-.036c.025-.094.054-.19.086-.284a12.252 12.252 0 0 0 5.12 0c.031.093.061.189.086.283a.05.05 0 0 0 .057.037c.655-.117 1.3-.288 1.926-.616a.05.05 0 0 1 .078.037.05.05 0 0 1-.023.045 11.301 11.301 0 0 1-1.288.504.05.05 0 0 0-.03.047.05.05 0 0 0 .008.028c.24.476.514.929.818 1.351a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.46-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019ZM5.708 10.431c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm4.582 0c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  aria-label="Twitter"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.284-.006-.425A6.67 6.67 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.444-1.816 6.533 6.533 0 0 1-2.084.794 3.286 3.286 0 0 0-5.59 2.993A9.325 9.325 0 0 1 1.112 2.29 3.284 3.284 0 0 0 2.13 6.45 3.27 3.27 0 0 1 .64 5.697v.041a3.283 3.283 0 0 0 2.632 3.217 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.065 2.28A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045 9.345 9.345 0 0 0 5.026 1.47" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col  md:flex-row sm:flex-row sm xs:flex-row flex-wrap  lg:gap-14 md:gap-6 sm:gap-6 xs:gap-6 w-full col-span-2">
            <div className="flex flex-col gap-1">
              <h3 className="text-black font-bold   lg:text-base md:text-base sm:text-sm xs:text-sm">Resources</h3>
              <ul>
                <li>
                  <a href="/blog" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold  lg:text-base md:text-base sm:text-sm xs:text-sm">Learn</h3>
              <ul>
                <li>
                  <a href="/documentation" className="hover:underline">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold  lg:text-base md:text-base sm:text-sm xs:text-sm">Build</h3>
              <ul>
                <li>
                  <a href="/build-documentation" className="hover:underline">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold  lg:text-base md:text-base sm:text-sm xs:text-sm">Company</h3>
              <ul>
                <li>
                  <a href="https://github.com" className="hover:underline">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" className="hover:underline">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold  lg:text-base md:text-base sm:text-sm xs:text-sm">Legal</h3>
              <ul>
                <li>
                  <a href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:flex md:flex sm:hidden xs:hidden justify-end space-x-4 mt-4 md:mt-0">
              <a
                href="https://discord.com"
                aria-label="Discord"
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-discord"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.146.25-.308.577-.422.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.438-.845.05.05 0 0 0-.052-.025c-1.1.161-2.156.446-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.027.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.422.582-.875.818-1.351a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011c-.448-.134-.873-.309-1.288-.504a.05.05 0 0 1-.007-.086.051.051 0 0 1 .015-.011 8.875 8.875 0 0 0 1.926.616.05.05 0 0 0 .057-.036c.025-.094.054-.19.086-.284a12.252 12.252 0 0 0 5.12 0c.031.093.061.189.086.283a.05.05 0 0 0 .057.037c.655-.117 1.3-.288 1.926-.616a.05.05 0 0 1 .078.037.05.05 0 0 1-.023.045 11.301 11.301 0 0 1-1.288.504.05.05 0 0 0-.03.047.05.05 0 0 0 .008.028c.24.476.514.929.818 1.351a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.46-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019ZM5.708 10.431c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm4.582 0c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.284-.006-.425A6.67 6.67 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.444-1.816 6.533 6.533 0 0 1-2.084.794 3.286 3.286 0 0 0-5.59 2.993A9.325 9.325 0 0 1 1.112 2.29 3.284 3.284 0 0 0 2.13 6.45 3.27 3.27 0 0 1 .64 5.697v.041a3.283 3.283 0 0 0 2.632 3.217 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.065 2.28A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045 9.345 9.345 0 0 0 5.026 1.47" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="absolute top-[50%] xs:top-[70%] left-[-5%] lg:p-40 sm:p-28 xs:p-20 bg-green-500 rounded-full opacity-20 z-10  blur-2xl"></div>
    </div>
  );
}

export default Footer;
