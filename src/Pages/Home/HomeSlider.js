import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'
import img1 from "../../Asstes/images/Sajek.png";
import img2 from "../../Asstes/images/Sreemongol.png";
import img3 from "../../Asstes/images/sundorbon.png";

const HomeSlider = () => {
    const settings = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: false, // Remove the left arrow
        nextArrow: null, // Remove the right arrow

    };

    return (
        <div className="home-slider">
            <div>
                <Slider {...settings}>
                    <div>
                        <img className="w-[90%]  " src={img1} alt="" />
                    </div>
                    <div>
                        <img className="w-[90%]" src={img2} alt="" />
                    </div>
                    <div>
                        <img className="w-[90%]" src={img3} alt="" />
                    </div>
                    <div>
                        <img className="w-[90%]" src={img2} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default HomeSlider;