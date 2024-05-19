// import Image1 from "../../../assets/category/earphone.png";
// import Image2 from "../../../assets/category/watch.png";
// import Image3 from "../../../assets/category/macbook.png";

import Image1 from "../../../assets/hero/yellow-drill-1.png";
import Image2 from "../../../assets/hero/yellow-drill-1.png";
import Image3 from "../../../assets/hero/yellow-chainsaw1.png";

import Button from "../../Shared/Button/Button";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* 1st col */}
        <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-xl relative h-[320px] flex items-end hover:scale-110 duration-300">
          <div>
            <div className="mb-4">
              <p className="mb-[2px] text-gray-400">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                Automotive Tools
              </p>
              <Link
                state={{ value: "Automotive Tools", type: "category" }}
                to="/shop"
              >
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </Link>
            </div>
          </div>
          <img src={Image1} alt="" className="w-[320px] absolute bottom-0" />
        </div>
        {/* 2nd col */}
        <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow/90 to-brandYellow/90 text-white rounded-xl relative h-[320px] flex items-end hover:scale-110 duration-300">
          <div>
            <div className="mb-4">
              <p className="mb-[2px] text-white">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                Hand Tools
              </p>
              <Link
                state={{ value: "Hand Tools", type: "category" }}
                to="/shop"
              >
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow"}
                />
              </Link>
            </div>
          </div>
          <img
            src={Image2}
            alt="Gadget"
            className="w-[320px] absolute -right-4 lg:top-[40px]"
          />
        </div>
        {/* 3rd col */}
        <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/90 to-primary/90 text-white rounded-xl relative h-[320px] flex items-end hover:scale-105 duration-300">
          <div>
            <div className="mb-4">
              <p className="mb-[2px] text-white">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                Gardening Tools
              </p>
              <Link
                state={{ value: "Gardening Tools", type: "category" }}
                to="/shop"
              >
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </Link>
            </div>
          </div>
          <img
            src={Image3}
            alt="Laptop"
            className="w-[320px] absolute top-1/2 -translate-y-1/2 -right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
