import Room from "@/components/template/room/Room";
import { api } from "@/trpc/server";
import React from "react";

const page = async () => {
  const rooms = await api.post.getAllRooms.query();
  return (
    <div className="container pt-10 lg:h-[95dvh]">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
        {rooms.map((item) => (
          <Room key={item.id} room={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
