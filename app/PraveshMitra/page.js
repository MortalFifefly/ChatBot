import React from 'react';

function App() {
    return (
        <div className='w-screen h-screen flex items-center justify-center  bg-museum bg-no-repeat bg-center bg-cover'>
            <div className='flex flex-col bg-gray-900 w-1/2 h-b2 bg-opacity-80'>
                <div className='flex h-1/6 items-center justify-center'>
                    <img className='h-full' src="/assets/chatbot.png" alt="" />
                </div>
                <div className='flex flex-col h-5/6'>
                    <div className='flex h-b2'>

                    </div>
                    <div className='flex h-h2 gap-1'>
                        <div className='flex basis-1/6 justify-center'>
                            <img className='h-full' src="/assets/user.png" alt="" />
                        </div>
                        <div className='flex basis-4/6 items-center justify-center'>
                            <input className='h-full w-full rounded-lg' type="text" />
                        </div>
                        <div className='flex basis-1/6 justify-center items-center'>
                            <img className='h-5/6' src="/assets/send.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;