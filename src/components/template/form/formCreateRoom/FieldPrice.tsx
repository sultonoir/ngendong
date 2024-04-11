import useDraft from "@/hooks/useDraft";
import { Button, cn } from "@nextui-org/react";
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";

const FieldPrice = () => {
  const [show, setShow] = useState(false);
  const { price, setPrice } = useDraft();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = parseFloat(e.target.value);
    const formattedValue: string = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);

    const numericValue: number = parseFloat(
      formattedValue.replace(/[$,]/g, ""),
    );
    setPrice(numericValue);
  };

  return (
    <div className="container relative !flex min-h-[calc(100dvh-150px)] max-w-screen-md flex-col justify-center">
      <div className="my-10 flex flex-col items-center gap-5">
        <div>
          <h1 className="text-4xl font-semibold">Now, set your price</h1>
          <p className="text-default-500">You can change it anytime.</p>
        </div>
        <div className="flex w-full items-center justify-center gap-10">
          {show ? (
            <div className="flex items-center justify-center">
              <span className="text-5xl lg:text-7xl">$</span>
              <input
                className="no-scroll w-[200px] overflow-hidden bg-background text-4xl focus:appearance-none focus:outline-none lg:max-w-xs lg:text-7xl"
                type="number"
                value={price}
                onChange={(e) => handleChange(e)}
              />
            </div>
          ) : (
            <div className="flex items-center justify-center gap-1 text-4xl lg:text-7xl">
              <span>$</span>
              <span>{price}</span>
            </div>
          )}
          <Button
            isIconOnly
            variant="bordered"
            radius="full"
            onClick={() => setShow(true)}
            className={cn({ hidden: show })}
          >
            <MdEdit size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FieldPrice;
