import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Pizza = () => {
  const data = useSelector((state) => state.allCart.data);
  const dispatsh = useDispatch();
  return (
    <div className="container px-16 mt-5 flex flex-wrap gap-5 ">
      {data.map((item, i) => (
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
          <p>{item.describtion}</p>
        </div>
      ))}
    </div>
  );
};

export default Pizza;