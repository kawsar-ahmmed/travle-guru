import React from 'react';
import './CreateProperty.css'
import { useParams } from 'react-router-dom';

const CreateProperty = () => {
    const params = useParams();

    const handleProperty = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const totalPrice = event.target.totalPrice.value;
        const rating = event.target.rating.value;
        const imgUrl = event.target.imgUrl.value;
        const property = { name, description, totalPrice, rating, imgUrl, price };
        console.log(property);
        // url
        const url = `http://localhost:5001/createproperty`;
        fetch(url, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(property)
        })
            .then(res => res.json())
            .then(data => {
                alert('User Added Successfully ')
                console.log('success', data)
                event.target.reset();
            })
    }
    return (
        <div className='home-main justify-center h-screen flex items-center bg-slate-300'>
            <div className="form-contain container max-auto w-auto grid grid-cols">
                <form onSubmit={handleProperty} className='flex flex-col'>
                    <input type="text" name='name' placeholder='name' required />
                    <textarea type="text" name='description' placeholder='description' required />
                    <div className="price-field flex gap-4">
                        <input className=' pr-[20px]' type="number" name="price" placeholder="$ Price" required inputMode="numeric" />
                        <input className=' pr-[20px]' type="number" name="totalPrice" placeholder="Total Price" required />
                    </div>
                    <input type="number" name='rating' placeholder='rating' min="1" max="5" required />
                    <input type="text" name='imgUrl' placeholder='image url' required />
                    <button className=' w-full py-[22px] bg-[#F9A51A] rounded'>Submit</button>
                </form>


            </div>
        </div>
    );
};

export default CreateProperty;