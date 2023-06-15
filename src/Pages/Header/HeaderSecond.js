import React from 'react';
import logo from '../../Asstes/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const HeaderSecond = () => {
    return (
        <nav className='sticky top-0 z-50 bg-white'>
            <div className='flex container mx-auto w-auto items-center py-[30px]'>
                <div className=" w-1/4 logo columns-4xl">
                    <img className=' h-14' src={logo} alt="" />
                </div>
                <div className=" w-3/4 header-item items-center flex justify-between">
                    <div className="search-bar w-1/3 px-2 py-1 rounded-[6px] border border-white-200 bg-[#000] bg-opacity-20">
                        <FontAwesomeIcon className=' text-[14] text-black px-[10px]' icon={faMagnifyingGlass} />
                        <input className=' text-black focus-visible:outline-none focus:outline-none w-[90%] bg-transparent placeholder:text-black text-[14px]' type="search" placeholder='Search your Destination...' />
                    </div>
                    <div className="menu-main">
                        <div className="menu-main text-black flex space-x-20 items-center">
                            <NavLink to='/home'>Home</NavLink>
                            <NavLink to='/destination'>Destination</NavLink>
                            <NavLink to='/create-property'>Add Property</NavLink>
                            <NavLink to='/properties'>Properties</NavLink>
                            <div className="nav-button">
                                <button className='py-2 px-[28px] rounded bg-[#F9A51A] text-white text-[16px]'>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default HeaderSecond;