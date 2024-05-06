import { motion } from "framer-motion";


const categories = [
  {
    _id: 1,
    categoryName: "Total Orders",
    categoryDescription: 10000,
    bgColorCode: "#1F2937",
    
    categoryImage: 'https://i.ibb.co/8XPQ2Gn/iconmonstr-product-3-240-removebg-preview.png',
  },
  {
    _id: 2,
    categoryName: "Total users",
    categoryDescription: 10000,
    bgColorCode: "#1F2937",
    categoryImage: 'https://i.ibb.co/xGQfNW2/customer.png',
  },
  {
    _id: 3,
    categoryName: "Total sales",
    categoryDescription: 10000,
    bgColorCode: "#1F2937",
    categoryImage: 'https://i.ibb.co/W05p5Zt/shopping-cart.png',
  },
  {
    _id: 3,
    categoryName: "All Products",
    categoryDescription: 10000,
    bgColorCode: "#1F2937",
    categoryImage: 'https://i.ibb.co/PZPVNmx/iconmonstr-product-3-240.png',
  },
];

const DashboardStats = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 text-white">
        {categories.map((category) => (
          <motion.div
            key={category._id}
            whileHover={{ scale: 1.1 }}
            className=" rounded-lg  "
            style={{ backgroundColor: `${category?.bgColorCode}` }}
          >
            <div className="ml-3 mb-3">
          
                <img
                  src={category.categoryImage}
                  alt={category.categoryName}
                  className="h-10 mt-3 ml-28 lg:ml-0"
                />
             
            </div>
            <div className="text-center lg:text-left lg:ml-3">
              <h3 className="text-xl font-bold">{category.categoryName}</h3>
              <h3 className="mb-2 text-lg font-normal">$ {category.categoryDescription}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;
