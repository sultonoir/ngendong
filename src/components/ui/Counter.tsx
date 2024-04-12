import { Button } from "@nextui-org/react";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface Props {
  title: string;
  value: number;
  maxValue: number;
  increment: () => void;
  decrement: () => void;
}

const Counter = ({ value, title, increment, decrement, maxValue }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-lg">{title}</p>
      <div className="flex items-center gap-2">
        <Button
          isIconOnly
          variant="bordered"
          size="sm"
          radius="full"
          isDisabled={value <= 1}
          onClick={decrement}
        >
          <FaMinus />
        </Button>
        <span className="flex size-8 flex-shrink-0 items-center justify-center text-base">
          {value}
        </span>
        <Button
          isIconOnly
          variant="bordered"
          size="sm"
          isDisabled={value === maxValue}
          radius="full"
          onClick={() => {
            if (value <= 14) {
              increment();
            }
          }}
        >
          <FaPlus />
        </Button>
      </div>
    </div>
  );
};

export default Counter;
