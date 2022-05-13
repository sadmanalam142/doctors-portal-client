import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingAppointment from '../BookingAppointment/BookingAppointment';
import Service from '../Service/Service';

const AvailableAppointments = ({ date }) => {
    const [services, setSrvices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setSrvices(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className='text-center text-secondary font-semibold'>Available Appointments on {format(date, 'PP')}</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            <div>
                {treatment && <BookingAppointment date={date} treatment={treatment} setTreatment={setTreatment}></BookingAppointment>}
            </div>
        </div>
    );
};

export default AvailableAppointments;