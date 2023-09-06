import React, { useState } from "react";
import papadiasData from "../papadiasData";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import ModalDetal from "./ModalDetal";

const Papadias = () => {
  const [openModal, setOpenModal] = useState(false);
  const [items, setItems] = useState([]);

  const getItem = (item) => {
    setItems([item]);
    setOpenModal(true);
  };
  const dispatch = useDispatch();

  return (
    <div className="lg:px-0 px-2 flex justify-center items-center">
      <div className=" container lg:px-0 lg:mt-5 lg:flex lg:flex-wrap lg:justify-center lg:gap-x-5 my-5 flex-col items-center lg:items-start  lg:flex-row  flex  gap-5  ">
        {papadiasData.map((item) => (
          <div key={item.id} className=" w-full flex flex-col lg:w-[330px]">
            <img
              src={item.img}
              alt=""
              className=" w-full cursor-pointer"
              onClick={() => getItem(item)}
            />
            <div className="flex justify-between my-2 pr-2">
              <span className="font-bold text-lg ">{item.title}</span>
              <button
                // onClick={() => dispatsh(addToCart(item))}
                onClick={() => getItem(item)}
                className=" bg-emerald-600 whitespace-nowrap max-h-10 rounded-md  p-1 px-3 cursor-pointer uppercase text-lg  text-white font-semibold"
              >
                Bunu Sec
              </button>
            </div>
            <p>{item.desc}</p>
            <ModalDetal
              items={items}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Papadias;
