import React from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import HomeSlider from './HomeSlider';

const Home = () => {
    const home = {
        title: "Cox's bazar",
        description: "Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ..."
    }
    console.log(home)
    return (
        <div className='home-main justify-center h-screen flex items-center bg-slate-300'>
            <div className="home-contain container max-auto w-auto grid grid-cols-3 gap-5">
                <div className="home-info text-white col-start-1 col-end-1">
                    <h1 className='text-[70px] font-bold uppercase'>{home.title}</h1>
                    <p>{home.description}</p>
                    <button className=' mt-6 px-7 py-2 bg-[#F9A51A] rounded text-black'>Booking<FontAwesomeIcon
                        className=' ml-2'
                        icon={faArrowRightLong} /></button>
                </div>
                <div className=' col-start-2 col-end-4'>
                    <HomeSlider></HomeSlider>
                </div>

            </div>
        </div>

    );
};

export default Home;