"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import Link from "next/link";
import {
  type Rating,
  type ImageRoom,
  type LocationRoom,
  type Room,
} from "@prisma/client";

import { Swiper, SwiperSlide } from "swiper/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ButtonWishlist from "@/components/ui/ButtonWishlists";

interface Props {
  room: Room;
  location: LocationRoom | null;
  picture: ImageRoom[];
  rating: Rating[];
}

const RoomCard = ({ room, picture, location, rating }: Props) => {
  const totalRatings = rating.reduce((acc, cur) => acc + cur.value, 0);
  return (
    <Card
      radius="none"
      className="w-full border-none bg-transparent p-0 shadow-none"
    >
      <CardHeader className=" p-0">
        <div className="relative aspect-square w-[calc(100%-1px)] overflow-hidden rounded-lg">
          <ButtonWishlist roomId={room.id} />
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
            {picture.map((img) => {
              return (
                <SwiperSlide
                  key={img.id}
                  className="group relative aspect-square w-[calc(100%-1px)] overflow-hidden rounded-lg"
                >
                  <Link href={`/rooms/${room.slug}`}>
                    <Image
                      alt="Card background"
                      className="aspect-square size-full object-cover"
                      src={img.url}
                      sizes="(min-width: 1480px) 300px, (min-width: 1040px) 17.14vw, (min-width: 780px) calc(33.33vw - 37px), calc(100vw - 66px)"
                      fill
                      loading="eager"
                    />
                  </Link>
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
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="max-w-[calc(100%-10px)] truncate text-[15px] font-semibold">
              <Link href={`/rooms/${room.slug}`}>
                {location?.name},{location?.country}
              </Link>
            </div>
            <div className="text-[15px] text-default-500">{room.category}</div>
            <div>
              <b>${room.price}</b>
              <span className="text-[15px] text-default-500"> Night.</span>
            </div>
          </div>
          {rating.length ? (
            <span className="inline-flex items-center gap-1 text-[15px]">
              <IoMdStar />
              {totalRatings}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[15px]">
              New
              <IoMdStar />
            </span>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default RoomCard;
