"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function Coursel({ data }) {
  return (
    <div id="products" className="coursel">
      <div className="coursel-head">
        <h2>Explore Our Product Collection</h2>
      </div>
      <div className="coursel-slider">
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {data.map((item, index) => (
              <Link href="#">
                <SwiperSlide key={index}>
                  <div className="div">
                    <div className="div-image">
                      <Image src={item.image} alt="" fill />
                    </div>
                    <div className="div-text">
                      <h2>{item.header}</h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Link>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
}
