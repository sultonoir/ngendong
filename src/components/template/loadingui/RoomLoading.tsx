import React from "react";
import { Skeleton } from "@nextui-org/skeleton";

const RoomLoading = () => {
  const loader = Array.from({ length: 15 }, (value, index) => index);
  return (
    <div className="grid grid-cols-1 gap-4 py-10 lg:grid-cols-6">
      {loader.map((_, index) => (
        <div className="flex h-[300px] flex-col gap-2" key={index}>
          <Skeleton className="h-[144px] w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-3 w-[40%]" />
          <Skeleton className="h-3 w-[10%]" />
        </div>
      ))}
    </div>
  );
};

export default RoomLoading;
