import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Step 1: Tell us about your place - Ngendong",
  description:
    "Ngendong adalah platform sewa properti yang menyediakan akses mudah dan cepat untuk menemukan apartemen, rumah, gedung, dan properti lainnya sesuai kebutuhan Anda. Dengan beragam pilihan yang luas dan berkualitas, Ngendong memudahkan pengguna untuk menemukan tempat tinggal atau ruang komersial yang sesuai dengan preferensi dan anggaran mereka. Dilengkapi dengan fitur pencarian yang canggih dan sistem booking yang aman, Ngendong memastikan pengalaman pengguna yang nyaman dan menyenangkan dalam mencari serta menyewa properti impian mereka.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const page = () => {
  return (
    <>
      <div className="grid h-full grid-cols-1 items-center justify-center gap-10 lg:grid-cols-2">
        <div className="h-fit">
          <div className="flex flex-col justify-center gap-4 lg:gap-10">
            <span className="text-base font-semibold lg:text-lg">Step 1</span>
            <h1 className="text-4xl font-semibold lg:text-5xl">
              Tell us about your place
            </h1>
            <p className="text-base text-foreground/80">
              In this step, we&apos;ll ask you which type of property you have
              and if guests will book the entire place or just a room. Then let
              us know the location and how many guests can stay.
            </p>
          </div>
        </div>

        <div className="relative h-96 w-full lg:size-full">
          <Image
            src="/home.png"
            alt="logo"
            fill
            loading="eager"
            className="size-auto object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default page;
