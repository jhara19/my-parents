import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContexts';
import Loader from '../Shared/Loader';
import BookingCard from './BookingCard';

const MyOrder = () => {

  const {user} = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const {data: bookings = [], isLoading} = useQuery({
    queryKey: ['bookings',user?.email],
    queryFn: async () => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
  });

  if(isLoading){
     return <Loader></Loader>
  }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 py-8 px-4'>
          {
            bookings.map(booking => <BookingCard
             key={booking._id}
             booking={booking}
            ></BookingCard>)
          }
        </div>
    );
};

export default MyOrder;