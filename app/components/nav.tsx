import React from "react";
import Image from "next/image";
import Logo from "../assets/Seecondary Logo copy 1.png";
import { FaBars, FaUser } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";

const nav = () => {
  return (
    <section>
      {/* Mobile Navigation Bar */}
      <nav className=" flex items-center justify-between px-6 py-4 md:hidden">
        {/* Logo */}
        <Image src={Logo} alt="Logo" width={125} height={50} />
        {/* Hamburger Menu Icon */}
        <FaBars
          className=" bg-(--main-text) text-white p-1 rounded-md"
          size={30}
        />
      </nav>

      {/* Desktop Navigation Bar */}
      <nav className=" hidden xl:block">
        {/* Top navbar section */}
        <div className=" border-b px-16 py-6 border-(--Purple)/10 flex items-center justify-between">
          {/* logo */}
          <Image src={Logo} alt="Logo" />
          {/* buttons */}
          <div className=" flex items-center gap-6">
            <button className=" rounded-sm px-4 py-2 bg-(--primary) text-white flex items-center gap-2">
              <span className=" w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">
                <FaUser className="w-6 text-(--primary)" />
              </span>
              Account
              <MdKeyboardArrowDown />
            </button>
            <button className=" bg-(--Secondary) text-white rounded-sm px-5 py-2.5">
              Take Assessment
            </button>
          </div>
        </div>
        {/* Bottom navbar section - containing link menu */}
        <div className=" flex items-center justify-center px-16 py-5 gap-8 text-(--main-text)">
          <a
            href="#"
            className=" flex items-center gap-1 border-b border-(--primary) text-(--primary)"
          >
            About <MdKeyboardArrowDown />
          </a>
          <a href="#" className=" flex items-center gap-1">
            What We Do <MdKeyboardArrowDown />
          </a>
          <a href="#" className=" flex items-center gap-1">
            Jobs <MdKeyboardArrowDown />
          </a>
          <a href="#">Projects</a>
          <a href="#">TG Academy</a>
          <a href="#">Startegic Partnership</a>
          <a href="#">Pricing</a>
          <a href="#">Book a Consultation</a>
        </div>
      </nav>
    </section>
  );
};

export default nav;
