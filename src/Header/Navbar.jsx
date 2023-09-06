import { t } from "i18next";
import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="px-5 lg:px-20 h-20 flex bg-red-700 justify-center lg:justify-between items-center text-gray-50 text-xl font-extrabold uppercase">
      <ul className="flex lg:justify-between text-sm gap-2 lg:text-xl overflow-x-auto lg:overflow-hidden lg:ml-72 lg:gap-4  ">
        <li>{t("offer")}</li>
        <li>
          <Link to="/papadias">{t("papadias")}</Link>
        </li>
        <li>
          <Link to="/pizza">{t("pizza")}</Link>
        </li>
        <li>{t("snacks")}</li>
        <li>{t("salat")}</li>
        <li>{t("pasta")}</li>
        <li>{t("drink")}</li>
        <li>{t("desert")}</li>
        <li>{t("sous")}</li>
      </ul>
      <div className="hidden xl:flex">
        <Link>0 {t("pts")}</Link>
        <FaQuestion className=" bg-emerald-600 rounded-2xl ml-2 p-2 text-3xl " />
      </div>
    </div>
  );
};

export default Navbar;
