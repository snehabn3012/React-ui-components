import React, { useEffect, useState } from "react";

import ChatMessageCard from './ChatMessageCard';

const CHATLIMIT = 5;

const ChatWindow = () => {
    const [messages, setMessages] = useState([
        {
            id: 0,
            name: "Sneha",
            photo: 'https://picsum.photos/id/237/200/300',
            message: "This is live stream dummy message",
        },
    ])


    var nameList = [
        'Time', 'Past', 'Future', 'Dev',
        'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
        'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
        'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
        'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
        'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
        'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
        'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
        'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
        'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
        'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
        'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
        'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
        'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
        'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
        'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
        'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
        'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
        'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
        'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
        'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
    ];



    const fetchData = () => {
        const name = nameList[Math.floor(Math.random() * nameList.length)];
        const data = [
            {
                id: Math.random(),
                name: name,
                photo: 'https://picsum.photos/id/237/200/300',
                message: `This is live stream dummy message from ${name}`,

            }]
        setMessages(messages => {
            let newMsg = [...data, ...messages];
            newMsg = newMsg.splice(0, CHATLIMIT);
            return newMsg;
        })
    }

    useEffect(() => {
        const s = setInterval(() => {
            fetchData();
        }, 3000)

        return () => {
            clearInterval(s);
        }
    }, []);

    return (
        <div className="flex-col-reverse w-full border border-solid bg-black-50 mx-5 flex h-[400px] overflow-y-scroll">
            {messages.map((chat) => (
                <ChatMessageCard key={chat.id} {...chat} />
            ))}
        </div>
    )
}
export default ChatWindow;