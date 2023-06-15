import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Destination.css'

const Destination = () => {
    const destination = {
        title: "Cox's bazar",
        description: 'Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.'
    }
    return (
        <div className='home-main justify-center h-screen flex items-center bg-slate-300'>
            <div className="home-contain container max-auto w-auto grid grid-cols-5 gap-5">
                <div className="home-info text-white col-start-1 col-end-3 ">
                    <div className="content-main space-y-2">
                        <h1>{destination.title}</h1>
                        <p>{destination.description}</p>
                        <button className=' mt-6 px-7 py-2 bg-[#F9A51A] rounded text-black'>Booking<FontAwesomeIcon
                            className=' ml-2'
                            icon={faArrowRightLong} /></button>
                    </div>
                </div>
                <div className='col-start-4 col-end-6'>
                    <div className="search-form bg-white p-[24px] rounded-md">
                        <form className=' space-y-[13px]'>
                            <div className='flex flex-col'>
                                <label className=' text-[#818181] pb-[5px]'>Origin</label>
                                <input className=' font-bold text-[16px] rounded-[5px] bg-[#F2F2F2] py-[20px] pl-6' type="text" placeholder='Origin' />
                            </div>
                            <div className='flex flex-col'>
                                <label className=' text-[#818181] pb-[5px]'>Destination</label>
                                <input className=' font-bold text-[16px] rounded-[5px] bg-[#F2F2F2] py-[20px] pl-6' type="text" placeholder='Origin' />
                            </div>
                            <div className="date flex justify-between gap-4">
                                <div className="from flex flex-col w-full">
                                    <label>Form</label>
                                    <input className='font-bold text-[16px] rounded-[5px] bg-[#F2F2F2] py-[20px] px-6' type="date" />
                                </div>
                                <div className="from flex flex-col w-full">
                                    <label>Form</label>
                                    <input className=' font-bold text-[16px] rounded-[5px] bg-[#F2F2F2] py-[20px] px-6' type="date" />
                                </div>
                            </div>
                            <div className="button  pt-7">
                                <button className=' rounded w-full bg-[#F9A51A] py-[20px]'>Start Booking</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;