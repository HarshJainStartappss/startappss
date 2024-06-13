import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./profilesData";
import Slider from "react-slick";
import Image from "next/image";

const ServicesProfiles = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#ccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#000",
          fontSize: "12px",
        }}
      >
        {/* {i + 1} */}
      </div>
    ),
    dotsClass: "slick-dots custom-dots",
    arrows: false,

    // autoplay: true,
    // autoplaySpeed: 1500,
    // pauseOnHover: true,
  };
  return (
    <div className="bgSecColor">
      <div className="slider-container">
        <Slider {...settings}>
          {data?.map((curElem, index) => {
            return (
              <div key={curElem.id} className="profileDetailBox">
                <article className="artProfile">
                  <Image
                    src={curElem.image}
                    alt={curElem.name}
                    className="person-img"
                  />

                  <h4>{curElem.name}</h4>
                  <p className="title">{curElem.title}</p>
                  <p className="text">{curElem.quote}</p>
                  <FaQuoteRight className="icon" />
                </article>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ServicesProfiles;
