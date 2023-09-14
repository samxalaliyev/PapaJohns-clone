import { AiFillCloseCircle } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { FaManatSign } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotal,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  reloadPage,
} from "../redux/cartSlice.js";
import { useTranslation } from "react-i18next";

const Modal = ({ open, setOpen }) => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  const { t } = useTranslation();
  const dispatch = useDispatch();

  dispatch(getCartTotal());

  const clearCarthandle = () => {
    dispatch(reloadPage());
    dispatch(clearCart());
  };

  return (
    <div
      onClick={() => setOpen(false)}
      className={`fixed bg-black bg-opacity-50 inset-0 z-50 flex items-center justify-center lg:overflow-x-hidden lg:overflow-y-auto ${
        open ? "" : "hidden"
      }`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" top-0 right-0 relative lg:w-[620px] w-full h-full lg:h-auto mx-auto my-6"
      >
        <div className="bg-white p-5 h-full">
          <div className="flex justify-between ">
            <span className="text-4xl font-bold">{t("yourBasket")}</span>
            <span
              onClick={() => setOpen(false)}
              className=" flex items-center justify-center gap-1 cursor-pointer"
            >
              {t("close")} <AiFillCloseCircle className=" text-xl" />
            </span>
          </div>
          <p className="text-xs mt-3 mb-3 flex ">
            {t("itemsBasket")} {totalQuantity}
          </p>
          <div className=" max-h-[400px] overflow-y-auto px-2">
            {cart.map((data, i) => (
              <div
                key={i}
                className="flex w-full justify-start lg:justify-between flex-wrap sm:flex-nowrap mb-24 items-center h-10 mt-12"
              >
                <div className="flex w-96 items-center mr-10 max-w-[450px]">
                  <img className="w-20 mr-4" src={data.img} alt="" />
                  <div className=" w-auto">
                    <span className=" text-base font-bold lg:text-xl">
                      {data.title}
                    </span>
                  </div>
                </div>

                <div className=" flex w-80 items-center justify-between my-6">
                  <div className="flex">
                    <button
                      onClick={() => dispatch(decreaseQuantity(data.id))}
                      className={` bg-emerald-600 text-white flex items-center justify-center text-4xl h-6 w-5 rounded-l-sm ${
                        data.quantity <= 1 ? "opacity-50 cursor-pointer" : ""
                      }`}
                      disabled={data.quantity <= 1}
                    >
                      <span className="mt-8 my-10 flex">-</span>
                    </button>
                    <span className="w-4 bg-gray-400 px-4 flex justify-center items-center">
                      {data.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(increaseQuantity(data.id))}
                      className=" bg-emerald-600 text-white flex items-center justify-center text-4xl h-6 w-5 rounded-r-sm"
                    >
                      <span className="mt-8 my-10 flex">+</span>
                    </button>
                  </div>
                  <div className=" ml-5 flex justify-center items-center text-2xl">
                    <span className="flex justify-center items-center text">
                      {data.price * data.quantity} <FaManatSign />
                    </span>
                    <GrFormClose
                      onClick={() => dispatch(removeItem(data.id))}
                      className=" text-4xl cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center flex-wrap-reverse flex justify-between mt-6 items-center">
            <p
              onClick={clearCarthandle}
              className=" cursor-pointer m-auto lg:m-0 bg-red-700 text-white px-12 py-2 rounded uppercase "
            >
              {cart.length > 0 ? t("checkout") : "Menyuya baxın"}
            </p>
            <div className="text-lg w-full lg:w-auto font-bold after:content-['\20BC']">
              {t("totalAmount")} <span>{totalPrice} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
