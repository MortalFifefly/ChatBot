import Link from 'next/link';
import React from 'react';

const RSideNav = () => {
    return (
        <div className='flex flex-col bg-slate-600 h-1/2 basis-1/6 p-3'>
            <div className='flex basis-1/3 items-center justify-center'>
                <img src="/assets/chatbot.png" alt="" className='w-1/2' />
            </div>
            <div className='flex basis-1/3 items-center font-OpenSans text-white text-center'>
                PraveshMitra, an Online Chatbot, is here tohelp you with for Ticket Booking and other queries.
            </div>
            <div className='flex basis-1/3 items-center justify-center'>
                <Link href='/PraveshMitra' className='bg-slate-500 text-white p-2 rounded-md hover:bg-slate-400 transition-all font-bold'>
                    Chat Now
                </Link>
            </div>
        </div>
    );
};

export default RSideNav;