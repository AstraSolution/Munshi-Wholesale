import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import RecentActivityFeed from './RecentActivityFee';

const Order_Bar_Chart = () => {

  const initialPieChartData = [
    { title: 'Completed', value: 30, color: '#4CAF50' },
    { title: 'Processing', value: 40, color: '#FFC107' },
    { title: 'Cancelled', value: 20, color: '#F44336' },
  ];


  const [pieChartData, setPieChartData] = useState(initialPieChartData);

  const updatePieChartData = () => {
    // Example: Update data values
    const newData = [
      { title: 'Completed', value: Math.floor(Math.random() * 50), color: '#4CAF50' },
      { title: 'Processing', value: Math.floor(Math.random() * 50), color: '#FFC107' },
      { title: 'Cancelled', value: Math.floor(Math.random() * 50), color: '#F44336' },
    ];
    setPieChartData(newData);
  };

  return (
    <>
  
      <div className='py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='bg-white rounded-md shadow-md px-10 pb-20 '>
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
          <div className="flex justify-center">
            {pieChartData?.map((data, index) => (
              <div key={index} className="flex items-center  rounded-md px-1 py-2 lg:mr-2 mr-1">
                <span className="w-4 h-4 mr-1 lg:mr-2 rounded-full" style={{ backgroundColor: data?.color }}></span>
                <span className="text-sm">{data?.title}</span>
              </div>
            ))}
          </div>

        </div>

        <div className=''>
          {/* <RecentActivityFeed></RecentActivityFeed> */}
        </div>
      </div>



      {/* Footer */}
      <footer className="bg-gray-200 py-4">
          <div className="container mx-auto text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} User Dashboard. All rights reserved.</p>
          </div>
        </footer>
     
    </>
  );
};

export default Order_Bar_Chart;
