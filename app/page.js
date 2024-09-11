import React from 'react';
import Header from '/components/Header.js';
import Body from '/components/Body.js';
function Page() {
  return (
    <div className='flex flex-col w-full h-full'>
      <Header />
      <Body />
    </div>
  );
}

export default Page;