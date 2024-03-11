import RoomCard from "@/components/template/room/RoomCard";
import { api } from "@/trpc/server";
import React from "react";

export const dynamic = "force-dynamic";
const page = async () => {
  const rooms = await api.post.getAllRooms.query();
  return (
    <div className="container pt-10">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-6">
        {rooms.map((item) => (
          <RoomCard key={item.id} room={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
