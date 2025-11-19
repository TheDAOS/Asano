// import ThemeColorUpdater from "@/components/CommonLayout/ThemeColorUpdater";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mx-auto mt-3 flex w-[90%] gap-2">
        <div className="w-fit rounded-full border border-white/15 bg-black/30 px-4 py-1 text-xl font-bold shadow-lg backdrop-blur-md">
          <Link href="/home">Asano</Link>
        </div>
        <div className="w-fit rounded-full border border-white/15 bg-black/30 px-4 py-1 text-xl font-bold shadow-lg backdrop-blur-md">
          <Link href="/home/2048">Play 2048</Link>
        </div>
      </div>
      {/* <ThemeColorUpdater color="#bef26499" /> */}
    </>
  );
}
