import { Card, CardContent, CardFooter } from "@/components/ui/card";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { type ImageRoom, type Room } from "@prisma/client";

interface Props {
  room: Room & {
    imageRoom: ImageRoom[];
  };
}

const RoomCard = ({ room }: Props) => {
  return (
    <Card className="border-none shadow-none">
      <div className="aspect-square overflow-hidden rounded-lg">
        <Link href={`/room/${room.title}`} className="relative flex size-full">
          <Image
            src={room.imageRoom[0]?.url ?? ""}
            alt="Photo by Drew Beamer"
            sizes="(min-width: 1480px) 500px, (min-width: 1040px) 17.14vw, (min-width: 780px) calc(33.33vw - 37px), calc(100vw - 66px)"
            fill
            priority
            className="object-cover"
          />
        </Link>
      </div>
      <CardContent className="mt-2 flex flex-col px-2 pb-2">
        <Link
          href={`/room/${room.title}`}
          className="block w-full truncate font-semibold leading-none hover:text-primary/80"
        >
          {room.title}
        </Link>
        <div className="text-sm text-muted-foreground">{room.description}</div>
      </CardContent>
      <CardFooter className="px-2 py-0">
        <div className="text-lg font-bold">${room.price}</div>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
