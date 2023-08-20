import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container px-20 h-20 flex bg-red-700 justify-between items-center text-gray-50 text-xl font-extrabold uppercase">
      <ul className="flex justify-between ml-80 gap-4  ">
        <li>Kampaniyalar</li>
        <li>Papadias</li>
        <li>Pizza</li>
        <li>Qelyanalti</li>
        <li>Salat</li>
        <li>Pasta</li>
        <li>Icki</li>
        <li>Desert</li>
        <li>Sous</li>
      </ul>
      <div className="flex">
        <Link>0 bal</Link>
        <FaQuestion className=" bg-emerald-600 rounded-2xl ml-2 p-2 text-3xl " />
      </div>
    </div>
  );
};

export default Navbar;
