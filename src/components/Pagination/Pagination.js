import React, { useEffect, useState } from 'react';

import ProductCard from './ProductCard';

const LIMIT = 10;
function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [numOfPages, setNumOfPages] = useState(10);

    /*
    currentPage * LIMIT = skip
    1 * 10 = 10
    2 * 10 = 20
    */

    const fetchProducts = async () => {
        const data = await fetch(
            `https://dummyjson.com/products?limit=${LIMIT}&skip=${currentPage * LIMIT}&select=title,price,description,thumbnail`
        );
        const json = await data.json();
        setProducts(json.products);
        setNumOfPages(json.total / LIMIT);
        // console.table("json", json);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    // const nums = ;

    return (
        <div>
            <div className='flex flex-wrap'>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                    />
                ))}
            </div>
            <div>
                <span className='rounded-sm bg-gray-50'>Prev</span>
                {Array.from(numOfPages).keys().map((pn) => (
                    <span key={pn}>{pn}</span>
                ))}
                <span>Next</span>
            </div>
        </div>
    );
}

export default Pagination;