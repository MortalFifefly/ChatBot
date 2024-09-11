import React from 'react';
const Header = () => {
    return (
        <div className='flex h-h1 bg-gray-900 px-3 py-3 gap-x-3'>
            <div className='flex h-full basis-1/12 items-center justify-center'>
                <img src="/assets/Ashok_pillars.png" alt="" className='h-full' />
            </div>
            <div className='flex text-white text-4xl font-Cinzel items-center basis-9/12'>
                Indian Museum Kolkata
            </div>
            <div className='flex h-full basis-2/12 items-center'>
                <img src="/assets/Ministry_of_culture.png" alt="" className='h-full'/>
            </div>
        </div>
    );
};

export default Header;