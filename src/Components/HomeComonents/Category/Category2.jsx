

import Image1 from "../../../assets/hero/yellow-chainsaw1.png";
import Image2 from "../../../assets/hero/yellow-drill-1.png";
import Image3 from "../../../assets/hero/yellow-drill-1.png";

import electricalTools from "../../../assets/category/electrical-tools.png";
import safetyEquipments from "../../../assets/category/safety-equipments.png";

import { Link } from "react-router-dom";

import Button from "../../Shared/Button/Button";

const Category2 = () => {
  return (
    <div className="my-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* 1st col */}
        <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br ☐ from-gray-400/90 to-gray-100 text-white rounded-xl relative h-[320px] flex items-end hover:scale-105 duration-300">
          <div>
            <div className="mb-4">
              <p className="mb-[2px] text-white">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                Electrical Equipment
              </p>
              <Link
                state={{ value: "Electrical Equipment", type: "category" }}
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
          <img
            src={electricalTools}
            alt="Gaming"
            className="h-full rounded-r-xl absolute top-1/2 -translate-y-1/2 -right-0"
          />
        </div>
        {/* 2nd col */}
        <div className="py-10 pl-5 bg-gradient-to-br ☐ from-brandGreen/90 to-brandGreen/70 text-white rounded-xl relative h-[320px] flex items-end hover:scale-110 duration-300">
          <div>
            <div className="mb-4">
              <p className="mb-[2px] text-white">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                Safety Equipment
              </p>
              <Link
                state={{ value: "Safety Equipment", type: "category" }}
                to="/shop"
              >
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                />
              </Link>
            </div>
          </div>
          <img src={safetyEquipments} alt="VR" className="w-[320px] absolute bottom-0 right-0" />
        </div>
        {/* 3rd col */}
        <div className="py-10 pl-5 bg-gradient-to-br ☐ from-brandBlue to-brandBlue/90 text-white rounded-xl relative h-[320px] flex items-end hover:scale-110 duration-300">
          <div>
            <div className="mb-4">
              <p className="mb-[2px] text-white">Enjoy</p>
              <p className="text-2xl font-semibold mb-[2px]">With</p>
              <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                Construction Equipment
              </p>
              <Link
                state={{ value: "Construction Equipment", type: "category" }}
                to="/shop"
              >
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                />
              </Link>
            </div>
          </div>
          <img
            src={Image3}
            alt="Gadget"
            className="w-[200px] absolute bottom-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Category2;
