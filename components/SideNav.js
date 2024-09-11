import React from 'react';

const SideNav = () => {
    return (
        <div className='flex flex-col text-lg bg-gray-700 basis-1/6 text-white font-OpenSans items-center justify-center h-96'>
            <div className='flex h-sn1 items-center justify-center w-full hover:bg-gray-500 transition-all'>
                Home
            </div>
            <div className='flex h-sn1 items-center justify-center w-full hover:bg-gray-500 transition-all'>
                About
            </div>
            <div className='flex h-sn1 items-center justify-center w-full hover:bg-gray-500 transition-all'>
                Gallery
            </div>
            <div className='flex h-sn1 items-center justify-center w-full hover:bg-gray-500 transition-all'>
                Whats On
            </div>
            <div className='flex h-sn1 items-center justify-center w-full hover:bg-gray-500 transition-all'>
                Notice
            </div>
            <div className='flex h-sn1 items-center justify-center w-full hover:bg-gray-500 transition-all'>
                Visit Us
            </div>
            <div className='flex h-sn1 items-center justify-center w-full hover:bg-gray-500 transition-all'>
                Contact
            </div>
            <div className='flex h-sn1 items-center justify-center w-full hover:bg-gray-500 transition-all'>
                E-Shop
            </div>
            
        </div>
    );
};

export default SideNav;