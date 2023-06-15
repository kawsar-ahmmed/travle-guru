import React from 'react';
import logo from '../../Asstes/logo-w.png'
import logo2 from '../../Asstes/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' absolute left-0 right-0 flex container mx-auto w-auto items-center py-[30px]'>
            <div className=" w-1/4 logo columns-4xl">
                <img className=' h-14' src={logo} alt="" />
            </div>
            <div className=" w-3/4 header-item items-center flex justify-between">
                <div className="search-bar w-1/3 px-2 py-1 rounded-[6px] border border-white-200 bg-[#fff] bg-opacity-20">
                    <FontAwesomeIcon className=' text-[14] text-white px-[10px]' icon={faMagnifyingGlass} />
                    <input className=' text-white focus-visible:outline-none focus:outline-none w-[90%] bg-transparent placeholder:text-white text-[14px]' type="search" placeholder='Search your Destination...' />
                </div>
                <div className="menu-main">
                    <nav className=' text-white flex space-x-20 items-center'>
                        <NavLink to='/home'>Home</NavLink>
                        <NavLink to='/destination'>Destination</NavLink>
                        <NavLink to='/create-property'>Add Property</NavLink>
                        <NavLink to='/properties'>Properties</NavLink>
                        <div className="nav-button">
                            <button className='py-2 px-[28px] rounded bg-[#F9A51A] text-white text-[16px]'>Login</button>
                        </div>
                    </nav>
                </div>
            </div>

        </div>

    );
};

export default Header;