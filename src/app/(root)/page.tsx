import RoomCard from "@/components/template/home/RoomCard";
import { api } from "@/trpc/server";
import { type Metadata } from "next";
import React from "react";

interface Props {
  searchParams: { category: string };
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  return {
    title: searchParams.category
      ? `Ngendong in ${searchParams.category}`
      : "Ngendong",
  };
}

const page = async ({ searchParams }: Props) => {
  const data = await api.lodging.getLodging({
    category: searchParams.category,
  });
  return (
    <main className="container py-4">
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {data.map((item) => (
          <RoomCard
            room={item}
            key={item.id}
            location={item.locationValue}
            picture={item.imageRoom}
            rating={item.rating}
          />
        ))}
      </section>
    </main>
  );
};

export default page;
