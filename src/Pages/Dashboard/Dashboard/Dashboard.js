import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="second-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content text-center">
                {/* <!-- Page content here --> */}
                <h1 className='text-2xl text-primary'>Welcome to your Dashboard</h1>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="second-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><Link to='/dashboard/reviews'>My Reviews</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;