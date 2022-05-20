import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{background: `url(${appointment})`}} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-2 py-2'>
                <h1 className='text-primary uppercase font-bold'>Appointment</h1>
                <h1 className='text-3xl text-white'>Make an appointment Today</h1>
                <p className='text-white my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae magni, deserunt tempore error doloremque recusandae delectus! Sunt earum amet non deserunt mollitia, rerum nulla necessitatibus odit officiis odio error.</p>
            <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;