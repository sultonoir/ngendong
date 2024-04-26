import RoomImage from "@/components/template/room/RoomImage";
import { api } from "@/trpc/server";
import { type Metadata } from "next";
import { User } from "@nextui-org/user";
import React from "react";
import { LodgingType } from "@/dummy";
import Facility from "@/components/template/room/Facility";
import RoomReserv from "@/components/template/room/RoomReserv";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { Skeleton } from "@nextui-org/skeleton";
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

const Map = dynamic(() => import("@/components/template/host/Map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[300px] w-full items-center justify-center">
      <Skeleton className="h-[300px] w-full" />
    </div>
  ),
});

const page = async ({ params }: Props) => {
  const data = await api.lodging.getLodgingByName({
    slug: params.slug,
  });

  if (!data) {
    notFound();
  }

  const roomtype = LodgingType.find((item) => item.key === data.type);

  return (
    <main className="container max-w-screen-xl py-4">
      <section className="flex items-center justify-between py-4">
        <h1 className="text-lg font-semibold lg:text-[26px]">{data.title}</h1>
      </section>
      <RoomImage picture={data?.imageRoom} />
      <div className="relative my-10 flex flex-col gap-10 lg:flex-row">
        <div className="flex flex-1 flex-col gap-7">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold lg:text-2xl">
              {data?.locationValue?.name}, {data?.locationValue?.country}
            </h2>
            <div className="flex divide-x divide-default-200 *:px-3">
              <span className="inline-flex gap-2 first:pl-0">
                {data?.guestCount} Guest
              </span>
              <span className="inline-flex gap-2">
                {data?.roomCount} Bedroom
              </span>
              <span className="inline-flex gap-2">{data?.bed} Beds</span>
            </div>
          </div>
          <div className="flex flex-1 flex-col divide-y divide-default-200 *:py-5">
            <User
              as="a"
              href="#profile"
              classNames={{
                base: "justify-start w-fit",
              }}
              name={`Hosted by ${data.user.name}`}
              description="Product Designer"
              avatarProps={{
                src: data.user.image ?? "/placeholder.jpg",
              }}
            />
            {roomtype && (
              <div className="flex items-center gap-3">
                <roomtype.icon className="size-11 flex-shrink-0" />
                <div className="flex flex-col">
                  <p className="text-base font-semibold leading-none">
                    {roomtype.label}
                  </p>
                  <p className="leading-none text-default-500">
                    {roomtype.desc}
                  </p>
                </div>
              </div>
            )}
            <p className="text-base">{data?.description}</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {data?.fasilitas.map((item) => (
                <Facility key={item.fasilitas} label={item.fasilitas} />
              ))}
            </div>
            {data.locationValue && (
              <Map
                center={[
                  data.locationValue.latitude,
                  data.locationValue.longitude,
                ]}
              />
            )}
          </div>
        </div>
        <RoomReserv price={data.price} guest={data.guestCount} id={data.id} />
      </div>
    </main>
  );
};

export default page;
