"use client";

import React from "react";
import { cn } from "@nextui-org/react";
import { type ImageRoom } from "@prisma/client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Props {
  picture: ImageRoom[] | undefined;
}

const RoomImage = ({ picture }: Props) => {
  return (
    <>
      <section className="relative hidden h-[500px] w-full grid-cols-4 grid-rows-2 gap-4 overflow-hidden rounded-lg md:grid">
        {picture?.map((item, index) => (
          <div
            className={cn("relative col-span-1", {
              "col-span-2 row-span-2": index === 0,
            })}
            key={item.id}
          >
            <Image
              alt="Card background"
              className="aspect-square size-full object-cover"
              src={item.url}
              sizes="(min-width: 1360px) 600px, 44.64vw"
              fill
              loading="eager"
            />
          </div>
        ))}
      </section>
      <section className="flex h-[250px] sm:h-[350px] md:hidden">
        <Swiper
          spaceBetween={30}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper group"
        >
          {picture?.map((img) => {
            return (
              <SwiperSlide
                key={img.id}
                className="group relative aspect-square w-[calc(100%-1px)] overflow-hidden rounded-lg"
              >
                <Image
                  alt="Card background"
                  className="aspect-square size-full object-cover"
                  src={img.url}
                  sizes="(min-width: 1480px) 300px, (min-width: 1040px) 17.14vw, (min-width: 780px) calc(33.33vw - 37px), calc(100vw - 66px)"
                  fill
                  loading="eager"
                />
              </SwiperSlide>
            );
          })}
          <div className="swiper-button-prev absolute left-2 top-1/2 z-40 size-8 -translate-y-1/2 cursor-pointer rounded-full bg-white/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <BiChevronLeft size={30} className="text-black" />
          </div>
          <div className="swiper-button-next absolute right-2 top-1/2 z-40 size-8 -translate-y-1/2 cursor-pointer rounded-full bg-white/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <BiChevronRight size={30} className="text-black" />
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default RoomImage;
