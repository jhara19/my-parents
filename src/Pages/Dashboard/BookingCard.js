import React from 'react';

const OrderCard = ({ booking }) => {
    const { image_url, product_name, original_price, phone, location } = booking;
    return (
        <div>
            <div className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
                <img src={image_url} loading="lazy" alt="" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
            </div>
            <div>
                <h1 className="text-gray-800 lg:text-2xl transition duration-100 mb-1">{product_name}</h1>
                <div className="flex items-end gap-2">
                    <span className="text-gray-800 lg:text-lg font-bold">${original_price}</span>
                </div>
            </div>
            <div className="mt-4 flex items-center gap-8 justify-between text-sm">
                <div>
                    <p className="text-gray-500">Location</p>
                    <p className="font-medium">{location}</p>
                </div>
                <div>
                    <p className="text-gray-500">Price</p>
                    <p className="font-medium">{original_price}</p>
                </div>
                <div>
                    <p className="text-gray-500">Mobile</p>
                    <p className="font-medium">{phone}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;