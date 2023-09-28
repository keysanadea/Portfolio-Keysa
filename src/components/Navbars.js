"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#D9D9D9]/70">
      <div className="flex content-start items-center h-16 w-screen md:justify-between md:w-full">
        <button onClick={toggleMenu} type="button" className="text-[#5E5E5E] hover:text-black ml-5 md:invisible">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14">
            <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="flex invisible md:visible md:justify-center md:space-x-14 lg:space-x-36">
          <Link href="/">
            <button href="/" className="font-bold hover:scale-150 text-2xl">Home</button>
          </Link>
          <Link href="hometown">
            <button className="font-bold hover:scale-150 text-2xl">Hometown</button>
          </Link>
          <Link href="profile">
            <button className="font-bold hover:scale-150 text-2xl">Profile</button>
          </Link>
        </div>
        <div className="invisible md:visible md:mr-5">
          <img src="/img/self_img.png" width={40} height={40} alt="Self image" className="drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] rounded-full"></img>
        </div>
      </div>
      <div className={`${menuOpen ? 'visible' : 'hidden'} flex flex-col md:hidden`}>
        <Link href="/">
          <button href="/" className="p-2 font-bold text-2xl">Home</button>
        </Link>
        <Link href="hometown">
          <button className="p-2 font-bold text-2xl">Hometown</button>
        </Link>
        <Link href="profile">
          <button className="p-2 font-bold text-2xl">Profile</button>
        </Link>
      </div>
    </nav>
  )
}