import React from 'react';
import Order_Bar_Chart from './Order_Bar_Chart';
import Header from './Header';



const User_Dashboard_Home = () => {
    return (
        <div className=' mx-auto px-1 text-gray-600'>
            <Header></Header>
            
            <Order_Bar_Chart></Order_Bar_Chart>
        </div>
    );
};

export default User_Dashboard_Home;