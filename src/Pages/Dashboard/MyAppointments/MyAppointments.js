import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyAppointments = () => {
    const [user] = useAuthState(auth);
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://doctors-portal-nh09.onrender.com/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => setAppointments(data))
        }
    }, [user])
    return (
        <div class="overflow-x-auto w-3/4 mx-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Service Name</th>
                        <th>Date</th>
                        <th>time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((a, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{a.patientName}</td>
                            <td>{a.treatment}</td>
                            <td>{a.date}</td>
                            <td>{a.slot}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointments;