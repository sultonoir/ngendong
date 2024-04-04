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

const page = () => {
  return <div className="container pt-10"></div>;
};

export default page;
