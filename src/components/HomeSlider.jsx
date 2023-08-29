import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import swiperData from "../swiperData";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeSlider = () => {
  // const useSecondImage = window.innerWidth < 768;
  const [useSecondImage, setUseSecondImage] = useState(
    window.innerWidth < 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setUseSecondImage(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const navigate = useNavigate();

  const getItem = (id) => {
    navigate(`/kampains/${id}`);
  };

  return (
    <div className="py-10">
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {swiperData.map((item) => (
          <SwiperSlide
            key={item.id}
            className=" cursor-pointer"
            onClick={() => getItem(item.id)}
          >
            <img
              src={useSecondImage ? item.img2 : item.img}
              alt={item.title}
              className=" object-cover lg:object-fill sm:h-auto sm:w-auto lg:h-[500px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
