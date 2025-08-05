import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin, FaStore, FaShoppingCart, FaUsers, FaDollarSign, FaCoins } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import customerIcon from "../assets/customer-icon.svg";
import deliveryIcon from "../assets/delivery-icon.svg";
import guaranteeIcon from "../assets/guarantee-icon.svg";
import tomImg from "../assets/AboutPhoto/tom.png";
import willImg from "../assets/AboutPhoto/will.png";

const stats = [
  { label: "Sallers active our site", value: "10.5k", icon: <FaStore className="text-white text-lg" /> },
  { label: "Monthnly Product Sale", value: "33k", highlight: true, icon: <FaDollarSign className="text-white text-lg" /> },
  { label: "Customer active in our site", value: "45.5k", icon: <FaUsers className="text-white text-lg" /> },
  { label: "Anual gross sale in our site", value: "25k", icon: <FaCoins className="text-white text-lg" /> },
];

const team = [
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    img: tomImg,
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    img: willImg,
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    img: willImg,
  },
];

const features = [
  {
    title: "FREE AND FAST DELIVERY",
    subtitle: "Free delivery for all orders over $140",
    icon: <img src={deliveryIcon} alt="Delivery" className="w-10 h-10" />,
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    subtitle: "Friendly 24/7 customer support",
    icon: <img src={customerIcon} alt="Customer Service" className="w-10 h-10" />,
  },
  {
    title: "MONEY BACK GUARANTEE",
    subtitle: "We return money within 30 days",
    icon: <img src={guaranteeIcon} alt="Guarantee" className="w-10 h-10" />,
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <div className="mb-16 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-700">Home</Link> 
          <span className="mx-2">/</span> 
          <span className="text-gray-900">About</span>
        </div>

        {/* Main Content */}
        <div className="flex flex-row items-start gap-16 mb-24">
          {/* Left Side - Text Content */}
          <div className="flex-1 max-w-2xl">
            <div className="space-y-8" style={{ marginTop: '80px' }}>
              {/* Header */}
              <div className="space-y-4">
                <h1 className="font-medium text-gray-900" style={{ fontSize: '70px', lineHeight: '1.1' }}>Our Story</h1>
              </div>

              {/* Story Content */}
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
                </p>
                <p className="text-lg">
                  Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer.
                </p>
                </div>

              
              
            </div>
          </div>

          {/* Right Side - Pink Box */}
          <div className="flex-1 max-w-lg">
            <div className="relative" style={{ marginTop: '0px' }}>
              {/* Main Pink Box */}
              <div 
                className="w-full h-[520px] bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 rounded-2xl shadow-lg relative overflow-hidden"
                style={{
                  display: 'block',
                  minHeight: '520px',
                  background: 'linear-gradient(135deg, #f472b6, #ec4899, #db2777)',
                  borderRadius: '16px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Empty pink box - clean design */}
              </div>
              
              {/* Shadow Effect */}
              <div className="absolute -bottom-4 -right-4 w-full h-96 bg-pink-100 rounded-2xl -z-10 opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-4 gap-8">
              {stats.map((item, idx) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="relative mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4 group-hover:from-red-50 group-hover:to-red-100 transition-all duration-300">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-black mb-2">{item.value}</h3>
                  <p className="text-gray-600 text-sm font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-row justify-between items-center gap-4">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center rounded-lg border p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex-1 group hover:transform hover:scale-105"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="mb-4 h-44 w-36 rounded-lg object-cover bg-gray-100 group-hover:scale-105 transition-transform duration-300"
                  />
                  <h4 className="text-lg font-bold text-black mb-1">{member.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{member.role}</p>
                  <div className="flex gap-3 text-gray-400 text-lg">
                    <FaTwitter className="hover:text-blue-500 cursor-pointer transition-colors duration-200" />
                    <FaInstagram className="hover:text-pink-500 cursor-pointer transition-colors duration-200" />
                    <FaLinkedin className="hover:text-blue-600 cursor-pointer transition-colors duration-200" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-row justify-between items-center gap-4">
              {features.map((f) => (
                <div key={f.title} className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex-1 group hover:transform hover:scale-105">
                  <div className="mb-4 rounded-full bg-gradient-to-br from-red-500 to-red-600 p-4 text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    {f.icon}
                  </div>
                  <h5 className="mb-3 font-bold uppercase text-sm text-black">{f.title}</h5>
                  <p className="text-sm text-gray-600">{f.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;