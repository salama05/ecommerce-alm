import React, { useState, useEffect } from "react";
import Photo3 from "@/assets/AdBanner/Photo_3.jpg";
import PhoneHero from "@/assets/AdBanner/Phone.jpg";
import Banner from "@/assets/AdBanner/Banner.jpg";

// Import category images
import PhonesImg from "@/assets/CategoryPhone/Phones.png";
import ComputersImg from "@/assets/CategoryPhone/Computers.png";
import SmartWatchImg from "@/assets/CategoryPhone/SmartWatch.png";
import CameraImg from "@/assets/CategoryPhone/Camera.png";
import HeadPhonesImg from "@/assets/CategoryPhone/HeadPhones.png";
import GamingImg from "@/assets/CategoryPhone/Gaming.png";

// Import New Arrival images
import Gucci1 from "@/assets/ProductPhoto/gucci1.png";
import PlayStation from "@/assets/ProductPhoto/playstation.png";
import SpeakerAmazon from "@/assets/ProductPhoto/speaker-amazon.png";

// Import service icons
import CustomerIcon from "@/assets/customer-icon.svg";
import DeliveryIcon from "@/assets/delivery-icon.svg";
import GuaranteeIcon from "@/assets/guarantee-icon.svg";
import FlashSaleTimer from "@/components/FlashSaleTimer";
import AdBanner from "@/components/AdBanner";
import SwiperComp from "@/components/SwiperComp";
import ProductSection from "@/components/ProductSection";
import Button from "@/components/Button";
import { dataList } from "@/data/Data";
import CategorySidebar from "@/components/CategorySidebar";

// Placeholders for demo sections
const Placeholder = ({ title, height = 200 }) => (
  <div className="flex items-center justify-center bg-gray-100 rounded-lg mb-8" style={{ height }}>
    <span className="text-gray-400 text-2xl">{title} (صورة/نص هنا)</span>
  </div>
);

const SectionTitle = ({ children }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="inline-block w-2 h-8 bg-color-button-2 rounded-sm"></span>
    <h2 className="font-inter text-3xl ov-800:text-4xl font-semibold text-gray-900">{children}</h2>
  </div>
);

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Promotional Banner Countdown Timer
  const [promoTimeLeft, setPromoTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35
  });
  
  // Hero slides data
  const heroSlides = [
    {
      title: "iPhone 14 Series",
      heading: "Up to 10%\noff Voucher",
      image: PhoneHero,
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    },
    {
      title: "iPhone 14 Series",
      heading: "Up to 10%\noff Voucher",
      image: PhoneHero,
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    },
    {
      title: "iPhone 14 Series",
      heading: "Up to 10%\noff Voucher",
      image: PhoneHero,
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  
  // Promotional Banner Timer Effect
  useEffect(() => {
    const promoInterval = setInterval(() => {
      setPromoTimeLeft(prev => {
        const totalSeconds = prev.days * 86400 + prev.hours * 3600 + prev.minutes * 60 + prev.seconds;
        if (totalSeconds <= 0) {
          clearInterval(promoInterval);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        const nextTotalSeconds = totalSeconds - 1;
        return {
          days: Math.floor(nextTotalSeconds / 86400),
          hours: Math.floor((nextTotalSeconds % 86400) / 3600),
          minutes: Math.floor((nextTotalSeconds % 3600) / 60),
          seconds: nextTotalSeconds % 60
        };
      });
    }, 1000);

    return () => clearInterval(promoInterval);
  }, []);

  return (
    <div className="flex flex-col gap-12 mt-8">
      {/* Hero Section with Sidebar and Slider */}
      <div className="container mx-auto px-4">
        <div className="flex gap-6 sm-1000:flex-col">
          <div className="sm-1000:order-2">
            <CategorySidebar />
          </div>
          <div className="flex-1 relative sm-1000:order-1">
            <div className="relative bg-black text-white rounded-lg overflow-hidden">
              {/* Slider Container */}
              <div className="relative h-72 ov-1000:h-96">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                      index === currentSlide ? 'translate-x-0' : 
                      index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                    }`}
                  >
                    <div className="flex h-full">
                      {/* Left side - Text content */}
                      <div className="flex-1 flex items-center p-12">
                        <div className="animate-fadeIn">
                          <div className="flex items-center gap-4 mb-6">
                            <img src={slide.logo} alt="Apple" className="w-8 h-8 filter invert" />
                            <span className="text-lg">{slide.title}</span>
                          </div>
                          <h1 className="text-5xl font-bold mb-6 leading-tight whitespace-pre-line">
                            {slide.heading}
                          </h1>
                          <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300 transition-colors">
                            <span className="text-lg border-b border-white pb-1">Shop Now</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right side - Phone image */}
                      <div className="flex-1 relative">
                        <img 
                          src={slide.image} 
                          alt={slide.title} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Slider Arrows */}
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length)}
                className="absolute z-20 top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-black flex items-center justify-center shadow transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => setCurrentSlide(prev => (prev + 1) % heroSlides.length)}
                className="absolute z-20 top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-black flex items-center justify-center shadow transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
              </button>
              
              {/* Slider Indicators - Bottom Center */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                      index === currentSlide 
                        ? 'bg-color-button-2 border-black scale-110' 
                        : 'bg-transparent border-white hover:bg-white hover:bg-opacity-30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Flash Sales Section */}
      <section className="container mx-auto px-4">
        <div className="flex items-center gap-8 mb-4">
          <SectionTitle>Flash Sales</SectionTitle>
          <FlashSaleTimer />
        </div>
        {/* منتجات الفلاش سيل */}
        <ProductSection items={dataList} header="" title="Flash sales" />
        <div className="flex justify-center mt-4">
        <Button textBTN="View All Products" intent="secondary" />
        </div>
      </section>

      {/* Browse By Category */}
      <section className="container mx-auto px-4">
        <SectionTitle>Browse By Category</SectionTitle>
        <div className="grid grid-cols-6 gap-4">
          {[
            { name: "Phones", image: PhonesImg },
            { name: "Computers", image: ComputersImg },
            { name: "SmartWatch", image: SmartWatchImg },
            { name: "Camera", image: CameraImg },
            { name: "HeadPhones", image: HeadPhonesImg },
            { name: "Gaming", image: GamingImg }
          ].map((category, index) => (
            <div 
              key={index} 
              className="group border border-gray-200 rounded-lg p-6 text-center bg-white hover:bg-color-button-2 hover:text-white hover:border-color-button-2 transition-colors duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-center mb-4 h-16">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  loading="lazy"
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
              <div className="font-medium text-sm">{category.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <SectionTitle>Best Selling Products</SectionTitle>
          <Button textBTN="View All" intent="secondary" />
        </div>
        <ProductSection items={dataList} header="" title="Best Selling Products" />
      </section>

      {/* بانر ترويجي كبير */}
      <section className="container mx-auto px-4">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img 
            src={Banner} 
            alt="Promotional Banner" 
            loading="lazy"
            className="w-full h-auto object-cover"
            style={{
              imageRendering: 'crisp-edges',
              filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
              maxWidth: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </section>

      {/* Explore Our Products */}
      <section className="container mx-auto px-4">
        <SectionTitle>Explore Our Products</SectionTitle>
        <ProductSection items={dataList} header="" title="Explore Our Products" />
        <div className="flex justify-center mt-4">
          <Button textBTN="View All Products" intent="secondary" />
        </div>
      </section>

      {/* New Arrival */}
      <section className="container mx-auto px-4">
        <SectionTitle>New Arrival</SectionTitle>
        <div className="flex gap-8 h-96">
          {/* PlayStation 5 - Left Side */}
          <div className="flex-1 bg-black text-white rounded-lg p-8 relative overflow-hidden">
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h3 className="text-3xl font-bold mb-4">PlayStation 5</h3>
              <p className="text-gray-300 mb-6 text-lg">Black and White version of the PS5 coming out on sale.</p>
              <button className="text-white border-b-2 border-white pb-2 w-fit hover:border-gray-300 transition-colors text-lg">
                Shop Now
              </button>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2">
              <img src={PlayStation} alt="PlayStation 5" loading="lazy" className="w-full h-full object-contain opacity-90" />
            </div>
          </div>

          {/* Right Side - Three cards */}
          <div className="flex-1 space-y-4">
            {/* Women's Collections - Top */}
            <div className="bg-black text-white rounded-lg p-6 relative overflow-hidden h-44">
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2">Women's Collections</h3>
                <p className="text-gray-300 text-sm mb-2">Featured woman collections that give you another vibe.</p>
                <button className="text-white border-b border-white pb-1 w-fit text-sm hover:border-gray-300 transition-colors">
                  Shop Now
                </button>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/3">
              </div>
            </div>

            {/* Bottom Row - Two cards side by side */}
            <div className="grid grid-cols-2 gap-4 h-44">
              <div className="bg-black text-white rounded-lg p-4 relative overflow-hidden">
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <h3 className="font-bold mb-1">Speakers</h3>
                  <p className="text-gray-300 text-xs mb-2">Amazon wireless speakers</p>
                  <button className="text-white border-b border-white pb-1 w-fit text-xs hover:border-gray-300 transition-colors">
                    Shop Now
                  </button>
                </div>
                <div className="absolute right-0 top-0 h-full w-2/3">
                  <img src={SpeakerAmazon} alt="Speakers" loading="lazy" className="w-full h-full object-contain opacity-80" />
                </div>
              </div>

              <div className="bg-black text-white rounded-lg p-4 relative overflow-hidden">
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <h3 className="font-bold mb-1">Perfume</h3>
                  <p className="text-gray-300 text-xs mb-2">GUCCI INTENSE OUD EDP</p>
                  <button className="text-white border-b border-white pb-1 w-fit text-xs hover:border-gray-300 transition-colors">
                    Shop Now
                  </button>
                </div>
                <div className="absolute right-0 top-0 h-full w-2/3">
                  <img src={Gucci1} alt="Perfume" loading="lazy" className="w-full h-full object-contain opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* مميزات الخدمة */}
      <section className="container mx-auto px-4 mb-8">
        <div className="grid grid-cols-3 gap-8 text-center">
          {/* Free and Fast Delivery */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-6 relative">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                <img src={DeliveryIcon} alt="Delivery" className="w-8 h-8 filter invert" />
              </div>
            </div>
            <h3 className="font-bold text-xl mb-2">FREE AND FAST DELIVERY</h3>
            <p className="text-gray-600">Free delivery for all orders over $140</p>
          </div>

          {/* 24/7 Customer Service */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-6 relative">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                <img src={CustomerIcon} alt="Customer Service" className="w-8 h-8 filter invert" />
              </div>
            </div>
            <h3 className="font-bold text-xl mb-2">24/7 CUSTOMER SERVICE</h3>
            <p className="text-gray-600">Friendly 24/7 customer support</p>
          </div>

          {/* Money Back Guarantee */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-6 relative">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                <img src={GuaranteeIcon} alt="Money Back Guarantee" className="w-8 h-8 filter invert" />
              </div>
            </div>
            <h3 className="font-bold text-xl mb-2">MONEY BACK GUARANTEE</h3>
            <p className="text-gray-600">We return money within 30 days</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
