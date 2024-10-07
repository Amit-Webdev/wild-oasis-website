"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights * (regularPrice - discount);

  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        classNames={{
          root: "my-calendar",
          selected: "bg-accent-500",
          range_start: "bg-accent-500 rounded-l-3xl",
          range_middle: "bg-accent-500",
          range_end: "bg-accent-500 rounded-r-3xl",
        }}
        className="pt-12 place-self-center rdp"
        mode="range"
        onSelect={(range) => setRange(range)}
        selected={range}
        min={minBookingLength + 1}
        max={maxBookingLength}
        // --**-- START MONTH --**--
        // startMonth={new Date(2010, 0)}
        startMonth={new Date(new Date().getFullYear(), new Date().getMonth())}
        // --**-- Disable all dates before today --**--
        // fromDate={new Date()}
        // disabled={[
        //   {
        //     before: new Date(
        //       new Date().getFullYear(),
        //       new Date().getMonth(),
        //       new Date().getDate()
        //     ),
        //   },
        // ]}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
        // --**-- select dates from today to untill 5 years --**--
        // toYear={new Date().getFullYear() + 5}
        endMonth={new Date(new Date().getFullYear() + 5, 11)}
        captionLayout="dropdown"
        numberOfMonths={2}
        // components={{
        //   Navbar: () => null,
        // }}
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
