import { AiFillCloseCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { BsFillBasketFill } from "react-icons/bs";
import Basket from "../Header/Basket";
import { addToCart } from "../redux/cartSlice";
import {
  getCartTotal,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice.js";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const ModalDetal = ({ openModal, setOpenModal, items }) => {
  const [open, setOpen] = useState(false);
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const { t } = useTranslation();
  const dispatch = useDispatch();

  dispatch(getCartTotal());

  return (
    <div
      onClick={() => setOpenModal(false)}
      className={`fixed bg-black bg-opacity-10 inset-0 z-50 flex items-center justify-center lg:overflow-x-hidden lg:overflow-y-auto ${
        openModal ? "" : "hidden"
      }`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" top-0 right-0 relative   lg:h-auto mx-auto my-6"
      >
        <div className="bg-white p-5 h-full w-80">
          <div className="flex justify-end ">
            <span
              onClick={() => setOpenModal(false)}
              className=" flex items-center justify-center gap-1 cursor-pointer"
            >
              {t("close")} <AiFillCloseCircle className=" text-xl" />
            </span>
          </div>
          {items.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt="" />
              <p className=" text-xl font-bold">{item.title}</p>
              <p className="flex justify-end">
                <span className="text-3xl font-bold after:content-['\20BC']">
                  {item.price}
                </span>
              </p>
              <div className="text-center flex-wrap-reverse flex justify-between mt-6 items-center">
                <div
                  onClick={() => setOpen(!open)}
                  className="flex relative cursor-pointer"
                >
                  <BsFillBasketFill className="text-2xl" />
                  <span className="absolute bottom-2 left-4 bg-red-700 rounded-xl px-2 py-1  text-gray-50 text-xs">
                    {totalQuantity}
                  </span>
                  <span className="absolute text-sm top-6 after:content-['\20BC']">
                    {totalPrice}
                  </span>
                </div>

                <button
                  onClick={() => dispatch(addToCart(item))}
                  className=" bg-emerald-600 whitespace-nowrap max-h-10 rounded-md  p-1 px-3 cursor-pointer uppercase text-lg  text-white font-semibold"
                >
                  {t("add")}
                </button>
                <Basket open={open} setOpen={setOpen} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalDetal;
