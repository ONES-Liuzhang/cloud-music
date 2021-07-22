import React, { useEffect, useState } from "react";
import Swiper, { Pagination, Autoplay } from "swiper";
import { SliderContainer } from "./style";
import "swiper/swiper-bundle.min.css";

Swiper.use([Pagination, Autoplay]);

function Slider(props: SliderProps) {
  const { bannerList } = props;
  const [sliderSwiper, setSliderSwiper] = useState<Swiper | null>(null);

  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper(".slider-container", {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
        },
      });
      setSliderSwiper(newSliderSwiper);
    }
  }, [bannerList.length, sliderSwiper]);

  return (
    <SliderContainer>
      <div className="before"></div>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {bannerList.map((slider) => {
            return (
              <div className="swiper-slide" key={slider.imageUrl}>
                <div className="slide-nav">
                  <img
                    src={slider.imageUrl}
                    alt="推荐"
                    width="100%"
                    height="100%"
                  ></img>
                </div>
              </div>
            );
          })}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </SliderContainer>
  );
}

export default React.memo(Slider);
