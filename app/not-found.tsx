const NotFound = () => (
  <div className="flex h-screen w-screen items-center justify-center bg-linear-150 from-lime-300/60 via-lime-300/30 to-lime-300/10">
    <div className="mx-auto flex max-w-[90%] flex-col gap-4 rounded-2xl border border-white/15 bg-black/30 p-3 shadow-lg backdrop-blur-md">
      <div className="flex gap-2">
        <div className="w-fit rounded-full border border-white/15 px-4 py-1 text-2xl font-extrabold shadow-lg backdrop-blur-md">
          <h1>404</h1>
        </div>
        <div className="w-fit rounded-full border border-white/15 px-4 py-1 text-2xl font-extrabold shadow-lg backdrop-blur-md">
          <span>Page Not Found</span>
        </div>
      </div>

      <div className="rounded-2xl border border-white/15 px-4 py-3 font-bold shadow-lg backdrop-blur-md">
        <div>How did you even get here ???</div>
      </div>
    </div>
  </div>
);

export default NotFound;
