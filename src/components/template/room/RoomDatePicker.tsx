"use client";
import React from "react";
import { differenceInDays } from "date-fns";
import { Calendar } from "@/components/ui/Calendar";
import useDayCount from "@/hooks/useDayCount";

const RoomDatePicker = () => {
  const { onChange, date, setDate } = useDayCount();

  React.useEffect(() => {
    const dayCount = differenceInDays(
      date?.to ?? new Date(),
      date?.from ?? new Date(),
    );
    onChange(dayCount);
  }, [date, onChange]);

  return (
    <div>
      <Calendar
        mode="range"
        defaultMonth={date?.from}
        selected={date}
        onSelect={setDate}
        numberOfMonths={2}
      />
    </div>
  );
};

export default RoomDatePicker;
