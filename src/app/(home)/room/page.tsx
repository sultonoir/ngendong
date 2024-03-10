"use client";
import RoomCard from "@/components/template/room/RoomCard";
import { api } from "@/trpc/react";
import React from "react";

const Page = () => {
  const { data: rooms } = api.post.getAllRooms.useQuery();
  return (
    <div className="container pt-10 lg:h-[95dvh]">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
        {rooms?.map((item) => <RoomCard key={item.id} room={item} />)}
      </div>
    </div>
  );
};

export default Page;
