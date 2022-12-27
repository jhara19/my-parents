import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContexts';

const Modal = ({booking,setBooking}) => {
    const { product_name, original_price, image_url} = booking;
     const {user} = useContext(AuthContext)

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const location = form.location.value;
    const phone = form.phone.value;
    //console.log(name, email, location, phone);
    const booking = {
        product_name,
        original_price,
        image_url,
        name,
        email,
        location,
        phone
    }
    
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
        method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                alert("Product Booking Successfully");
            });

    //setBooking(null);
  }

    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product_name}</h3>

                   <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-6">
                   <div className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3 my-6">
                            <img src={image_url} loading="lazy" alt="" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
                        </div>
                        <div>
                            <h1 className="text-gray-800 lg:text-2xl transition duration-100 mb-1">{product_name}</h1>
                            <div className="flex items-end gap-2">
                                <span className="text-gray-800 lg:text-lg font-bold">${original_price}</span>
                            </div>
                        </div>
                       <input type="text" name='name' defaultValue={user?.displayName} disabled placeholder="Type Name" className="input w-full input-bordered" />
                       <input type="email" name='email' defaultValue={user?.email} disabled placeholder="Type Your Email" className="input w-full input-bordered" />
                       <input type="text" name='location' placeholder="Type Your Location" className="input w-full input-bordered" />
                       <input type="text" name='phone' placeholder="Type Your Phone Number" className="input w-full input-bordered" />
                       <input className='w-full max-w-xs btn btn-success' type="submit" value="Submit" />
                   </form>
                </div>
            </div>
        </>
    );
};

export default Modal;

//72.6-8 modal practice

