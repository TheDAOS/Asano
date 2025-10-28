'use client';

import { setShoguns } from '@/lib/features/shogun/shogunSlice'
import '../globals.css'
import { createClient } from '@/utils/supabase/client'
import { JSX, useEffect, useState } from 'react'
import { ItemCard } from '@/components'
import { Shogun } from '@/utils/type'
import { inrFormatter } from '@/utils/formatter'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'


const Page = (): JSX.Element => {
    const [Total, setTotal] = useState<number>(0)
    const dispatch = useAppDispatch();
    const { data: shoguns, loading, error } = useAppSelector(state => state.shogun);

    useEffect(() => {
        const fetchData = async () => {
            const supabase = createClient();
            const { data, error } = await supabase.from('Shogun').select('*');

            if (error) {
                console.error('Error fetching data from shogun:', error);
            } else {
                const sortedData = [...(data || [])].sort(
                    (a: Shogun, b: Shogun) => 
                    new Date(b.date).getTime() - new Date(a.date).getTime()
                );
                dispatch(setShoguns(sortedData));
            }

            // Calculate total amount
            const totalAmount = data?.reduce(
                (acc: number, item: Shogun) => acc + item.amount, 
                0
            );
            setTotal(totalAmount ?? 0);
        };
        fetchData();
    }, [dispatch]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-red-500">Error: {error}</div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-3">
            <div className='w-[90%] mx-auto flex items-center'>
                <span className='mt-4 py-3 text-3xl font-bold'>Asano</span>
            </div>

            <div className='w-[90%] mx-auto flex justify-between items-center gap-2'>
                <div className="h-64 w-full rounded-4xl p-2 flex items-end justify-between bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
                    <div className="w-full rounded-4xl p-4 px-6 flex items-center justify-between bg-white/10 backdrop-blur-md shadow-lg border border-white/20 font-semibold">
                        <span>Total</span>
                        <span>{inrFormatter(Total)}</span>
                    </div>
                </div>
            </div>

            <div className="w-[90%] mx-auto flex flex-col gap-2">
                {shoguns && shoguns.length > 0 ? (
                    shoguns.map((shogun: Shogun) => (
                        <ItemCard key={shogun.id} shogun={shogun} />
                    ))
                ) : (
                    <span className="text-gray-400">No transactions available.</span>
                )}
            </div>

            <div className='absolute bottom-0 w-full'>
                <div className="m-6 rounded-4xl p-2 flex justify-end items-center gap-2 bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
                    <div
                        className='w-full rounded-4xl p-1 flex justify-center items-center bg-green-300/40 backdrop-blur-md shadow-lg border border-white/20'
                        onClick={() => console.log('Add new item')}
                    >
                        <span className='text-center font-semibold select-none'>Add</span>
                    </div>

                    <div className='w-fit rounded-4xl p-1 px-3'>
                        <span className='text-center font-semibold select-none'>Home</span>
                    </div>

                    <div className='w-fit rounded-4xl p-1 px-3'>
                        <span className='text-center font-semibold select-none'>Expenses</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page