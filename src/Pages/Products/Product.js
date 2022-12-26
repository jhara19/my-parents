import React from 'react';

const Product = ({ product, setBooking }) => {
    const { product_name, original_price, resale_price, location, mobile, PurchaseYear, condition, image_url} = product;
    return (
        <div>
            <h1>Products</h1>
            <div>
                <div className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
                    <img src={image_url} loading="lazy" alt="" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
                </div>
                <div>
                    <h1 className="text-gray-800 lg:text-3xl transition duration-100 mb-1">{product_name}</h1>
                    <div className="flex items-end gap-2">
                        <span className="text-gray-800 lg:text-lg font-bold">${resale_price}</span>
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-8 justify-between text-sm">
                    <div>
                        <p className="text-gray-500">Location</p>
                        <p className="font-medium">{location}</p>
                    </div>
                    <div>
                        <p className="text-gray-500">Condition</p>
                        <p className="font-medium">{condition}</p>
                    </div>
                    <div>                                                 <p className="text-gray-500">User Year</p>
                        <p className="font-medium">{PurchaseYear}</p>
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-8 justify-between text-sm">
                    <div>
                        <p className="text-gray-500">Original Price</p>
                        <p className="font-medium">{original_price}</p>
                    </div>
                    <div>
                        <p className="text-gray-500">Mobile</p>
                        <p className="font-medium">{mobile}</p>
                    </div>                                             <div>
                    </div>
                </div>
                <div className="mt-4 text-sm">
                    <div>
                        {/* <label
                            htmlFor="my-modal-3"
                            //onClick={() => setBooking(product)}
                            className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                        >
                            <span
                                className="absolute inset-0 border border-gray-600 group-active:border-gray-500"
                            ></span>
                            <button
                                className="btn btn-wide block border border-gray-600 bg-gray-600 px-12 py-3 transition-transform active:border-gray-500 active:bg-gray-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                            >
                                Book Now
                            </button>
                            
                        </label> */}

                        {/* The button to open modal */}

                        <label 
                        htmlFor="booking-modal" 
                        onClick={() => setBooking(product)}
                        className="btn btn-lg rounded-0 bg-violet-500">Book Now</label>

                    </div>
                </div>
    
            </div>
        </div>
    );
};

export default Product;

