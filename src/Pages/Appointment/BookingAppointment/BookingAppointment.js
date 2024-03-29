import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const BookingAppointment = ({ date, treatment, setTreatment, refetch }) => {
    const {_id, name, slots } = treatment;
    const [user] = useAuthState(auth);

    const handleSubmit = event => {
        event.preventDefault();
        
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: format(date, 'PP'),
            slot: event.target.slot.value,
            patient: user.email,
            patientName: user.displayName,
            address: event.target.address.value,
            phone: event.target.number.value
        };

        fetch('https://doctors-portal-nh09.onrender.com/booking', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.success){
                toast(`Appointment set on, ${booking.date} at ${booking.slot}`);
            }
            else{
                toast.error(`Already have an appointment on, ${data.booking.date} at ${data.booking.slot}`)
            }
            refetch();
            setTreatment(null);
        })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option 
                                    key={slot.index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" value={user?.displayName} placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" value={user?.email} placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="address" placeholder="Your Address" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="number" placeholder="Your Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingAppointment;