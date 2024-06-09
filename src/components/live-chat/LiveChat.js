import React from 'react';

import VideoStream from './VideoStream';
import ChatWindow from './ChatWindow';

const LiveChat = () => {
    return (
        <div className='flex my-10'>
            <VideoStream />
            <ChatWindow />
        </div>
    )

}

export default LiveChat;