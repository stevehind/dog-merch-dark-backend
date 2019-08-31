import React from 'react';
import { Carousel } from "react-responsive-carousel";
import download1 from "./images/download-1.jpg";
import download7 from "./images/download-7.jpg";
import download8 from "./images/download-8.jpg";
import download9 from "./images/download-9.jpg";
import download10 from "./images/download-10.jpg";
import download11 from "./images/download-11.jpg";

export default () => (
  <Carousel autoplay
  showArrows={true}
  dynamicHeight={true}
  useKeyboardArrows={true}
  infiniteLoop={true}
  >
    <div>
      <img src={download1} alt="Sesil with his ball!"/>
    </div>
    <div>
      <img src={download7} alt="Noir puppies"/>
    </div>
    <div>
      <img src={download8} alt="Views of Sesil"/>
    </div>
    <div>
      <img src={download9} alt="Tough boys"/>
    </div>
    <div>
      <img src={download10} alt="Bad Santa"/>
    </div>
    <div>
      <img src={download11} alt="Bad Sydney"/>
    </div>
  </Carousel>
);