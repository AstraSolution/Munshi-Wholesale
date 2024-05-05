import { PieChart } from "react-minimal-pie-chart";
import useAllCategory from "../../../Hooks/useAllCategory";

const CategoryChart = () => {
  const { categories, categoryLoading } = useAllCategory();
  const topCategories = categories?.slice(0, 10);

  const generateRandomColor = () => {
    let color = "#";
    const letters = "0123456789ABCDEF";
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 15)];
    }
    if (color === "#000000") {
      return generateRandomColor();
    }
    return color;
  };

  const data = topCategories?.map((category) => ({
    title: category?.categoryName,
    value: 1,
    color: generateRandomColor(), 
  }));

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2 className="text-center mt-4 mb-5 text-black text-2xl font-bold">Top 10 Categories</h2>
      {categoryLoading ? (
        <p>Loading...</p>
      ) : (
        <PieChart
          data={data}
          label={({ dataEntry }) => `${dataEntry?.title}`}
          labelPosition={70}
          labelStyle={{
            fontSize:"1.9px", 
            fontFamily: "sans-serif",
            fill: "#ffffff", 
          }}
          animate={true}
          animationDuration={500}
        />
      )}
    </div>
  );
};

export default CategoryChart;
