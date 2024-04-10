"use client";
import useDraft from "@/hooks/useDraft";
import { Button } from "@nextui-org/react";
import React, { Fragment } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const FieldFloor = () => {
  const { guest, bedrooms, bed, bedChange, bedRoomChange, guestChange } =
    useDraft();

  return (
    <Fragment>
      <div className="container relative flex min-h-[calc(100dvh-150px)] max-w-fit flex-col">
        <div className="!my-auto h-fit">
          <div className="!flex !h-full !w-full flex-col">
            <h1 className="text-4xl font-semibold">
              Share some basics about your place
            </h1>
            <p className="text-foreground/50">
              {`You'll add more details later, like bed types.`}
            </p>
            <div className="my-10 grid h-full grid-cols-1 gap-4 divide-y-1 divide-foreground/50 *:pt-3 first:pt-0">
              <div className="flex items-center justify-between">
                <p className="text-lg">Guest</p>
                <div className="flex items-center gap-2">
                  <Button
                    isIconOnly
                    variant="bordered"
                    size="sm"
                    radius="full"
                    isDisabled={guest <= 1}
                    onClick={() => guestChange(guest - 1)}
                  >
                    <FaMinus />
                  </Button>
                  <span className="flex size-8 flex-shrink-0 items-center justify-center text-base">
                    {guest}
                  </span>
                  <Button
                    isIconOnly
                    variant="bordered"
                    size="sm"
                    isDisabled={guest === 15}
                    radius="full"
                    onClick={() => {
                      if (guest <= 14) {
                        guestChange(guest + 1);
                      }
                    }}
                  >
                    <FaPlus />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-lg">Bedrooms</p>
                <div className="flex items-center gap-2">
                  <Button
                    isIconOnly
                    variant="bordered"
                    size="sm"
                    radius="full"
                    isDisabled={bedrooms <= 1}
                    onClick={() => bedRoomChange(bedrooms - 1)}
                  >
                    <FaMinus />
                  </Button>
                  <span className="flex size-8 flex-shrink-0 items-center justify-center text-base">
                    {bedrooms}
                  </span>
                  <Button
                    isIconOnly
                    variant="bordered"
                    size="sm"
                    isDisabled={bedrooms === 15}
                    radius="full"
                    onClick={() => {
                      if (bedrooms <= 14) {
                        bedRoomChange(bedrooms + 1);
                      }
                    }}
                  >
                    <FaPlus />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-lg">Bed</p>
                <div className="flex items-center gap-2">
                  <Button
                    isIconOnly
                    variant="bordered"
                    size="sm"
                    radius="full"
                    isDisabled={bed <= 1}
                    onClick={() => bedChange(bed - 1)}
                  >
                    <FaMinus />
                  </Button>
                  <span className="flex size-8 flex-shrink-0 items-center justify-center text-base">
                    {bed}
                  </span>
                  <Button
                    isIconOnly
                    variant="bordered"
                    size="sm"
                    isDisabled={bed === 15}
                    radius="full"
                    onClick={() => {
                      if (bed <= 14) {
                        bedChange(bed + 1);
                      }
                    }}
                  >
                    <FaPlus />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FieldFloor;
