import { motion } from "framer-motion";


const categories = [
  {
    _id: 1,
    categoryName: "Total Orders",
    categoryDescription: "Description for Category 1",
    bgColorCode: "#ff0000",
    linkColorCode: "#00ff00",
    categoryImage: "https://via.placeholder.com/150", 
  },
  {
    _id: 2,
    categoryName: "Total users",
    categoryDescription: "Description for Category 2",
    bgColorCode: "#00ff00",
    linkColorCode: "#0000ff",
    categoryImage: "https://via.placeholder.com/150", 
  },
  {
    _id: 2,
    categoryName: "Total sales",
    categoryDescription: "Description for Category 2",
    bgColorCode: "#00ff00",
    linkColorCode: "#0000ff",
    categoryImage: "https://via.placeholder.com/150", 
  },
  
];

const DashboardStats = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
        {categories.map((category) => (
          <motion.div
            key={category._id}
            whileHover={{ scale: 1.1 }}
            className="flex items-center rounded-xl"
            style={{ backgroundColor: `${category?.bgColorCode}` }}
          >
            <div className="w-[40%]">
              <img
                src={category?.categoryImage}
                alt={category?.categoryName}
                className="w-[120px] h-[120px]"
              />
            </div>
            <div className="w-[70%]">
              <h3 className="text-xl font-bold uppercase font-oswald">
                {category?.categoryName}
              </h3>
              <h3 className="mb-2 text-xs">{category?.categoryDescription}</h3>
             
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;
