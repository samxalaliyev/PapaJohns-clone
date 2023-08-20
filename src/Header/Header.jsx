import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillBasketFill } from "react-icons/bs";
import Basket from "./Basket";
import { useSelector } from "react-redux";

const Header = () => {
  const { totalQuantity, totalPrice } = useSelector((state) => state.allCart);
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto pl-60 pr-24 mb-5 flex justify-between items-center h-16 font-bold">
      <img
        className="h-28 left-16 top-12 absolute"
        src="https://www.papajohns.az/img/content/pj_logo_web_new.png"
        alt=""
      />
      <div className="text-xl flex space-x-4 items-center ">
        <Link>Restoranlar</Link>
        <Link>PapaBonus</Link>
      </div>
      <div className="flex text-xl space-x-4 items-center">
        <img
          className="h-8 "
          src="https://www.papajohns.az/img/content/flag_az.png"
          alt=""
        />
        <select name="" id="">
          <option value="Azerbaycan">Azerbaycan</option>
          <option value="Rus">Rus</option>
          <option value="English">English</option>
        </select>
        <Link>Giris/Qeydiyat</Link>
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
  );
};

export default Header;
