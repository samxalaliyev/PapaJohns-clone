import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-red-800 flex flex-wrap p-8  lg:flex-nowrap lg:justify-between lg:items-center lg:h-20 lg:px-12 text-white">
      <div className=" flex  text-base font-bold w-full items-center leading-10 text-center ">
        <div className="hidden lg:block whitespace-nowrap mr-8 ">
          © PJA 2023
        </div>

        <ul className=" flex flex-col lg:flex-row  items-center lg:gap-2  w-full  ">
          <li>{t("about")}</li>
          <li>{t("faq")}</li>
          <li>{t("career")}</li>
          <li>{t("dough")}</li>
          <li> {t("papaTalk")}</li>
        </ul>
        <ul className="lg:hidden h-full flex flex-col lg:flex-row w-full ">
          <li>{t("restaurant")}</li>
          <li>{t("offer")}</li>
          <li>PapaBonus</li>
        </ul>
      </div>

      <div className="lg:gap-2 my-6 flex flex-col lg:flex-row justify-end items-center  w-full">
        <div>
          <Link to="tel:*7272">
            <img
              src="https://www.papajohns.az/img/content/footer-images-az-AZ.png"
              alt=""
            />
          </Link>
        </div>

        <div>
          <ul className="flex gap-7 text-2xl ">
            <li>
              <Link to="https://www.facebook.com/papajohns.az/">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/azpapajohns">
                <BsTwitter />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/azpapajohns/">
                <AiOutlineInstagram />
              </Link>
            </li>
            <li>
              <Link to="https://www.tripadvisor.com/Restaurant_Review-g293934-d3415853-Reviews-Papa_John_s_Pizza_Azerbaijan-Baku_Absheron_Region.html">
                <FaTripadvisor />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center mt-3  lg:hidden whitespace-nowrap ">
        <span>© PJA 2023</span>
      </div>
    </div>
  );
};

export default Footer;
