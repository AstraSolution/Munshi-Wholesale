
import Dashboard from './Dashboard';
import { Outlet } from 'react-router-dom';
import Dashboard_Navbar from './Dashboard_Navbar';
import "./Styles/scroll.css"

const Dashboard_Layout = () => {
    return (
       
        <div className="lg:flex bg-gray-200  text-white h-screen lg:overflow-hidden">
            {/* Fixed Dashboard for large devices */}
            <div className="lg:overflow-y-auto scrollbar-style">
                <Dashboard />
            </div>
            <main className="container mx-auto flex-1 px-2 lg:overflow-y-auto">
                {/* Dashboard Navbar */}
                <Dashboard_Navbar />
                <div className='py-2 '>
                    {/* Outlet for rendering nested routes */}
                    <Outlet />
                </div>
            </main>
        </div>


    );
};

export default Dashboard_Layout;