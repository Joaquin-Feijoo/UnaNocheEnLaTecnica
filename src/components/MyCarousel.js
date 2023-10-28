import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/MyCarousel.css";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";

function MyCarousel() {
  return (
    <div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        emulateTouch={true}
      >
        <div>
          <img src={image1} alt="Inicio" />
        </div>
        <div>
          <img src={image2} alt="Sala" />
        </div>
        <div>
          <img src={image3} alt="Salón1" />
        </div>
        <div>
          <img src={image4} alt="Salón2" />
        </div>
        <div>
          <img src={image5} alt="Pasillo" />
        </div>
      </Carousel>
    </div>
  );
}

export default MyCarousel;
