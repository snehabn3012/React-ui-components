import React, { useEffect, useState } from 'react';

import useDebounce from './../../hooks/useDebounce';

const SearchUI = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([]);
    const [isResultVisible, setIsResultVisible] = useState(false);
    const [cache, setCache] = useState({});

    const fetchData = useDebounce(
        async () => {
            if (cache[searchQuery]) {
                setData(cache[searchQuery]);
                return;
            }


            const data = await fetch(`https://www.google.com/complete/search?client=firefox&q=${searchQuery}`);
            const json = await data.json();
            console.log("json", json);
            setData(json[1]);
            setCache(cache =>
                ({ ...cache, ...{ [searchQuery]: json[1] } })
            );
        }, 2000);

    const onTextChange = (event) => {
        const t = event.target.value;
        setSearchQuery(t)

    }

    useEffect(() => {
        if (searchQuery.length === 0) {
            setData([]);
            return;
        }

        fetchData();


    }, [searchQuery]);

    return (
        <div className='m-10'>
            <input type="text"
                onChange={onTextChange}
                value={searchQuery}
                onFocus={() => setIsResultVisible(true)}
                onBlur={() => setIsResultVisible(false)}
                className='border border-black border-rounded h-10 w-60 p-2 shadow-md'
            />
            {
                searchQuery && isResultVisible && (
                    <ul className='p-1 border border-black w-60 shadow-lg'>
                        {data.map((text, index) => (
                            <li className="p-1 hover:bg-gray-200 cursor-pointer rounded-sm" key={index}>{text}</li>
                        ))
                        }

                    </ul>
                )
            }

        </div>
    )

}

export default SearchUI;