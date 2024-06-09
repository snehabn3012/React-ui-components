import React from "react";

const ProductCard = ({
    title, price, description, thumbnail
}) => {
    return (
        <div className='m-4 p-4 border border-solid border-black w-72'>
            <img className="h-48 object-contain" alt={title} src={thumbnail} />
            <h1 className="p-2 font-bold text-xl">{title}</h1>
            <h2 className="p-l text-lg">Rs. {price}</h2>
            <p className="p-1 text-md">{description}</p>
        </div>
    )
}

export default ProductCard;