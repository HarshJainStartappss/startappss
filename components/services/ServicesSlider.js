import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import firstImg from "../../public/static/assets/img/clients/7-Eleven.png";
import secondImg from "../../public/static/assets/img/clients/Dazn.webp";
import thirdImg from "../../public/static/assets/img/clients/IQVIA.jpg";
import fourthImg from "../../public/static/assets/img/clients/Al-Futtaim.gif";
import fivthImg from "../../public/static/assets/img/clients/cocosto.jpg";
import sixthImg from "../../public/static/assets/img/clients/pixel15.jpg";

const ServicesSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="clientImageBox">
            <Image src={firstImg} alt="client one" className="clientimg" />
          </div>
          <div className="clientImageBox">
            <Image src={secondImg} alt="client two" className="clientimg" />
          </div>
          <div className="clientImageBox">
            <Image src={thirdImg} alt="client three" className="clientimg" />
          </div>
          <div className="clientImageBox">
            <Image src={fourthImg} alt="client fourth" className="clientimg" />
          </div>
          <div className="clientImageBox">
            <Image src={fivthImg} alt="client fiveth" className="clientimg" />
          </div>
          <div className="clientImageBox">
            <Image src={sixthImg} alt="client sixth" className="clientimg" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ServicesSlider;
