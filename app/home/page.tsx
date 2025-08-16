'use client'

import { setShoguns } from '@/lib/features/shogun/shogunSlice'
import '../globals.css'
import { createClient } from '@/utils/supabase/client'
import { JSX, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import ItemCard from './ItemCard'
import type { IShogun } from '@/utils/type'
import { inrFormatter } from '@/utils/formatter'


const Page = (): JSX.Element => {
    const [Total, setTotal] = useState<number>(0)
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

            // Calculate total amount
            const totalAmount = data?.reduce((acc: number, item: IShogun) => acc + item.amount, 0)
            setTotal(totalAmount ?? 0)
        }
        fetchData()
    }, [dispatch])

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col gap-3">
            <div className='w-[90%] mx-auto flex items-center'>
                <span className='mt-4 py-3 text-3xl font-bold'>Asano</span>
            </div>

            <div className='w-[90%] mx-auto flex justify-between items-center gap-2'>
                <div className="h-64 w-full rounded-4xl p-2 flex items-end justify-between bg-white/10 backdrop-blur-md shadow-lg border border-white/20">

                    <div className="w-full rounded-4xl p-4 px-6 flex items-center justify-between bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
                        <span>Total</span>
                        <span>{inrFormatter(Total)}</span>
                    </div>

                </div>
            </div>

            <div className="w-[90%] mx-auto flex flex-col gap-2">
                {shoguns && shoguns.length > 0 ? (
                    shoguns.map((shogun: IShogun) => (
                        <ItemCard key={shogun.id} shogun={shogun} />
                    ))
                ) : (
                    <span className="text-gray-400">No data available.</span>
                )}
            </div>

            <div className='absolute bottom-0 w-full'>
                <div className="m-6 rounded-4xl p-2 flex justify-end items-center gap-2 bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
                    <div className='w-full rounded-4xl p-1 flex justify-center items-center bg-green-300/40 backdrop-blur-md shadow-lg border border-white/20'>
                        <span className='text-center font-semibold'>Add</span>
                    </div>

                    <div className='w-fit rounded-4xl p-1 px-3 bg-white/10 backdrop-blur-md shadow-lg border border-white/20'>
                        <span className='text-center font-semibold'>Home</span>
                    </div>

                    <div className='w-fit rounded-4xl p-1 px-3 bg-white/10 backdrop-blur-md shadow-lg border border-white/20'>
                        <span className='text-center font-semibold'>Expenses</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page