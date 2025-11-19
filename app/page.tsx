// import ThemeColorUpdater from "@/components/CommonLayout/ThemeColorUpdater";
import AddToHomeScreenButton from "@/components/LandingPage/AddToHomeScreenButton";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-linear-150 from-lime-300/60 via-lime-300/30 to-lime-300/10">
      <div className="mx-auto flex max-w-[90%] flex-col gap-6 rounded-2xl border border-white/15 bg-black/30 p-3 shadow-lg backdrop-blur-md">
        <div className="flex w-fit flex-col gap-1">
          <div className="w-fit rounded-full border border-white/15 px-4 py-1 text-2xl font-extrabold shadow-lg backdrop-blur-md">
            <Link href="/home">Asano</Link>
          </div>
          <div className="w-fit rounded-full border border-white/15 px-4 py-1 text-lg shadow-lg backdrop-blur-md">
            <span>Personal Finance App</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-white/15 px-4 py-3 shadow-lg backdrop-blur-md">
            <span>
              A modern personal finance tracking application built with Next.js
              16
            </span>
          </div>

          <AddToHomeScreenButton />
        </div>
      </div>

      {/* <ThemeColorUpdater color="#bef26499" /> */}
    </div>
  );
}
