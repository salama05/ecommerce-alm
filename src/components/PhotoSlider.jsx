import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../swiperStyles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// استيراد صور AdBanner
import Photo3 from "../assets/AdBanner/Photo_3.jpg";

const sliderImages = [
  { src: Photo3, alt: "Ad Banner 3" },
];

function PhotoSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 4000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {sliderImages.map((img, idx) => (
          <SwiperSlide key={idx} className="flex items-center justify-center h-[344px] bg-black">
            <img src={img.src} alt={img.alt} className="max-w-[892px] max-h-[344px] object-contain rounded-lg" />
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}

export default PhotoSlider;
