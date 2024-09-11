import React from 'react';
import SideNav from './SideNav.js';
import MainContent from './MainContent.js';
import RSideNav from './rSideNav.js';
const Body = () => {
    return (
        <div className='flex justify-center'>
            <div className='h-b1 p-3 flex gap-x-3 w-80vw max-w-mw justify-center'>
                <SideNav />
                <MainContent />
                <RSideNav />
            </div>
        </div>
    );
};

export default Body;