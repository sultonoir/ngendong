import { api } from "@/trpc/server";
import React from "react";
import { notFound } from "next/navigation";
import { Input } from "@nextui-org/input";
import ButtonCancelPayment from "@/components/ui/ButtonCancelPayment";
import ButtonCreatePayment from "@/components/ui/ButtonCreatePayment";
import RoomImage from "@/components/template/room/RoomImage";
import { Button } from "@nextui-org/button";
import { FaCcPaypal, FaCreditCard } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

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
    <main className="h-[calc(100dvh-66px)]">
      <section className="grid h-full grid-cols-1 lg:grid-cols-2">
        <div className="container flex flex-col justify-center gap-10 bg-content1">
          <div className="grid grid-cols-1 gap-1">
            <h1 className="text-lg text-muted-foreground">Total amout</h1>
            <h2 className="text-3xl font-bold">${data.order.totalPrice}</h2>
          </div>
          <RoomImage picture={data.order.room.imageRoom} />
        </div>
        <div className="container flex max-w-lg flex-col justify-center gap-10">
          <div className="flex items-center gap-3">
            <ButtonCancelPayment id={data.order.id} />
            <p className="text-2xl font-semibold">Payment</p>
          </div>

          <div className="flex w-full flex-col gap-1">
            <p className="text-large">Type</p>
            <div className="flex w-full gap-2">
              <Button
                variant="ghost"
                color="primary"
                startContent={<FaCreditCard />}
                className="text-foreground"
              >
                Card
              </Button>
              <Button
                variant="ghost"
                startContent={<FcGoogle />}
                className="text-foreground"
              >
                Pay
              </Button>
              <Button
                variant="ghost"
                startContent={<FaCcPaypal />}
                className="text-foreground"
              >
                Pay
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <Input
              label="Card informations"
              labelPlacement="outside"
              placeholder="XXXX - XXXX - XXXX"
            />
            <div className="flex items-center gap-2">
              <Input labelPlacement="outside" placeholder="MM/YY" />
              <Input labelPlacement="outside" placeholder="CVV" />
            </div>
          </div>
          <Input
            label="Name on card"
            labelPlacement="outside"
            placeholder="Jhon doe"
          />
          <Input
            label="Country or regions"
            labelPlacement="outside"
            placeholder="JP, Tokyo"
          />
          <ButtonCreatePayment id={data.order.id} />
        </div>
      </section>
    </main>
  );
};

export default Page;
