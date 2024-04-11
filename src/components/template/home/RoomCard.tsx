"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import Link from "next/link";
import { type ImageRoom, type LocationRoom, type Room } from "@prisma/client";
import WishlistsButton from "./WishlistsButton";

interface Props {
  room: Room;
  location: LocationRoom | null;
  picture: ImageRoom[];
}

const RoomCard = ({ room, picture, location }: Props) => {
  return (
    <Card
      radius="none"
      className="w-full border-none bg-transparent p-0 shadow-none"
    >
      <CardHeader className=" p-0">
        <div className="relative aspect-square w-[calc(100%-1px)] overflow-hidden rounded-lg">
          <WishlistsButton roomId={room.id} />
          <Image
            alt="Card background"
            className="aspect-square size-full object-cover"
            src={picture.at(0)?.url ?? "/placeholder.jpg"}
            sizes="(min-width: 1480px) 300px, (min-width: 1040px) 17.14vw, (min-width: 780px) calc(33.33vw - 37px), calc(100vw - 66px)"
            fill
            loading="eager"
          />
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
          <span className="inline-flex items-center gap-1 text-[15px]">
            New
            <IoMdStar />
          </span>
        </div>
      </CardBody>
    </Card>
  );
};

export default RoomCard;
