import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import UserTable from '../UserTable/UserTable';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://doctors-portal-nh09.onrender.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Admin Control</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <UserTable
                            key={user._id}
                            user={user}
                            refetch={refetch}
                        ></UserTable>)
                    }
                </tbody>
            </table>
        </div>
    )
};

export default Users;