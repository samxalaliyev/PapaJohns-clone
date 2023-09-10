import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillBasketFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import Basket from "./Basket";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { AiFillCloseCircle } from "react-icons/ai";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const Header = ({ users }) => {
  //auth
  // const user = auth.currentUser;
  // const isAuthenticated = !!user;

  const [signUp, SetsignUp] = useState(true);
  const [authData, setAuthData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const authFunc = async () => {
    if (signUp) {
      try {
        const data = await createUserWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );
        const user = data.user;
        toast.success("Qeydiyyat uğurla tamamlandı");
        if (user) {
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      //login
      try {
        const data = await signInWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );
        const user = data.user;
        toast.success("Giris ugurlu oldu");
        if (user) {
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const logOut = async () => {
    await signOut(auth);
    toast.success("Hesabdan çıxış edilir...");
    setTimeout(() => {
      window.location = "/";
    }, 2000);
  };

  const { totalQuantity, totalPrice } = useSelector((state) => state.allCart);
  const [open, setOpen] = useState(false);

  const [profile, setProfile] = useState(true);
  const { t, i18n } = useTranslation();
  const handleDil = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1023);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1023);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          <Link>{t("restaurant")}</Link>
          <Link>{t("papa")}</Link>
        </div>
        <div className="flex w-full justify-evenly lg:w-auto text-xl space-x-4 items-center">
          {/* <div className="flex items-center flex-col">
            <img
              className="w-8 lg:w-8 lg:h-8 "
              src="https://www.papajohns.az/img/content/flag_az.png"
              alt=""
            />
            <span className=" text-xs font-bold lg:hidden">Az</span>
          </div> */}
          <select
            className="cursor-pointer"
            onChange={handleDil}
            value={i18n.language}
          >
            <option value="az"> {isSmallScreen ? "Az" : "Azərbaycanca"}</option>
            <option value="en">{isSmallScreen ? "En" : "English"}</option>
            <option value="ru">{isSmallScreen ? "Ru" : "Russian"}</option>
          </select>

          {users ? (
            <div className=" lg:hidden">
              {users.email ? (
                <div className="text-sm flex flex-col">
                  {users.email}

                  <button
                    onClick={logOut}
                    className=" bg-red-700 text-xs ml-1 text-white p-1 rounded"
                  >
                    çıxış
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setProfile(!profile)}
            >
              <BiSolidUser className="lg:hidden text-3xl" />
              <span className="lg:hidden text-sm font-bold">{t("sign")}</span>
            </div>
          )}

          <div
            onClick={() => setProfile(!profile)}
            className="hidden lg:block cursor-pointer"
          >
            {users ? (
              <div>
                {users.email ? (
                  <div className="text-sm flex flex-col">
                    {users.email}

                    <button
                      onClick={logOut}
                      className=" bg-red-700 text-xs ml-1 text-white p-1 rounded"
                    >
                      çıxış
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              t("sign")
            )}
          </div>
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
        </div>
        <Basket open={open} setOpen={setOpen} />
        {/*
        Login 
        and
        Register section 
       */}
        {!users ? (
          <div
            onClick={() => setProfile(!profile)}
            className={`fixed bg-black bg-opacity-40 inset-0 z-50 flex items-center justify-center  ${
              profile ? "hidden" : ""
            }`}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className=" top-0 right-0 relative   lg:h-auto mx-auto my-6"
            >
              <div className="bg-white p-8 h-full w-80 rounded-lg">
                <div className="flex justify-end ">
                  <span
                    onClick={() => setProfile(!profile)}
                    className=" flex items-center justify-center gap-1 cursor-pointer"
                  >
                    {t("close")} <AiFillCloseCircle className=" text-xl" />
                  </span>
                </div>
                <div className="w-full mt-3 flex flex-col justify-center items-center">
                  <h1>{signUp ? "Qeydiyyat" : "Hesaba daxil olun"}</h1>

                  <input
                    type="text"
                    name="email"
                    value={authData.email}
                    onChange={handleChange}
                    className=" mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
                    placeholder="Email"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    value={authData.password}
                    onChange={handleChange}
                    className=" my-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
                    placeholder="Password"
                    required
                  />

                  <button
                    onClick={authFunc}
                    className=" text-white mt-4 w-[80%] bg-red-800 p-2 rounded"
                  >
                    {signUp ? "Qeydiyyat" : "Giriş"}
                  </button>

                  <button
                    onClick={() => SetsignUp(!signUp)}
                    className=" text-white mt-4 w-[80%] bg-green-800 p-1 rounded"
                  >
                    {signUp
                      ? "Hesabiniz varsa giris edin"
                      : "Yeni hesab yaradin"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
