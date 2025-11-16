import AddToHomeScreenButton from "@/components/LandingPage/AddToHomeScreenButton";

export default function LandingPage() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-linear-150 from-lime-300/60 via-lime-300/30 to-lime-300/10">
      <div className="max-w-[90%] mx-auto p-3 bg-black/30 backdrop-blur-md rounded-2xl border border-white/15 shadow-lg flex flex-col gap-6">
        <div className="w-fit flex flex-col gap-1">
          <div className="w-fit text-2xl font-extrabold px-4 py-1 backdrop-blur-md rounded-full border border-white/15 shadow-lg">
            <h1>Asano</h1>
          </div>
          <div className="w-fit text-lg px-4 py-1 backdrop-blur-md rounded-full border border-white/15 shadow-lg">
            <span>Personal Finance App</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="px-4 py-3 backdrop-blur-md rounded-2xl border border-white/15 shadow-lg">
            <span>A modern personal finance tracking application built with Next.js 16</span>
          </div>

          <AddToHomeScreenButton />
        </div>
      </div>
    </div>
  );
}
