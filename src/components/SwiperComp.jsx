import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules"; // Import Grid module
import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid"; // Import Grid CSS
import "../swiperStyles.css";

function SwiperComp({ nameList, listName }) {
  const swiperRef = useRef(null);
  const [navState, setNavState] = useState({ isBeginning: true, isEnd: false });

  const handleSlideChange = () => {
    const { swiper } = swiperRef.current;
    setNavState({ isBeginning: swiper.isBeginning, isEnd: swiper.isEnd });
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    if (swiperInstance) {
      handleSlideChange();
      swiperInstance.on("slideChange", handleSlideChange);
      return () => swiperInstance.off("slideChange", handleSlideChange);
    }
  }, []);

  // Define breakpoints
  const breakpointsMap = {
    DataCategory: { 320: 1, 420: 2, 640: 3, 768: 4, 950: 5, 1200: 6 },
    DataSales: { 320: 1, 420: 1, 600: 2, 860: 2, 950: 3, 1200: 4 },
    DataExplore: { 320: 1, 420: 1, 600: 2, 860: 2, 950: 3, 1200: 4 },
  };

  const formattedBreakpoints = Object.fromEntries(
    Object.entries(breakpointsMap[listName] || breakpointsMap.default).map(
      ([size, slides]) => [size, { slidesPerView: slides }]
    )
  );

  return (
    <div className="swiper-container relative mt-20">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={10}
        navigation
        grid={listName === "DataExplore" ? { rows: 2, fill: "row" } : undefined}
        /* Add grid only if listName is DataExplore */
        modules={[Navigation, ...(listName === "DataExplore" ? [Grid] : [])]}
        /* Include Grid module only for DataExplore */

        breakpoints={formattedBreakpoints}
        className="mySwiper"
      >
        {nameList.map((Component, index) => (
          <SwiperSlide key={index}>{Component}</SwiperSlide>
        ))}
      </Swiper>

      {/* Next Button */}
      <NavigationButton
        direction="next"
        disabled={navState.isEnd}
        onClick={() => swiperRef.current.swiper.slideNext()}
      />

      {/* Previous Button */}
      <NavigationButton
        direction="prev"
        disabled={navState.isBeginning}
        onClick={() => swiperRef.current.swiper.slidePrev()}
      />
    </div>
  );
}

// Reusable navigation button component
function NavigationButton({ direction, disabled, onClick }) {
  const isNext = direction === "next";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group absolute ${
        isNext ? "right-0" : "right-14"
      } top-[-85px] z-10 flex h-12 w-12 items-center justify-center rounded-full bg-color-second-2 ${
        disabled ? "cursor-not-allowed opacity-50" : "hover:bg-color-star-gray"
      }`}
    >
      {isNext ? (
        <IoArrowForwardOutline
          className={`h-6 w-6 transition-all duration-300 ${
            !disabled && "group-hover:h-7 group-hover:w-7"
          }`}
        />
      ) : (
        <IoArrowBackOutline
          className={`h-6 w-6 transition-all duration-300 ${
            !disabled && "group-hover:h-7 group-hover:w-7"
          }`}
        />
      )}
    </button>
  );
}

export default SwiperComp;
