"use client";
import React from "react";
import { cn } from "@nextui-org/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { api } from "@/trpc/react";
import { toast } from "sonner";

interface Props {
  roomId: string;
}

const ButtonWishlist = ({ roomId }: Props) => {
  const ctx = api.useUtils();
  const { data } = api.wishlists.getWishlists.useQuery({
    roomId,
  });
  const { mutate, isPending } = api.wishlists.addWishlist.useMutation({
    onError: () => {
      toast.error("invalid create wishlists");
    },
    onSuccess: async (e) => {
      await ctx.wishlists.getWishlists.refetch();
      if (e) {
        toast.success("Wishlists created");
      } else {
        toast.success("wishlists deleted");
      }
    },
  });

  return (
    <div
      className="group relative z-10 cursor-pointer transition hover:opacity-80"
      onClick={() =>
        mutate({
          roomId,
        })
      }
    >
      <div className="absolute right-3 top-3">
        <AiOutlineHeart className="absolute -right-[2px] -top-[2px] size-8 fill-white" />
        <AiFillHeart
          className={cn(
            "size-7 fill-default-500",
            {
              "fill-rose-500": data === true,
            },
            {
              "fill-rose-500": isPending === true,
            },
          )}
        />
      </div>
    </div>
  );
};

export default ButtonWishlist;
