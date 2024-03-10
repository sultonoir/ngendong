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
    <Card className="overflow-hidden">
      <div className="aspect-video">
        <Link
          href={`/room/${room.title}`}
          className="relative flex h-full w-full"
        >
          <Image
            src={room.imageRoom[0]?.url ?? ""}
            alt="Photo by Drew Beamer"
            sizes="(min-width: 1480px) 249px, (min-width: 1040px) 17.14vw, (min-width: 780px) calc(33.33vw - 37px), calc(100vw - 66px)"
            fill
            priority
            className="object-cover"
          />
        </Link>
      </div>
      <CardContent className="flex flex-col gap-2 px-2">
        <Link
          href={`/room/${room.title}`}
          className="block w-full truncate hover:text-primary/80"
        >
          {room.title}
        </Link>
        <div className="text-sm text-muted-foreground">{room.description}</div>
        <div className="text-lg font-bold">${room.price}</div>
      </CardContent>
      <CardFooter className="border-t p-2"></CardFooter>
    </Card>
  );
};

export default RoomCard;
