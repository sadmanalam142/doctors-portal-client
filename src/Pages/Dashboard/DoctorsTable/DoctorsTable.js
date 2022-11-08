import React from 'react';
import { toast } from 'react-toastify';

const DoctorsTable = ({ doctor, index, refetch }) => {
    const { img, name, speciality, email } = doctor;

    const handleDelete = email => {
        fetch(`https://doctors-portal-nh09.onrender.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Successfully deleted doctor: ${name}`);
                    refetch();
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-16 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td><button onClick={() => handleDelete(email)} class="btn btn-square btn-error">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button></td>
        </tr>
    );
};

export default DoctorsTable;