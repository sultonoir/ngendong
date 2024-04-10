import useDraft from "@/hooks/useDraft";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { type ChangeEvent } from "react";
import { BsPlus } from "react-icons/bs";
import { IoImagesOutline } from "react-icons/io5";
import { TbTrash } from "react-icons/tb";

const FieldImage = () => {
  const { image, setImage } = useDraft();

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      const uniqueFiles: File[] = [];

      newFiles.forEach((file) => {
        if (!file.type.includes("image")) return;

        const isDuplicate = image?.some((item) => item.name === file.name);
        if (!isDuplicate) {
          uniqueFiles.push(file);
        }

        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
      });

      setImage([...image, ...uniqueFiles]);
    }
  };

  const handleDelete = (value: string) => {
    const newFile = [...image];
    const newImage = newFile.filter((item) => item.name !== value);
    setImage(newImage);
  };
  return (
    <div className="container relative !flex min-h-[calc(100dvh-150px)] max-w-screen-md flex-col justify-center">
      <div className="my-10 flex flex-col gap-5">
        <div>
          <h1 className="text-4xl font-semibold">
            Add some photos about your lodging
          </h1>
          <p className="text-default-500">{`You'll need 5 photos to get started. You can add more or make changes later.`}</p>
        </div>
        {image.length ? (
          <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-rows-2">
            <div className="relative col-span-1 row-span-1 h-[350px] overflow-hidden rounded-lg md:col-span-2">
              <Image
                src={URL.createObjectURL(image.at(0)!) ?? "/placeholder.jpeg"}
                fill
                loading="eager"
                sizes="(min-width: 1480px) 1040px, (min-width: 1040px) calc(15.24vw + 818px), (min-width: 420px) 320px, calc(84vw - 16px)"
                className="size-auto object-cover"
                alt="cover"
              />
              <Button
                isIconOnly
                onClick={() => handleDelete(image.at(0)!.name)}
                radius="full"
                className="absolute right-1 top-1 z-40 size-10"
              >
                <TbTrash size={20} />
              </Button>
            </div>
            {image.slice(1).map((item, index) => (
              <div
                className="relative col-span-1 row-span-1 h-[350px] overflow-hidden rounded-lg"
                key={index}
              >
                <Image
                  src={URL.createObjectURL(item)}
                  fill
                  loading="eager"
                  sizes="(min-width: 1480px) 1040px, (min-width: 1040px) calc(15.24vw + 818px), (min-width: 420px) 320px, calc(84vw - 16px)"
                  className="size-auto object-cover"
                  alt="cover"
                />
                <Button
                  isIconOnly
                  onClick={() => handleDelete(item.name)}
                  radius="full"
                  className="absolute right-1 top-1 z-40 size-10"
                >
                  <TbTrash size={20} />
                </Button>
              </div>
            ))}
            <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-default-500 md:h-[350px]">
              <BsPlus size={50} />
              <span>Add more</span>
              <input
                className="hidden"
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => handleImage(e)}
              />
            </label>
          </div>
        ) : (
          <div className="!flex !size-full flex-col items-center justify-center rounded-lg border border-dashed border-foreground p-5 lg:p-20">
            <IoImagesOutline size={50} />
            <span className="text-large font-semibold lg:text-[22px]">
              Drag your photos here
            </span>
            <span>Choose at least 5 photos</span>
            <label className="cursor-pointer underline underline-offset-4 lg:pt-10">
              Upload from your device
              <input
                className="hidden"
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => handleImage(e)}
              />
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default FieldImage;
