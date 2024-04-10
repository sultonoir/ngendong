import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import useDraft from "@/hooks/useDraft";
import NextImage from "next/image";
import { IoMdStar } from "react-icons/io";
import { BsCalendar2Check } from "react-icons/bs";
import { MdCalendarToday, MdOutlineEdit } from "react-icons/md";

const FieldPreview = () => {
  const { image, title, price } = useDraft();

  const lists = [
    {
      title: "Confirm a few details and publish",
      desc: "We'll let you know if you need to verify your identity or register with the local governme",
      icon: BsCalendar2Check,
    },
    {
      title: "Set up your calendar",
      desc: "Choose which dates your listing is available. It will be visible 24 hours after you publish.",
      icon: MdCalendarToday,
    },
    {
      title: "Adjust your settings",
      desc: "Set house rules, select a cancellation policy, choose how guests book, and more.",
      icon: MdOutlineEdit,
    },
  ];

  return (
    <div className="container relative !flex min-h-[calc(100dvh-150px)] max-w-screen-lg flex-col justify-center">
      <div className="my-10 flex flex-col gap-5">
        <div>
          <h1 className="text-4xl font-semibold">Review your listing</h1>
          <p className="text-default-500">
            Here&apos;s what we&apos;ll show to guests. Make sure everything
            looks good.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-10">
          <Card className="w-full max-w-[360px] py-4 lg:min-w-[340px]">
            <CardHeader className="px-4 py-0">
              <div className="relative h-[250px] w-full lg:h-[270px]">
                <NextImage
                  alt="Card background"
                  className="size-full rounded-lg object-cover"
                  src={
                    image.length
                      ? URL.createObjectURL(image.at(0)!)
                      : "/placeholder.jpg"
                  }
                  fill
                  loading="eager"
                />
              </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="flex items-start justify-between">
                <div className="max-w-[calc(100%-80px)] flex-1">
                  <div className="text-[15px] font-semibold">{title}</div>
                  <div>
                    <b>${price}</b>
                    <span className="text-default-500">Night.</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[15px]">
                  New
                  <IoMdStar />
                </span>
              </div>
            </CardBody>
          </Card>
          <div className="flex flex-col gap-5 lg:gap-10">
            <h3 className="text-2xl font-semibold">What next?</h3>
            {lists.map((list) => (
              <div className="flex gap-10" key={list.title}>
                <list.icon className="size-10 flex-shrink-0" />
                <div className="flex flex-1 flex-col">
                  <p className="text-lg">{list.title}</p>
                  <p className="text-default-500">{list.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default FieldPreview;
