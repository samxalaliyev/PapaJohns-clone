import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-red-800 flex flex-wrap p-8  lg:flex-nowrap lg:justify-between lg:items-center lg:h-20 lg:px-12 text-white">
      <div className=" flex  text-base font-bold w-full items-center leading-10 text-center ">
        <div className="hidden lg:block whitespace-nowrap mr-8 ">
          © PJA 2023
        </div>

        <ul className=" flex flex-col lg:flex-row  items-center lg:gap-2  w-full  ">
          <li>Haqqımızda</li>
          <li>Sual-Cavab</li>
          <li>Karyera</li>
          <li>Xəmir</li>
          <li> Papa Talk - Şərtlər və Qaydalar</li>
        </ul>
        <ul className="lg:hidden h-full flex flex-col lg:flex-row w-full ">
          <li>Restoranlar</li>
          <li>Kampaniyalar</li>
          <li>PapaBonus</li>
        </ul>
      </div>

      <div className="lg:gap-2 my-6 flex flex-col lg:flex-row justify-end items-center  w-full">
        <div>
          <Link to="tel:*7272">
            <img
              src="https://www.papajohns.az/img/content/footer-images-az-AZ.png"
              alt=""
            />
          </Link>
        </div>

        <div>
          <ul className="flex gap-7 text-2xl ">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <BsTwitter />
            </li>
            <li>
              <AiOutlineInstagram />
            </li>
            <li>
              <FaTripadvisor />
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center mt-3  lg:hidden whitespace-nowrap ">
        <span>© PJA 2023</span>
      </div>
    </div>
  );
};
