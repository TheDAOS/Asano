const NotFound = () => (
    <div className="flex justify-center items-center w-screen h-screen bg-linear-150 from-lime-300/60 via-lime-300/30 to-lime-300/10">
        <div className="max-w-[90%] mx-auto p-3 bg-black/30 backdrop-blur-md rounded-2xl border border-white/15 shadow-lg flex flex-col gap-4">
            <div className="flex gap-2">
                <div className="w-fit text-2xl font-extrabold px-4 py-1 backdrop-blur-md rounded-full border border-white/15 shadow-lg">
                    <h1>404</h1>
                </div>
                <div className="w-fit text-2xl font-extrabold px-4 py-1 backdrop-blur-md rounded-full border border-white/15 shadow-lg">
                    <span>Page Not Found</span>
                </div>
            </div>

            <div className="px-4 py-3 font-bold backdrop-blur-md rounded-2xl border border-white/15 shadow-lg">
                <div>How did you even get here ???</div>
            </div>
        </div>
    </div>
)

export default NotFound