import React from 'react';

const ChatMessageCard = ({
    message, name, photo, id
}) => {
    return (
        <div className='flex p-2'>
            <img className='w-8 h-8 m-2 rounded-full' src={photo} alt={name} />
            <p className='p-2'>
                <span className='font-bold'>{name} - </span>
                <span>{message}</span>
            </p>
        </div>
    )
}

export default ChatMessageCard;