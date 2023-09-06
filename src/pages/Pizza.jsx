import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import ModalDetal from "./ModalDetal";
import { useState } from "react";

const Pizza = () => {
  const data = useSelector((state) => state.allCart.data);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [items, setItems] = useState([]);

  const getItem = (item) => {
    setItems([item]);
    setOpenModal(true);
  };
  return (
    <div className="container px-16 mt-5 flex flex-wrap gap-5 ">
      {data.map((item, i) => (
        <div key={i} className=" w-[330px]">
          <img
            src={item.img}
            alt=""
            className=" cursor-pointer"
            onClick={() => getItem(item)}
          />
          <div className="flex justify-between my-2 pr-2">
            <span className="font-bold text-lg ">{item.title}</span>
            <button
              // onClick={() => dispatch(addToCart(item))}
              onClick={() => getItem(item)}
              className=" bg-emerald-600 whitespace-nowrap max-h-10 rounded-md  p-1 px-3 cursor-pointer uppercase text-lg  text-white font-semibold"
            >
              Bunu Sec
            </button>
          </div>
          <p>{item.describtion}</p>
          <ModalDetal
            items={items}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </div>
      ))}
    </div>
  );
};

export default Pizza;
