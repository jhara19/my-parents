import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Product from "./Product";
import Modal from './Modal';
import Loader from '../Shared/Loader';

const Products = () => {
    const [booking, setBooking] = useState(null);
    const id = useParams();
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products/${id.id}`);
            const data = await res.json();
            return data;

        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-4 md:gap-x-10 gap-y-8 justify-center">
                {
                    products.map(product => <Product

                        key={product._id}
                        product={product}
                        setBooking={setBooking}
                    ></Product>)
                }
            </div>
            {
                booking &&
                <Modal
                    booking={booking}
                    setBooking={setBooking}
                ></Modal>}
        </div>
    );
};

export default Products;

