"use client";
import React from "react";
import { cn } from "@nextui-org/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { api } from "@/trpc/react";

interface Props {
  roomId: string;
}

const WishlistsButton = ({ roomId }: Props) => {
  return (
    <div className="group relative z-10 cursor-pointer transition hover:opacity-80">
      <div className="absolute right-3 top-3">
        <AiOutlineHeart
          className="absolute -right-[2px] -top-[2px] size-8 fill-white
        "
        />
        <AiFillHeart className={cn("size-7 fill-default-500")} />
      </div>
    </div>
  );
};

export default WishlistsButton;
