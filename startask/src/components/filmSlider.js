import { Swiper } from "swiper/react";
import "swiper/swiper.scss";
import { useFilmSlider } from "./filmSliderAPI";

const filmSlider = () => {
  const { slides } = useFilmSlider();

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={
        window.innerWidth < 400 ? 1.5 : window.innerWidth < 1080 ? 3 : 5
      }

    >
      {slides}
    </Swiper>
  );
};

export default filmSlider;
