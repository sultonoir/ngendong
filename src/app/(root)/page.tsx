import { type Metadata } from "next";
import React from "react";
import { Skeleton } from "@nextui-org/skeleton";

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

const page = () => {
  return (
    <div className="container">
      <Skeleton className="size-[350px] rounded-lg" />
      <br />
      <Skeleton className="h-3 w-[140px] rounded-full" />
    </div>
  );
};

export default page;
