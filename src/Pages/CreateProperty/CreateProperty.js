import React from 'react';
import './CreateProperty.css'

const CreateProperty = () => {

    const handleProperty = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const totalPrice = event.target.totalPrice.value;
        const rating = event.target.rating.value;
        const imgUrl = event.target.imgUrl.value;
        const submit = { name, description, totalPrice, rating, imgUrl }
        console.log(submit);
        fetch('url', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
        })
    }

    return (

        <div className='home-main justify-center h-screen flex items-center bg-slate-300'>
            <div className="form-contain container max-auto w-auto grid grid-cols">
                <form onSubmit={handleProperty} className='flex flex-col'>
                    <input type="text" name='name' placeholder='name' />
                    <textarea type="text" name='description' placeholder='description' />
                    <div className="price-field flex gap-4">
                        <input type="number" name='price' placeholder='price' />
                        <input type="number" name='totalPrice' placeholder='total price' />
                    </div>
                    <input type="number" name='rating' placeholder='rating' />
                    <input type="text" name='imgUrl' placeholder='image url' />
                    <button className=' w-full py-[22px] bg-[#F9A51A] rounded'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CreateProperty;