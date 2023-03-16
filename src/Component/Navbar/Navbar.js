import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="wraper bg-[#202124] h-10 text-white border-b border-[#4d4d4d]">
      <div className="w-full">
        <ul className="navdiv flex flex-row gap-16 items-center justify-start tracking-wide font-[roboto] text-[#bdc1c6] px-20 ">
          <Link className="cursor-pointer hover:text-white" to="/NewsWebsite"> Home </Link>
          <Link className="cursor-pointer hover:text-white" to="/business">
            Business
          </Link>
          <Link className="cursor-pointer hover:text-white" to="/entertainment">
          Entertainment
          </Link>
          <Link className="cursor-pointer hover:text-white" to="/technology">
          Technology
          </Link>
          <Link className="cursor-pointer hover:text-white" to="/science">
          Science
          </Link>
          <Link className="cursor-pointer hover:text-white" to="/sports">
          Sports
          </Link>
          <Link className="cursor-pointer hover:text-white" to="/health">
          Health
          </Link>
      
        </ul>
      </div>
    </div>
  );
}
