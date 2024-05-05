
import Dashboard from './Dashboard';
import { Outlet } from 'react-router-dom';
import Dashboard_Navbar from './Dashboard_Navbar';
import "./Styles/scroll.css"

const Dashboard_Layout = () => {
    return (
        // <div className="lg:flex gap-1 bg-black text-white  ">
        //     <Dashboard></Dashboard>
        //     <main className=" container mx-auto flex-1 lg:px-2 px-1 ">
        //         <Dashboard_Navbar></Dashboard_Navbar>
        //         <div className='py-2 '>
        //             <Outlet></Outlet>
        //         </div>
        //     </main>
        // </div>

        // <div className="lg:flex bg-black text-white h-screen lg:overflow-hidden">
        //     {/* Fixed Dashboard for large devices */}
        //     <div className="lg:overflow-y-auto">
        //         <Dashboard />
        //     </div>
        //     <main className="container mx-auto flex-1 px-2 lg:overflow-y-auto">
        //         {/* Dashboard Navbar */}
        //         <Dashboard_Navbar />
        //         <div className='py-2'>
        //             {/* Outlet for rendering nested routes */}
        //             <Outlet />
        //         </div>
        //     </main>
        // </div>


        <div className="lg:flex  text-white h-screen lg:overflow-hidden">
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