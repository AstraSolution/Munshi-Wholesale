import React from 'react';
import Dashboard from './Dashboard';
import { Outlet } from 'react-router-dom';
import Dashboard_Navbar from './Dashboard_Navbar';

const Dashboard_Layout = () => {
    return (
        <div className="lg:flex gap-1 bg-black text-white  ">
            <Dashboard></Dashboard>
            <main className=" container mx-auto flex-1 lg:px-2 px-1 ">
                <Dashboard_Navbar></Dashboard_Navbar>
                <div className='py-2 '>
                    <Outlet></Outlet>
                </div>
            </main>
        </div>
    );
};

export default Dashboard_Layout;