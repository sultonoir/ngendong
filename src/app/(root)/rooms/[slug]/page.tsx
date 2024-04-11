import { api } from "@/trpc/server";
import { type Metadata } from "next";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await api.lodging.getLodgingByName({
    slug: params.slug,
  });

  return {
    title: data?.title ? `Ngendong - ${data.title}` : "Ngendong",
    generator: "event, reservation,",
    description: "Reserve, Create, Celebrate: Your Event, Your Rules!",
    metadataBase: new URL("https://kyoshop.vercel.app/"),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
        "de-DE": "/de-DE",
      },
    },
    openGraph: {
      title: data?.title ? `Ngendong - ${data.title}` : "Ngendong",
      description: "Reserve, Create, Celebrate: Your Event, Your Rules!",
      url: "https://kyoshop.vercel.app/",
      siteName: "KyouShop",
      images: [
        {
          url: data?.imageRoom[0]?.url ?? "",
          width: 800,
          height: 600,
        },
        {
          url: data?.imageRoom[0]?.url ?? "",
          width: 1800,
          height: 1600,
          alt: "My custom alt",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      site: "https://kyoshop.vercel.app/",
      title: "KyouShop",
      description: "KyouShop easy shopping for everyone",
      images: [
        {
          url: data?.imageRoom[0]?.url ?? "",
          width: 800,
          height: 600,
        },
        {
          url: data?.imageRoom[0]?.url ?? "",
          width: 1800,
          height: 1600,
          alt: "My custom alt",
        },
      ],
    },
  };
}

const page = ({ params }: Props) => {
  return <div>{params.slug}</div>;
};

export default page;
