import React, { useState } from "react";

import './ImageSlider.css';

const SliderData = [
    {
      image:
        'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      image:
        'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
    },
    {
      image:
        'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
    },
    {
      image:
        'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
    },
    {
      image:
        'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
    }
  ];

 function ImageSlider() {
    const [current, setCurrent] = useState(0);

    function prevClick() {
        setCurrent(current === 0 ? SliderData.length - 1: current - 1);
    }

    function nextClick() {
        setCurrent(current ===  SliderData.length - 1 ? 0 : current + 1);
    }
    return (
        <>
        <h4>Image Slider</h4>
        <button onClick={prevClick}>Prev</button>
        { SliderData.map((data, index) => (
                <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
            {index === current && <img className="slider-image" src={data.image} alt={data.image} />}
       
        </div>
         ))}
        <button onClick={nextClick}>Next</button>
        
        </>
    )
}

export default ImageSlider;