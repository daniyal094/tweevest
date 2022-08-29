// import { useState } from "react";
// import Image from "next/image";
// function NavLink({ to, children }) {
//   return (
//     <a href={to} className={`mx-4 text-blue-900 text-sm font-medium`}>
//       {children}
//     </a>
//   );
// }

// function MobileNav({ open, setOpen }) {
//   return (
//     <div
//       className={`absolute top-16 left-0  w-screen bg-gray-100 transform ${
//         open ? "-translate-x-0" : "-translate-x-full"
//       } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
//     >

//       <div className="flex flex-col ml-4 mt-10">
//         <a
//           className="text-xl font-medium my-4  text-blue-900 "
//           href="/"
//           onClick={() =>
//             setTimeout(() => {
//               setOpen(!open);
//             }, 100)
//           }
//         >
//            Screener

//         </a>
//         <a
//           className="text-xl font-normal my-4 text-blue-900 "
//           href="/"
//           onClick={() =>
//             setTimeout(() => {
//               setOpen(!open);
//             }, 100)
//           }
//         >
//           Watchlist
//         </a>
//         <a
//           className="text-xl font-normal my-4 text-blue-900 "
//           href="/"
//           onClick={() =>
//             setTimeout(() => {
//               setOpen(!open);
//             }, 100)
//           }
//         >
//           About
//         </a>
//       </div>
//     </div>
//   );
// }

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   return (
//     <nav className="flex filter  bg-gray-100 px-4 h-16 items-center">
//       <MobileNav open={open} setOpen={setOpen} />
//       <div className="w-5/12 flex items-center">
//         <a className="text-2xl font-semibold" href="/">
//           <Image src={"/logo.svg"} width={150} height={30} />
//         </a>
//       </div>
//       <div className="w-9/12 flex justify-end items-center">
//       <div className="bg-white rounded flex-row flex items-center h-10 justify-center w-5/6 mr-10">
//           <Image src={'/searchIcon.svg'} width={20} height={20} />
//           <input className="bg-white outline-0 px-2   w-10/12 " placeholder="Search  Company Status"/>
//         </div>
//         <div
//           className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
//           onClick={() => {
//             setOpen(!open);
//           }}
//         >
//           {/* hamburger button */}
//           <span
//             className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
//               open ? "rotate-45 translate-y-3.5" : ""
//             }`}
//           />
//           <span
//             className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
//               open ? "w-0" : "w-full"
//             }`}
//           />
//           <span
//             className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
//               open ? "-rotate-45 -translate-y-3.5" : ""
//             }`}
//           />
//         </div>

//         <div className="hidden md:flex  items-center">
//           <NavLink to="/">Screener</NavLink>
//           <NavLink to="/">Watchlist</NavLink>
//           <NavLink to="/">About</NavLink>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded">
//             {" "}
//             Download
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// Profile Dropdown
// const ProfileDropDown = (props) => {
//   const [state, setState] = useState(false);
//   const profileRef = useRef();

//   const navigation = [
//     { title: "Dashboard", path: "javascript:void(0)" },
//     { title: "Settings", path: "javascript:void(0)" },
//     { title: "Log out", path: "javascript:void(0)" },
//   ];

//   useEffect(() => {
//     const handleDropDown = (e) => {
//       if (!profileRef.current.contains(e.target)) setState(false);
//     };
//     document.addEventListener("click", handleDropDown);
//   }, []);

//   return (
//     <div className={`relative ${props.class}`}>
//       <div className="flex items-center space-x-4">
//         <button
//           ref={profileRef}
//           className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
//           onClick={() => setState(!state)}
//         >
//           <img
//             src="https://randomuser.me/api/portraits/men/46.jpg"
//             className="w-full h-full rounded-full"
//           />
//         </button>
//         <div className="lg:hidden">
//           <span className="block">Micheal John</span>
//           <span className="block text-sm text-gray-500">john@gmail.com</span>
//         </div>
//       </div>
//       <ul
//         className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
//           state ? "" : "lg:hidden"
//         }`}
//       >
//         {navigation.map((item, idx) => (
//           <li>
//             <a
//               key={idx}
//               className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
//               href={item.path}
//             >
//               {item.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default () => {
  const [menuState, setMenuState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
    { title: "Guides", path: "javascript:void(0)" },
    { title: "Partners", path: "javascript:void(0)" },
  ];
  return (
    <nav className="bg-gray-200 border-b">
      <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto">
        <div className="flex-none lg:flex-initial">
          <a href="javascript:void(0)">
            <Image src={"/logosvg.svg"} width={120} height={50} alt="logo" />
          </a>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6 ">
            <form className="flex items-center w-full space-x-2 border rounded-md p-2 bg-white" >
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
            <div
              className={`bg-gray-200 absolute z-20  w-full lg: top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${
                menuState ? "" : "hidden"
              }`}
            >
              <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0 justify-end">
                {navigation.map((item, idx) => (
                  <li key={idx} className="text-gray-600 hover:text-gray-900">
                    <p className={`mx-4 text-blue-900 text-sm font-medium cursor-pointer`}>
                      {item.title}
                    </p>
                  </li>
                ))}
              </ul>
              {/* <ProfileDropDown class="mt-5 pt-5 border-t lg:hidden" /> */}
            </div>
            {/* <ProfileDropDown class="hidden lg:block" /> */}
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
          </div>
        </div>
      </div>
    </nav>
  );
};
