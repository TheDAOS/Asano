"use client";

import { ICounterStore, useCounterStore } from "@/utils/zustand/Store";
import { MinusDuotone, PlusDuotone } from "@lineiconshq/free-icons";
import Lineicons from "@lineiconshq/react-lineicons";

export default function LandingPage() {
  const { count, increment, decrement } = useCounterStore() as ICounterStore;

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-linear-150 from-lime-300/60 via-lime-300/30 to-lime-300/10">
      <div className="mx-auto flex max-w-[90%] flex-col gap-4 rounded-2xl border border-white/15 bg-black/30 p-3 shadow-lg backdrop-blur-md">
        <div className="w-fit rounded-full border border-white/15 px-4 py-1 text-2xl font-extrabold shadow-lg backdrop-blur-md">
          <h1>Counter</h1>
        </div>
        <div className="rounded-2xl border border-white/15 px-2 py-1 shadow-lg backdrop-blur-md">
          <span className="font-semibold">{count}</span>
        </div>
        <div className="flex w-full">
          <div
            className="flex h-fit w-full justify-start rounded-full rounded-r-none border border-white/15 bg-black/30 px-1"
            onClick={increment}
          >
            <Lineicons
              icon={PlusDuotone}
              size={24}
              color="oklch(93.8% 0.127 124.321)"
            />
          </div>
          <div
            className="flex h-fit w-full justify-end rounded-full rounded-l-none border border-white/15 bg-black/30 px-1"
            onClick={decrement}
          >
            <Lineicons
              icon={MinusDuotone}
              size={24}
              color="oklch(93.8% 0.127 124.321)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
