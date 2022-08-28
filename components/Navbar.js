import { useState } from "react";
import Image from "next/image";
function NavLink({ to, children }) {
  return (
    <button  className={`mx-4 text-blue-900 text-sm font-medium`}>
      {children}
    </button>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-16 left-0  w-screen bg-gray-100 transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >

      <div className="flex flex-col ml-4 mt-10">
        <button
          className="text-xl font-medium my-4  text-blue-900 "
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
           Screener  
      
        </button>
        <button
          className="text-xl font-normal my-4 text-blue-900 "
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Watchlist
        </button>
        <button
          className="text-xl font-normal my-4 text-blue-900 "
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </button>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter  bg-gray-100 px-4 h-16 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-5/12 flex items-center">
        <span className="text-2xl font-semibold" >
          <Image src={"/logo.svg"} width={150} height={30} alt="" />
        </span>
      </div>
      <div className="w-9/12 flex justify-end items-center">
      <div className="bg-white rounded flex-row flex items-center h-10 justify-center w-5/6 mr-10">
          <Image src={'/searchIcon.svg'} width={20} height={20} alt=""/>
          <input className="bg-white outline-0 px-2   w-10/12 " placeholder="Search  Company Status"/>
        </div>
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

       
        <div className="hidden md:flex  items-center">
          <NavLink to="/">Screener</NavLink>
          <NavLink to="/">Watchlist</NavLink>
          <NavLink to="/">About</NavLink>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            {" "}
            Download
          </button>
        </div>
      </div>
    </nav>
  );
}
