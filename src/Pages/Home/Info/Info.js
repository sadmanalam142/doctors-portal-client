import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <div class="card lg:card-side shadow-xl bg-gradient-to-r from-primary to-secondary text-white">
                <figure className='pl-5'><img src={clock} alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title">Opening Hours</h2>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div class="card lg:card-side shadow-xl bg-accent text-white">
                <figure className='pl-5'><img src={marker} alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title">Visit our location</h2>
                    <p>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div class="card lg:card-side shadow-xl bg-gradient-to-r from-primary to-secondary text-white">
                <figure className='pl-5'><img src={phone} alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title">Contact</h2>
                    <p>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default Info;