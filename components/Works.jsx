"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

export default function Works() {
  const workImage = [
    "/images/image2.jpeg",
    "/images/image1.jpeg",
    "/images/image7.jpeg",
    "/images/image4.jpeg",
    "/images/image5.jpeg",
    "/images/image6.jpeg",
    "/images/image8.jpeg",
  ];
  return (
    <div className="Works">
      <div className="Works-header">
        <h2>Dedicated Teamwork at Flako Ltd</h2>
      </div>
      <div className="Works-coursel">
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {workImage.map((image, i) => {
              return (
                <SwiperSlide key={i}>
                  <Image src={image} alt="" fill />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      </div>
    </div>
  );
}
