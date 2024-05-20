import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const BrandChart = () => {
  const chartRef = useRef(null);

  const brands = [
    { name: "DeWalt", value: 30 },
    { name: "Milwaukee", value: 25 },
    { name: "Makita", value: 20 },
    { name: "Bosch ", value: 15 },
    { name: "Ridgid ", value: 10 },
    { name: "Craftsman ", value: 5 },
    { name: "Husqvarna ", value: 35 },
    { name: "Stanley ", value: 40 },
    { name: "Hitachi ", value: 45 },
    { name: "Black & Decker", value: 50 },
    { name: "Ryobi ", value: 55 },
  ];

  const topBrands = brands.slice(0, 10);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const labels = topBrands.map((brand) => brand.name);
    const dataValues = topBrands.map((brand) => brand.value);

    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Brand Values",
            data: dataValues,
            backgroundColor: "rgba(254,231,109)",
            borderColor: "rgb(254,231,109)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          tooltip: {
            enabled: true,
          },
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [topBrands]);

  return (
    <div>
      <h1 className="text-black font-medium text-center">Top 10 Brands</h1>
      <canvas ref={chartRef} height="200"></canvas>
    </div>
  );
};

export default BrandChart;
