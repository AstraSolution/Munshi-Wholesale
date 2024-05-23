
import automotiveTools from "../../../assets/category/automotive-tools.png";
import handTools from "../../../assets/category/hand-tools.png";
import gardenTools from "../../../assets/category/garden-tools.png";


import Button from "../../Shared/Button/Button";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
          <img src={automotiveTools} alt="" className="w-[320px] rounded-br-xl absolute bottom-0 right-0" />
        </div>
        {/* 2nd col */}
        <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow/90 to-brandYellow/90 text-white rounded-xl relative h-[320px] flex items-end hover:scale-110 duration-300">
          <div>
            <div className="mb-4">
              <p className="mb-[2px] text-white">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                Garden Tools
              </p>
              <Link
                state={{ value: "Gardening Tools", type: "category" }}
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
            src={gardenTools}
            alt="Gadget"
            className="w-[320px] absolute rounded-br-xl bottom-0 right-0"
          />
        </div>
        {/* 3rd col */}
        <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/90 to-primary/90 text-white rounded-xl relative h-[320px] flex items-end hover:scale-105 duration-300">
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
                  textColor={"text-primary"}
                />
              </Link>
            </div>
          </div>
          <img
            src={handTools}
            alt="Laptop"
            className="w-[320px] lg:w-[420px] absolute bottom-2 right-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
