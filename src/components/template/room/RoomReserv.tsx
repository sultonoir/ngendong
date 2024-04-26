"use client";
import useDayCount from "@/hooks/useDayCount";
import React from "react";
import RoomDatePicker from "./RoomDatePicker";
import Counter from "@/components/ui/Counter";
import { useRouter } from "next/navigation";
import { api } from "@/trpc/react";
import { Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import useDialog from "@/hooks/useDialog";
import { toast } from "sonner";

interface Props {
  price: number;
  guest: number;
  id: string;
}

const RoomReserv = ({ guest: maxGuest, price, id }: Props) => {
  const [guest, setGuest] = React.useState(1);

  //hook date and total date
  const { count, date } = useDayCount();

  //hook modal
  const { onOpen } = useDialog();

  //data session
  const { data } = useSession();

  //details for payment
  const details = React.useMemo(() => {
    const result = price * count * guest;
    const ngendongFee = (result * 1) / 100;
    const totalOrder = result + ngendongFee;
    const fixFee = ngendongFee.toFixed(2);
    const ordertotal = totalOrder.toFixed(2);
    return {
      subTotal: result,
      ngendongFee: fixFee,
      totalOrder: ordertotal,
    };
  }, [price, guest, count]);

  //handle click
  const router = useRouter();
  const { mutate, isPending } = api.order.createOrder.useMutation({
    onSuccess: (e) => {
      router.push(`/payment/${e}`);
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });
  const handleClick = () => {
    if (!data) {
      onOpen(true);
    } else {
      mutate({
        price: parseFloat(details.totalOrder),
        roomId: id,
        startDate: date?.from ? date.from : new Date(),
        endDate: date?.to ? date.to : new Date(),
      });
    }
  };

  return (
    <div className="sticky top-[75px] hidden h-fit w-full flex-shrink-0 rounded-lg border border-accent bg-content1 p-4 shadow-sm lg:block lg:w-fit">
      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold lg:text-2xl">
          ${price}
          <span className="ml-2 text-base text-muted-foreground">Nigth</span>
        </p>
        <RoomDatePicker />
        <Counter
          title="Guest"
          maxValue={maxGuest}
          increment={() => setGuest((prev) => prev + 1)}
          value={guest}
          decrement={() => setGuest((prev) => prev - 1)}
        />
        <div className="flex flex-col gap-3 border-t border-border py-3">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Sub total</p>
            <p className="text-base font-bold">${details.subTotal}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Ngendong fee</p>
            <p className="text-base font-bold">${details.ngendongFee}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text text-lg font-semibold">Order total</p>
            <p className="text-base font-bold">${details.totalOrder}</p>
          </div>
          <Button
            variant="solid"
            color="primary"
            isDisabled={isPending}
            isLoading={isPending}
            onClick={handleClick}
          >
            Reserve
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomReserv;
