import React from "react";
import { useParams } from "react-router-dom";
import swiperData from "../swiperData";

const Details = () => {
  const { id } = useParams();

  const item = swiperData.find((e) => e.id === parseInt(id));

  return (
    <div className=" before:block before:content-['\0020'] after:block after:content-['\0020'] after:clear-both py-12 px-2 sm:px-12">
      <div className="  w-full mb-14 lg:w-2/5 float-left">
        <img src={item.img2} alt={item.description} />
      </div>
      <div className=" lg:ml-[40%] lg:pl-12">
        <h1 className=" text-3xl mb-12 font-bold">{item.title}</h1>

        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Details;
