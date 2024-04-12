import { cn } from "@nextui-org/react";
import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

const Loading = () => {
  const loader = Array.from({ length: 5 }, (value, index) => index);
  return (
    <div className="container max-w-screen-xl">
      <div className="flex w-full flex-col gap-10">
        <Skeleton className="lg:h-10 lg:w-1/4" />
        <div className="relative hidden h-[500px] w-full grid-cols-4 grid-rows-2 gap-4 overflow-hidden rounded-lg md:grid">
          {loader.map((item) => (
            <Skeleton
              className={cn("relative col-span-1", {
                "col-span-2 row-span-2": item === 0,
              })}
              key={item}
            />
          ))}
        </div>
        <Skeleton className="lg:h-10 lg:w-1/4" />
        <div className="my-auto flex flex-row items-center gap-10">
          <Skeleton className="size-20 flex-shrink-0 rounded-full" />
          <div className="flex flex-1 flex-col gap-1">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
