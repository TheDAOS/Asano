import '../globals.css'

const Page = () => {

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col gap-3">
            <div className='w-[90%] mx-auto flex items-center'>
                <span className='mt-4 py-3 text-3xl font-bold'>Asano</span>
            </div>
            <div className='w-[90%] mx-auto flex justify-between items-center gap-2'>
                <div className="w-full rounded-lg p-4 flex items-center justify-between bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
                    <span>Total</span>
                    <span>$0</span>
                </div>
                <div className="w-full rounded-lg p-4 flex items-center justify-between bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
                    <span>Total</span>
                    <span>$0</span>
                </div>
            </div>


            <div className='absolute bottom-0 w-full'>
                <div className="m-6 rounded-lg p-4 flex items-center justify-between bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
                    <span className=''> Add </span>
                    <span >Home</span>
                    <span className=''>Settings</span>
                    <span className=''>Expenses</span>
                </div>
            </div>
        </div>
    )
}

export default Page