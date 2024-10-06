import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Slider.css';
import slider1 from '../../Images/0001389_York new products website banner-6_Freestand AC (1920-361) copy 23.png';
import slider2 from '../../Images/0001391_York new products website banner-6_Stellar AC (1920-361) copy 22.png';
import slider3 from '../../Images/app-banner-ar.webp';

const Slider = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="slider app-container  ">
            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={5000}
                infinite={true}
                showDots={true}


            >
                <div className="slide">
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="First slide"
                    />
                  
                </div>
                <div className="slide">
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="Second slide"
                    />
                 
                </div>
                <div className="slide">
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />
                   
                </div>
            </Carousel>
        </div>
    );
}

export default Slider;
