///////////////////////!SECTION
// Import Swiper React components
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../swiperStyles.css";

function SwiperComp({ nameList, listName }) {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const goToNextSlide = () => {
    if (!isEnd) swiperRef.current.swiper.slideNext();
  };

  const goToPrevSlide = () => {
    if (!isBeginning) swiperRef.current.swiper.slidePrev();
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    const updateButtonStates = () => {
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);
    };

    if (swiperInstance) {
      updateButtonStates(); // Initial state check
      swiperInstance.on("slideChange", updateButtonStates); // Update on slide change
    }

    return () => {
      if (swiperInstance) swiperInstance.off("slideChange", updateButtonStates);
    };
  }, []);

  // Define the number of slides per view for each listName based on screen size
  const breakpointsMap = {
    DataCategory: { 320: 1, 420: 2, 640: 3, 768: 4, 950: 5, 1200: 6 },
    DataSales: { 320: 1, 420: 1, 600: 1, 860: 2, 950: 3, 1200: 4 },
    Products: { 320: 1, 420: 1, 640: 2, 768: 3, 1024: 3, 1200: 3 }, // Products have its own values
  };

  // Format the breakpoints to match Swiper's expected structure
  const formattedBreakpoints = Object.entries(
    breakpointsMap[listName] || breakpointsMap.default,
  ).reduce(
    (acc, [size, slides]) => ({
      ...acc,
      [size]: { slidesPerView: slides },
    }),
    {},
  );

  return (
    <div className="swiper-container relative mt-10">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        breakpoints={formattedBreakpoints}
        className="mySwiper"
      >
        {nameList.map((Component, index) => (
          <SwiperSlide key={index}>{Component}</SwiperSlide>
        ))}
      </Swiper>

      {/* Next Button*/}
      <button
        onClick={goToNextSlide}
        className={`group absolute right-0 top-[-85px] z-10 flex h-12 w-12 items-center justify-center rounded-full bg-color-second-2 hover:bg-color-star-gray ${
          isEnd ? "cursor-not-allowed opacity-50" : ""
        }`}
        disabled={isEnd}
      >
        <IoArrowForwardOutline
          className={`h-6 w-6 transition-all duration-300 ${
            !isEnd && "group-hover:h-7 group-hover:w-7"
          }`}
        />
      </button>

      {/* Prev Button*/}
      <button
        onClick={goToPrevSlide}
        className={`group absolute right-14 top-[-85px] z-10 flex h-12 w-12 items-center justify-center rounded-full bg-color-second-2 hover:bg-color-star-gray ${
          isBeginning ? "cursor-not-allowed opacity-50" : ""
        }`}
        disabled={isBeginning}
      >
        <IoArrowBackOutline
          className={`h-6 w-6 transition-all duration-300 ${
            !isBeginning && "group-hover:h-7 group-hover:w-7"
          }`}
        />
      </button>
    </div>
  );
}

export default SwiperComp;
