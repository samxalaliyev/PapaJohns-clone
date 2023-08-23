import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillBasketFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import Basket from "./Basket";
import { useSelector } from "react-redux";

const Header = () => {
  const { totalQuantity, totalPrice } = useSelector((state) => state.allCart);
  const [open, setOpen] = useState(false);

  return (
    <div className="h-20 px-3 lg:mb-5 flex lg:px-20 items-center lg:h-16 lg:font-bold">
      <Link to="/">
        <img
          className="w-16 lg:w-64 lg:h-28 lg:left-16 lg:top-12 lg:absolute"
          src="https://www.papajohns.az/img/content/pj_logo_web_new.png"
          alt=""
        />
      </Link>
      <div className="flex justify-between w-full">
        <div className="text-xl lg:flex gap-8 ml-44 hidden items-center ">
          <Link>Restoranlar</Link>
          <Link>PapaBonus</Link>
        </div>
        <div className="flex w-full justify-evenly lg:w-auto text-xl space-x-4 items-center">
          <div className="flex items-center flex-col">
            <img
              className="w-8 lg:w-8 lg:h-8 "
              src="https://www.papajohns.az/img/content/flag_az.png"
              alt=""
            />
            <span className=" text-xs font-bold lg:hidden">Az</span>
          </div>
          <select className="hidden lg:block">
            <option value="Azerbaycan">Azerbaycan</option>
            <option value="Rus">Rus</option>
            <option value="English">English</option>
          </select>
          <div className="flex flex-col items-center">
            <BiSolidUser className="lg:hidden text-3xl" />
            <span className=" text-sm font-bold">Giriş</span>
          </div>
          <Link className="hidden lg:block">Giris/Qeydiyat</Link>
          <div
            onClick={() => setOpen(!open)}
            className="flex relative cursor-pointer"
          >
            <BsFillBasketFill className="text-2xl" />
            <span className="absolute bottom-2 left-4 bg-red-700 rounded-xl px-2 py-1  text-gray-50 text-xs">
              {totalQuantity}
            </span>
            <span className="absolute text-xs top-6">{totalPrice}M</span>
          </div>
        </div>
        <Basket open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Header;
