import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rerum eveniet aspernatur omnis vitae adipisci eum aliquam doloremque nemo perspiciatis?</p>
            </div>
            <div className='flex items-center'>
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ml-5 mb-1">
                        <img src={review.img} alt="" />
                    </div>
                </div>
                <div className='mx-3'>
                    <h1 className='font-bold'>{review.name}</h1>
                    <h1>{review.location}</h1>
                </div>
            </div>
        </div>
    );
};

export default Review;