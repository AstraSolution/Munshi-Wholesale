import Chart from "react-apexcharts";
import useAllBrand from "../../../Hooks/useAllBrand";
const BrandChart = () => {
  const { brands, brandsLoading } = useAllBrand();
  const topBrands = brands.slice(0, 10);
  const chartData = {
    series: [
      {
        name: "Top Brands",
        data: topBrands.map((brand, index) => ({
          x: brand.brandName,
          y: index + 1,
        })),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        background: '#f4f4f4', 
      },
      colors: ["#008FFB"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 10,
        curve: "smooth",
      },
      xaxis: {
        type: "category",
        labels: {
          style: {
            colors: "black",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "black",
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          gradientToColors: ["#FDD835"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      markers: {
        size: 5,
        opacity: 0.9,
        colors: ["#FFA41B"],
        strokeColor: "",
        strokeWidth: 2,
        hover: {
          size: 7,
          sizeOffset: 3,
        },
      },
      tooltip: {
        enabled: true,
        shared: true,
        followCursor: true,
      },
      theme: {
        mode: "dark",
      },
    },
  };

  return (
    <div>
      <h2 className="text-center mt-4 mb-5 text-black text-2xl font-bold">
        Top 10 Brands
      </h2>
      {brandsLoading ? (
        <p>Loading...</p>
      ) : (

      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={450}
        
      />
    )}
    </div>
  );
};

export default BrandChart;
