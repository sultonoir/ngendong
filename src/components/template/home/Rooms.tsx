"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import { api } from "@/trpc/react";
import Link from "next/link";

const Rooms = () => {
  const { data } = api.lodging.getMyLodging.useQuery();
  return (
    <Card className="w-full max-w-[360px] border-none bg-transparent py-4 shadow-none lg:min-w-[340px]">
      <CardHeader className="px-4 py-0">
        <div className="relative aspect-square w-[calc(100%-1px)]">
          <Image
            alt="Card background"
            className="aspect-square size-full rounded-lg object-cover"
            src={data?.imageRoom.at(0)?.url ?? "/placeholder.jpg"}
            sizes="(min-width: 1480px) 300px, (min-width: 1040px) 17.14vw, (min-width: 780px) calc(33.33vw - 37px), calc(100vw - 66px)"
            fill
            loading="eager"
          />
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <div className="flex items-start justify-between">
          <div className="max-w-[calc(100%-80px)] flex-1">
            <div className="text-[15px] font-semibold">
              <Link href={`/rooms/${data?.slug}`}>
                {data?.locationValue?.name},{data?.locationValue?.country}
              </Link>
            </div>
            <div>
              <b>${data?.price}</b>
              <span className="text-[15px]"> Night.</span>
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

export default Rooms;
