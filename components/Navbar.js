import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Screener", path: "javascript:void(0)" },
    { title: "Watchlist", path: "javascript:void(0)" },
    { title: "About", path: "javascript:void(0)" },

  ];
  return (
    <nav className="bg-gray-100 border-b ">
      <div className="flex items-center space-x-8 py-3 px-4 max-w-12xl mx-auto ">
        <div className="flex-none lg:flex-initial">
          <a href="javascript:void(0)">
            <Image src={"/logosvg.svg"} width={120} height={50} alt="logo" />
          </a>
        </div>
        <div className="flex-1 flex items-center justify-between ">
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6  ">
            <form className="flex items-center w-full space-x-2 border rounded-md p-2 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-none text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto "
                type="text"
                placeholder="Search"
              />
            </form>

            <button
              className="outline-none text-gray-400 block lg:hidden"
              onClick={() => setMenuState(!menuState)}
            >
              {menuState ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>

            <div
              className={`bg-gray-100 absolute z-20  w-full lg: top-16 left-0 px-4 py-3 border-b lg:static lg:block lg:border-none ${
                menuState ? "" : "hidden"
              }`}
              style={{ marginLeft: "0px" }}
            >
              <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0 justify-end items-center">
                {navigation.map((item, idx) => (
                  <li key={idx} className="text-gray-600 hover:text-gray-900">
                    <p
                      className={`mx-4 text-blue-900 text-sm font-medium cursor-pointer`}
                    >
                      {item.title}
                    </p>
                  </li>
                ))}
                <li>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                    Download
                  </button>
                </li>
              </ul>
        
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
