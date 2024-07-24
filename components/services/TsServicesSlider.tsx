import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import firstImg from "../../public/static/assets/img/clients/7-Eleven.png";
import secondImg from "../../public/static/assets/img/clients/Dazn.webp";
import thirdImg from "../../public/static/assets/img/clients/IQVIA.jpg";
import fourthImg from "../../public/static/assets/img/clients/Al-Futtaim.gif";
import fivthImg from "../../public/static/assets/img/clients/cocosto.jpg";
import sixthImg from "../../public/static/assets/img/clients/pixel15.jpg";
import { motion } from "framer-motion";

export const TsServicesSider: React.FC = () => {
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, // This is an example breakpoint for tablets
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <motion.div
            className="clientImageBox"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.8 }}
          >
            <Image src={firstImg} alt="client one" className="clientimg" />
          </motion.div>
          <motion.div
            className="clientImageBox"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.8 }}
          >
            <Image src={secondImg} alt="client two" className="clientimg" />
          </motion.div>
          <motion.div
            className="clientImageBox"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.8 }}
          >
            <Image src={thirdImg} alt="client three" className="clientimg" />
          </motion.div>
          <motion.div
            className="clientImageBox"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.8 }}
          >
            <Image src={fourthImg} alt="client fourth" className="clientimg" />
          </motion.div>
          <motion.div
            className="clientImageBox"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.8 }}
          >
            <Image src={fivthImg} alt="client fiveth" className="clientimg" />
          </motion.div>
          <motion.div
            className="clientImageBox"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.8 }}
          >
            <Image src={sixthImg} alt="client sixth" className="clientimg" />
          </motion.div>
        </Slider>
      </div>
    </>
  );
};
