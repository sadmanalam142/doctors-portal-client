import React from 'react';

const Service = ({ service, setTreatment }) => {
    const {name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <p className={`${slots.length < 1 && 'text-red-500'}`}> {slots[0]} {slots.length < 1 && 'No Appointment Available'}</p>
                <p className={`uppercase tex-sm ${slots.length < 1 && 'text-accent'}`}>{slots.length === 0 ? '' : slots.length} {slots.length < 1 ? 'try another day' : slots.length >= 2 ? 'spaces available' : 'space available'} </p>
                <div className="card-actions justify-center">
                    <label onClick={()=> setTreatment(service)} disabled={slots.length === 0} className="btn btn-secondary text-white" for="booking-modal" class="btn btn-secondary text-white bg-gradient-to-r from-primary to-secondary">Book Appointmen</label>
                </div>
            </div>
        </div>
    );
};

export default Service;