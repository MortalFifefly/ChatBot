import Link from 'next/link';
import React from 'react';

const MainContent = () => {
    return (
        <div className='flex flex-col basis-4/6 h-full gap-3'>
            <div className='h-1/3 overflow-hidden'>
                <img src="/assets/Indian_Museum_Kolkata.png" alt="" className='w-full' />
            </div>
            <div className='flex h-h2 text-3xl font-Cinzel font-bold items-center justify-center'>
                Welcome to Indian Museum Kolkata
            </div>
            <div className='flex h-h2 text-xl font-Cinzel font-bold items-center justify-center'>
                Founded 1814
            </div>
            <div className='flex h-h3 font-OpenSans items-center font-medium justify-center text-justify'>
                The Indian Museum in Kolkata, established in 1814, stands as a monumental institution in India's cultural and historical landscape. As one of the oldest and largest museums in the country, it boasts an extensive array of exhibits across various domains, including archaeology, art, natural history, and ethnography. Visitors can explore remarkable artifacts such as the Ashoka Pillar, ancient relics from the Indus Valley Civilization, and an impressive collection of Egyptian mummies. The museum's grand colonial-era building itself is a testament to architectural elegance, housing a vast repository of India's rich heritage. Serving both as a center for research and a public educational hub, the Indian Museum offers a captivating journey through time and culture, reflecting the depth and diversity of India's historical legacy.
            </div>
            <div className='flex items-center justify-center w-full'>
                <a href='https://praveshmitra.onrender.com/' className=' flex items-center justify-center bg-slate-500 text-white p-2 rounded-md hover:bg-slate-400 transition-all font-bold h-20 w-72 text-xl'>
                    Book Tickets
                </a>
            </div>
        </div>
    );
};

export default MainContent;