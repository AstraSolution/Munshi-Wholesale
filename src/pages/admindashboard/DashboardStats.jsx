import { motion } from "framer-motion";
import { FaCartArrowDown, FaUsers, FaClipboardList } from "react-icons/fa";

const categories = [
  {
    _id: 1,
    categoryName: "Total Orders",
    categoryDescription: "Description for Category 1",
    bgColorCode: "#1F2937",
    
    categoryImage: <FaClipboardList  className="text-4xl lg:mt-1 mt-3" />,
  },
  {
    _id: 2,
    categoryName: "Total users",
    categoryDescription: "Description for Category 2",
    bgColorCode: "#1F2937",
    categoryImage: <FaUsers  className="text-4xl lg:mt-2 mt-3" />,
  },
  {
    _id: 3,
    categoryName: "Total sales",
    categoryDescription: "Description for Category 3",
    bgColorCode: "#1F2937",
    categoryImage: <FaCartArrowDown className="text-4xl lg:mt-1  mt-3" />,
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
            className="flex justify-evenly rounded-3xl  pt-8 pb-8"
            style={{ backgroundColor: `${category?.bgColorCode}` }}
          >
            <div className="">
              {typeof category.categoryImage === 'string' ? (
                <img
                  src={category.categoryImage}
                  alt={category.categoryName}
                  className=""
                />
              ) : (
                category.categoryImage
              )}
            </div>
            <div className="w-[40%]">
              <h3 className="text-xl font-bold">{category.categoryName}</h3>
              <h3 className="mb-2 text-xs">{category.categoryDescription}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;
