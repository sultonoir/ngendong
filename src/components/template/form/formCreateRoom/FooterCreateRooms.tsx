"use client";
import React from "react";
import Bar from "../../host/Bar";
import { Button, cn } from "@nextui-org/react";
import useStep from "@/hooks/useStep";
import useDraft from "@/hooks/useDraft";
import { useUploadThing } from "@/lib/uploadthing";
import { api } from "@/trpc/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface ImageUpload {
  url: string;
}

const FooterCreateRooms = () => {
  const [pending, setPending] = React.useState(false);
  const { step, onBack, onNext } = useStep();
  const {
    category,
    type,
    locations,
    title,
    desc,
    image,
    amenities,
    guest,
    bed,
    bedrooms,
    price,
  } = useDraft();

  const disabled = React.useMemo(() => {
    switch (step) {
      case 0:
        return false;
      case 1:
        return category === "";
      case 2:
        return type === "";
      case 3:
        return locations === undefined;
      case 4:
        return false;
      case 5:
        return false;
      case 6:
        return amenities.length === 0;
      case 7:
        return image.length === 0;
      case 8:
        return title === "";
      case 9:
        return desc === "";
      case 10:
        return false;
      case 11:
        return false;
      case 12:
        return false;
      default:
        return true;
    }
  }, [step, category, type, locations, amenities, image, desc, title]);

  const { startUpload } = useUploadThing("media");

  const router = useRouter();

  const { mutate } = api.lodging.createLodging.useMutation({
    onError: (e) => {
      setPending(false);
      toast.error(e.message);
    },
    onSuccess: () => {
      setPending(false);
      toast.success("Congratulations, your lodging realesed");
    },
    onSettled: () => {
      router.push("/owner");
    },
  });

  //fake location if location not found
  const fakeLocations = {
    name: "London",
    latitude: 51.5085,
    longitude: -0.1257,
    country: "GB",
  };

  const handleSubmit = async () => {
    if (step === 12) {
      setPending(true);
      let imageUpload: ImageUpload[] = [];
      const imgRes = await startUpload(image);

      if (imgRes) {
        const imageurl = imgRes.map((item) => ({
          url: item.url,
        }));
        imageUpload = imageurl;
      }
      mutate({
        title,
        image: imageUpload,
        type,
        category,
        amenities,
        locations: locations ? locations : fakeLocations,
        desc,
        bed,
        bedrooms,
        guest,
        price,
      });
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
          <Button
            isLoading={pending}
            isDisabled={disabled}
            onClick={handleSubmit}
          >
            {step === 12 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FooterCreateRooms;
