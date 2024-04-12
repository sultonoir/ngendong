import { api } from "@/trpc/server";
import React from "react";
import { notFound } from "next/navigation";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import ButtonCancelPayment from "@/components/ui/ButtonCancelPayment";
import ButtonCreatePayment from "@/components/ui/ButtonCreatePayment";

interface Props {
  params: {
    id: string;
  };
}

export const metadata = {
  title: "Confirm and pay - Ngendong",
  description:
    "Ngendong adalah platform sewa properti yang menyediakan akses mudah dan cepat untuk menemukan apartemen, rumah, gedung, dan properti lainnya sesuai kebutuhan Anda. Dengan beragam pilihan yang luas dan berkualitas, Ngendong memudahkan pengguna untuk menemukan tempat tinggal atau ruang komersial yang sesuai dengan preferensi dan anggaran mereka. Dilengkapi dengan fitur pencarian yang canggih dan sistem booking yang aman, Ngendong memastikan pengalaman pengguna yang nyaman dan menyenangkan dalam mencari serta menyewa properti impian mereka.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const Page = async ({ params }: Props) => {
  const data = await api.order.getOrder({
    id: params.id,
  });
  if (!data) {
    notFound();
  }

  return (
    <main className="container max-w-screen-xl py-10">
      <div className="flex items-center gap-2">
        <ButtonCancelPayment id={data.order.id} />
        <p className="text-3xl font-semibold">Confirm and Pay</p>
      </div>
      <div className="relative grid grid-cols-1 gap-10 py-10 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input label="Email" />
            <Input label="Name" />
          </div>
          <Input label="Card number" />
          <div className="flex gap-2">
            <Input
              label="Expiration"
              placeholder="MM/YY"
              labelPlacement="inside"
              type="number"
            />
            <Input label="CVV" className="w-1/3" />
          </div>
          <ButtonCreatePayment id={data.order.id} />
        </div>
        <div className="flex h-fit flex-col gap-4 rounded-lg bg-accent p-4">
          <div className="flex items-center gap-4">
            <div className="relative aspect-square size-20 flex-shrink-0 overflow-hidden rounded-md">
              <Image
                src={data.order.room.imageRoom.at(0)?.url ?? "/placeholder.jpg"}
                alt={data.order.room.title}
                fill
                priority
                loading="eager"
                className="object-cover"
              />
            </div>
            <div className="space-y-1">
              {data.order.room.title}
              <div>
                {data.result === 0 ? (
                  <div className="flex items-center gap-2">
                    <IoMdStar />
                    <span className="text-sm text-muted-foreground">New</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <IoMdStar />
                    <span className="text-sm text-muted-foreground">
                      {data.result}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-default-400 pt-3">
            <p className="text-lg text-muted-foreground">Total</p>
            <p className="text-2xl font-bold">${data.order.totalPrice}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
