import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/UserContexts';

const Modal = ({ product }) => {
    const { product_name, price, image_url } = product;

    const { user } = useContext(AuthContext)

    const handleBooking = (e) => {
        const form = e.target;
        const address = form.address.value;
        const number = form.number.value;

        const addProduct = {
            address: address,
            number: number,
            product_name: product_name,
            price: price,
            image_url: image_url,
            email: user.email
        }

        console.log(addProduct)

        fetch("https://orbit-zone.vercel.app/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addProduct)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success("Product Booking Successfully");
            });
    }


    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking}>
                        <div className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3 my-6">
                            <img src={image_url} loading="lazy" alt="" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
                        </div>
                        <div>
                            <h1 className="text-gray-800 lg:text-2xl transition duration-100 mb-1">{product_name}</h1>
                            <div className="flex items-end gap-2">
                                <span className="text-gray-800 lg:text-lg font-bold">${price}</span>
                            </div>
                        </div>
                        <div className="form-control w-full max-w-xs my-4">
                            <input name='number' type="number" placeholder="Your Number" className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className="form-control w-full max-w-xs my-4">
                            <input name='address' type="text" placeholder="Your Address" className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <button type='submit' className='btn'>Book Now</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Modal;