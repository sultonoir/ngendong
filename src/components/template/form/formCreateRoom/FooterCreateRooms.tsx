"use client";
import React from "react";
import Bar from "../../host/Bar";
import { Button, cn } from "@nextui-org/react";
import useStep from "@/hooks/useStep";
import useDraft from "@/hooks/useDraft";

const FooterCreateRooms = () => {
  const { step, onBack, onNext } = useStep();
  const { category, type, locations, title, desc, image, amenities } =
    useDraft();

  // const disabled = React.useMemo(() => {
  //   switch (step) {
  //     case 0:
  //       return false;
  //     case 1:
  //       return category === "";
  //     case 2:
  //       return type === "";
  //     case 3:
  //       return locations === undefined;
  //     case 4:
  //       return false;
  //     case 5:
  //       return false;
  //     case 6:
  //       return amenities.length === 0;
  //     case 7:
  //       return image.length === 0;
  //     case 8:
  //       return title === "";
  //     case 9:
  //       return desc === "";
  //     case 10:
  //       return false;
  //     case 11:
  //       return false;
  //     case 12:
  //       return false;
  //     default:
  //       return true;
  //   }
  // }, [step, category, type, locations, amenities, image, desc, title]);

  const handleSubmit = () => {
    if (step === 12) {
    } else {
      onNext();
    }
  };

  return (
    <div className="sticky bottom-0 bg-background">
      <div className="flex w-full flex-col">
        <Bar />
        <div
          className={cn("flex w-full items-center px-10 py-4", {
            "justify-end": step === 0,
            "justify-between": step !== 0,
          })}
        >
          <Button
            variant="light"
            onClick={onBack}
            className={cn({ hidden: step === 0 })}
          >
            <span className="underline underline-offset-4">Back</span>
          </Button>
          <Button onClick={onNext}>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default FooterCreateRooms;
