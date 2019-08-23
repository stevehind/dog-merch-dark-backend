import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import download1 from "./images/download-1.jpg";
import download3 from "./images/download-3.jpg";
import download4 from "./images/download-4.jpg";
import download5 from "./images/download-5.jpg";
import download6 from "./images/download-6.jpg";

const Carousel = () => (

        <AliceCarousel>
            <img src={download1} alt="text" height={200} width={200} />
            <img src={download3} alt="text" className="responsive-image" height={200} width={200} />
            <img src={download4} alt="text" className="responsive-image" height={200} width={200} />
            <img src={download5} alt="text" className="responsive-image" height={200} width={200} />
            <img src={download6} alt="text" className="responsive-image" height={200} width={200} />
        </AliceCarousel>
  )

export default Carousel;