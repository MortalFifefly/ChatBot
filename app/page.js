import React from 'react';
import Header from '/Components/Header.js';
import Body from '/Components/Body.js';
function Page() {
  return (
    <div className='flex flex-col w-full h-full'>
      <Header />
      <Body />
    </div>
  );
}

export default Page;