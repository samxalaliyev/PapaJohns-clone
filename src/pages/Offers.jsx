import React from "react";
import offers from "../offers";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Offers = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();
  const getItem = (id) => {
    navigate(`/offersdetail/${id}`);
  };
  return (
    <div className=" py-8 px-2 lg:px-16">
      <h1 className=" mb-5  text-4xl font-bold">{t("offer")}</h1>
      <div className="lg:flex lg:flex-wrap">
        {offers.map((item) => (
          <div className=" mb-8 lg:mr-12">
            <img
              src={item.img}
              alt=""
              onClick={() => getItem(item.id)}
              className=" cursor-pointer lg:w-72 "
            />
            <button
              onClick={() => getItem(item.id)}
              className=" font-bold text-md my-5 bg-teal-600 rounded text-white py-1 px-3 uppercase"
            >
              {t("seeMore")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
