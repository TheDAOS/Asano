'use client'

import { setShoguns } from '@/lib/features/shogun/shogunSlice'
import '../globals.css'
import { createClient } from '@/utils/supabase/client'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


const Page = () => {
    const dispatch = useDispatch()
    const shoguns = useSelector((state: any) => state.shogun.data)

    useEffect(() => {
        const fetchData = async () => {
            const supabase = createClient()

            const { data, error } = await supabase.from('Shogun').select('*')

            if (error) {
                console.error('Error fetching data from shogun:', error)
            } else {
                console.log('Shogun table data:', data)
                dispatch(setShoguns(data))
            }
        }
        fetchData()
    }, [dispatch])

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


            <div className="w-[90%] mx-auto flex flex-col gap-2">
                {shoguns && shoguns.length > 0 ? (
                    shoguns.map((shogun: any) => (
                        <div
                            key={shogun.id}
                            className="rounded-lg p-4 bg-white/10 backdrop-blur-md shadow border border-white/20 flex justify-between items-center"
                        >
                            <span>{shogun.name}</span>
                            <span>{shogun.amount}</span>
                        </div>
                    ))
                ) : (
                    <span className="text-gray-400">No data available.</span>
                )}
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