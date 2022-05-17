import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyAppointments = () => {
    const [user] = useAuthState(auth);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data))
        }
    }, [user])
    return (
        <div class="overflow-x-auto w-3/4 mx-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
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