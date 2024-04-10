"use client";

import { facility } from "@/dummy";
import { cn } from "@nextui-org/react";
import React from "react";
import { motion } from "framer-motion";
import useDraft from "@/hooks/useDraft";

const FieldAmenities = () => {
  const { amenities, setAmenities } = useDraft();

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  const handleClick = (value: string) => {
    // Cek apakah fasilitas sudah ada dalam array amenities
    const existingIndex = amenities.findIndex(
      (item) => item.fasilitas === value,
    );

    // Jika fasilitas sudah ada, hapus dari array
    if (existingIndex !== -1) {
      const newAmenities = [...amenities];
      newAmenities.splice(existingIndex, 1);
      setAmenities(newAmenities);
    } else {
      // Jika fasilitas belum ada, tambahkan ke array
      const newAmenities = [...amenities, { fasilitas: value }];
      setAmenities(newAmenities);
    }
  };

  return (
    <>
      <div className="container flex min-h-[calc(100dvh-150px)] max-w-screen-md flex-col">
        <div className="!my-auto h-fit">
          <h1 className="text-center text-4xl font-semibold">
            Choose your property type - Airbnb
          </h1>
          <ul className="my-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {facility.map((item, index) => (
              <motion.li
                key={item.label}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: false,
                }}
                custom={index}
                onClick={() => {
                  handleClick(item.key);
                }}
                className={cn(
                  "flex cursor-pointer flex-col items-start justify-center rounded-lg border border-default/50 p-4 hover:border-foreground/50 hover:bg-content1",
                  {
                    "border-foreground/50 bg-content2 hover:opacity-10":
                      amenities.some((test) => test.fasilitas === item.key),
                  },
                )}
              >
                <item.icon className="size-12" />
                <span className="text-base">{item.label}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FieldAmenities;
