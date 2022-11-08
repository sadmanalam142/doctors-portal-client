import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import BookingAppointment from '../BookingAppointment/BookingAppointment';
import Service from '../Service/Service';

const AvailableAppointments = ({ date }) => {
    // const [services, setSrvices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const bookingDate = format(date, 'PP');
    const {data: services, isLoading, refetch} = useQuery(['available', bookingDate], () => fetch(`https://doctors-portal-nh09.onrender.com/available?date=${bookingDate}`)
            .then(res => res.json()))

            if(isLoading){
                return <Loading></Loading>;
            }

    // useEffect(() => {
    //     fetch(`https://doctors-portal-nh09.onrender.com/available?date=${bookingDate}`)
    //         .then(res => res.json())
    //         .then(data => setSrvices(data))
    // }, [bookingDate]);
    return (
        <div>
            <div>
                <h1 className='text-center text-secondary font-semibold'>Available Appointments on {format(date, 'PP')}</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            <div>
                {treatment && <BookingAppointment date={date} treatment={treatment} setTreatment={setTreatment} refetch={refetch}></BookingAppointment>}
            </div>
        </div>
    );
};

export default AvailableAppointments;