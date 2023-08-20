import { AiFillCloseCircle } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { FaManatSign } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotal,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice.js";
const Modal = ({ open, setOpen }) => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  dispatch(getCartTotal());

  return (
    <div
      onClick={() => setOpen(false)}
      className={`fixed bg-black bg-opacity-50 inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto ${
        open ? "" : "hidden"
      }`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative w-[620px]  mx-auto my-6"
      >
        <div className="bg-white p-5">
          <div className="flex justify-between w-[500px]">
            <span className="text-4xl">Sebet</span>
            <span
              onClick={() => setOpen(false)}
              className=" flex items-center justify-center gap-1 cursor-pointer"
            >
              Baga <AiFillCloseCircle className=" text-xl" />
            </span>
          </div>
          <p className="text-xs mt-3 ">
            Səbətinizdə məhsulların sayı: {totalQuantity}
          </p>
          <div className=" max-h-[400px] overflow-y-auto">
            {cart.map((data, i) => (
              <div
                key={i}
                className="flex w-full justify-between items-center h-10 mt-10"
              >
                <img className="w-20" src={data.img} alt="" />
                <div className=" w-[200px]">
                  <span className=" text-xl">{data.title}</span>
                </div>
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
                <div className="flex justify-center items-center text-2xl">
                  <span className="flex justify-center items-center text">
                    {data.price * data.quantity} <FaManatSign />
                  </span>
                  <GrFormClose
                    onClick={() => dispatch(removeItem(data.id))}
                    className=" text-4xl cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-14 items-center">
            <p className=" bg-red-700 text-white px-12 py-2 rounded uppercase ">
              SİFARİŞİ GÖNDƏR
            </p>
            <div className="text-lg">
              Ümumi məbləğ: <span>{totalPrice}</span> M
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
