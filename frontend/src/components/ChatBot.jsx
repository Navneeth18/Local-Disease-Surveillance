import React from 'react'

const ChatBot = () => {
    return (
        <div className='flex flex-col gap-2 items-center justify-center bg-[#edeef2]'>
            <h1 className='mt-10 text-2xl font-extrabold'>Describe your problems and get remedies and health suggestion</h1>
            <div className="w-150 border-2 ">
                <iframe
                    src="https://www.chatbase.co/chatbot-iframe/nZCwfkRbdiUkXeh7EwaBi"
                    width="100%"
                    style={{ height: "100%", minHeight: "650px" }}
                // frameBorder="0"
                ></iframe>
            </div>


        </div>
    )
}

export default ChatBot