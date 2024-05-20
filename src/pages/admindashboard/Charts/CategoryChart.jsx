import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryChart = ({ categories }) => {
  const [topCategories, setTopCategories] = useState([]);

  useEffect(() => {
    if (categories && categories.length > 0) {
      setTopCategories(categories.slice(0, 10));
    }
  }, [categories]);
  const defaultData = [
    { name: 'Power Tools', value: 10 },
    { name: 'Hand Tools', value: 20 },
    { name: 'Gardening Tools', value: 30 },
    { name: 'Electrical Equipment', value: 40 },
    { name: 'Safety Equipment', value: 50 },
    { name: 'Electrical Equipment', value: 60 },
    { name: 'Construction Equipment', value: 70 },
    { name: 'Automotive Tools', value: 80 },
    { name: 'Measuring & Layout Tools', value: 90 },
    { name: 'Woodworking Tools', value: 100 },
  ];

  const data = topCategories.length > 0 ? topCategories : defaultData;

  const chartData = {
    labels: data.map((category) => category.name),
    datasets: [
      {
        label: 'Sells Percent',
        data: data.map((category) => category.value),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(199, 199, 199, 0.2)',
          'rgba(83, 102, 255, 0.2)',
          'rgba(255, 193, 7, 0.2)',
          'rgba(0, 255, 127, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(199, 199, 199, 1)',
          'rgba(83, 102, 255, 1)',
          'rgba(255, 193, 7, 1)',
          'rgba(0, 255, 127, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <h2 className='text-black text-lg font-medium text-center'>Top 10 Categories</h2>
      <Doughnut data={chartData} />
    </div>
  );
};


export default CategoryChart;
