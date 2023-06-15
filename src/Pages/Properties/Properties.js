import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

const Properties = () => {
    const [property, setProperty] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/createproperty')
            .then(res => res.json())
            .then(data => setProperty(data))
    }, [])
    // Google map
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    console.log(property)
    return (
        <div className='container m-auto w-auto'>
            <div className="properties grid grid-cols-4 mt-12 ">
                <div className="properties-items col-start-1 col-end-3">
                    {
                        property.map(item =>
                            <div className=" items-info grid grid-cols-2 gap-4 items-center pb-[42px]" key={item._id}>
                                <div className="item-img">
                                    <img className=' w-[470px] h-[280px] rounded-[8px]' src={item.imgUrl} alt="" />
                                </div>
                                <div className=" ml-5 p-[10px] item-content space-y-2">
                                    <h2 className=' text-[20px] capitalize text-gray-950'>{item.name}</h2>
                                    <p className=' text-[16px] capitalize  text-gray-400'>{item.description}</p>
                                    <div className="price-tag flex">
                                        <div className="price flex  text-gray-400 pr-5">
                                            <h4 className='pr-5 font-light'>$ {item.price}/ night</h4>
                                            <h5>$ {item.totalPrice} Total</h5>
                                        </div>
                                        <div className="rating text-yellow-500 font-bold">
                                            <h6>{item.rating} Stars</h6>
                                        </div>
                                    </div>
                                    <div className="book-button pt-3">
                                        <button className='py-2 px-[28px] rounded bg-[#F9A51A] text-white text-[16px]'>Book now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="properties-map col-start-3 col-end-5 flex justify-center">
                    <div className="google-map-full  rounded-10 w-[650px]">
                        <div className='rounded' style={{ height: '100vh', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            >
                                <AnyReactComponent
                                    lat={59.955413}
                                    lng={30.337844}
                                    text="My Marker"
                                />
                            </GoogleMapReact>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Properties;