import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddDoctors = () => {
    const { register, handleSubmit, reset } = useForm();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://doctors-portal-nh09.onrender.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const imageStorageKey = '6e3132f0f3a6c9f1553842926178a238';

    const onSubmit = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if(result.success){
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        img: img
                    }
                    fetch('https://doctors-portal-nh09.onrender.com/doctor', {
                        method: 'POST',
                        headers:{
                            'content-type' : 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                    .then(res => res.json())
                    .then(inserted => {
                        if(inserted.insertedId){
                            toast.success('Doctor added successfilly');
                            reset();
                        }
                        else{
                            toast.error('Failed to add the doctor');
                        }
                    })
                }
            })
    };

    return (
        <div>
            <h1 className="text-2xl">Add a new Doctor</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-2/4 mx-auto mt-10 shadow-md shadow-gray-400">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input className='mb-5' type="text" {...register("name", { required: true })} placeholder='name' />

                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" className='mb-5' {...register("email", { required: true })} placeholder='email' />

                <label className="label">
                    <span className="label-text">Speciality</span>
                </label>
                <select {...register('speciality')} class="select w-full max-w-xs mb-5">
                    {
                        services.map(service => <option
                            key={service._id}
                            value={service.name}
                        >{service.name}</option>)
                    }
                </select>

                <label className="label">
                    <span className="label-text">Photo</span>
                </label>
                <input type="file" className='mb-5' {...register("image", { required: true })} />

                <input className='btn btn-primary mt-5 w-2/4 mx-auto' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddDoctors;