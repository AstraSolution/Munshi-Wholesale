import React, { useState, useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import useOrders from '../../../Hooks/useOrders';

const Order_Bar_Chart = () => {

  const [localTime, setLocalTime] = useState(new Date());

  const [orderProduct] = useOrders();
  const orderItems = orderProduct?.myOrders;

  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    if (orderItems) {
      const statusCounts = orderItems.reduce((acc, order) => {
        if (order.status === 'Completed' || order.status === 'Cancelled' || order.status === 'Processing') {
          acc[order.status] = (acc[order.status] || 0) + 1;
        }
        return acc;
      }, {});

      const newData = Object.entries(statusCounts)?.map(([status, count]) => ({
        title: status,
        value: count,
        color: getStatusColor(status),
      }));

      setPieChartData(newData);
    }
  }, [orderItems]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return '#4CAF50';
      case 'Processing':
        return '#FFC107';
      case 'Cancelled':
        return '#F44336';
      default:
        return '#000000'; // default color
    }
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setLocalTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);




  return (
    <>
      <div className='py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='bg-white rounded-md shadow-md px-10 pb-20'>
          <h1 className='text-lg font-semibold pt-4'> Order Status</h1>
          <PieChart
            data={pieChartData}
            label={({ dataEntry }) =>
              dataEntry.value > 0 ? `${dataEntry.title}: ${dataEntry.value}` : ''
            }
            labelStyle={{
              fontSize: '4px',
              fontFamily: 'Montserrat',
              fill: '#ffffff',
            }}
            style={{ width: '100%', height: '100%' }}
            animate={true}
            animationDuration={500}
            radius={50}
            startAngle={0}
            totalValue={pieChartData?.reduce((acc, cur) => acc + cur.value, 0)}
            background={{ color: '#ddd' }}
            segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
          />
          <div className='flex justify-center'>
            {pieChartData?.map((data, index) => (
              <div key={index} className='flex items-center rounded-md px-1 py-2 lg:mr-2 mr-1'>
                <span
                  className='w-4 h-4 mr-1 lg:mr-2 rounded-full'
                  style={{ backgroundColor: data?.color }}
                ></span>
                <span className='text-sm'>{data?.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className=''></div>
      </div>

      {/* Footer */}
      <footer className='bg-gray-200 py-4'>
        <div className='container mx-auto text-center text-gray-600'>
          <p>&copy; {localTime.toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })} User Dashboard. All rights reserved.</p>
        </div>
      </footer>



    </>
  );
};

export default Order_Bar_Chart;
