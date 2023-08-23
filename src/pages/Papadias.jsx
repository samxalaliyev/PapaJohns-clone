import React from "react";
import papadiasData from "../papadiasData";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const Papadias = () => {
  const dispatsh = useDispatch();

  return (
    <div className="container px-16 mt-5 flex flex-wrap gap-5 ">
      {papadiasData.map((item, i) => (
        <div key={i} className=" w-[330px]">
          <img src={item.img} alt="" />
          <div className="flex justify-between my-2 pr-2">
            <span className="font-bold text-lg ">{item.title}</span>
            <button
              onClick={() => dispatsh(addToCart(item))}
              className=" bg-emerald-600 whitespace-nowrap max-h-10 rounded-md  p-1 px-3 cursor-pointer uppercase text-lg  text-white font-semibold"
            >
              Bunu Sec
            </button>
          </div>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};
export default Papadias;
