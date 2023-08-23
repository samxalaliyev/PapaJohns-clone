import React from "react";
import HomeSlider from "../components/HomeSlider";
import swiperData from "../swiperData";

const Home = () => {
  return (
    <div className="px-7">
      <HomeSlider swiperData={swiperData} />
    </div>
  );
};

export default Home;
