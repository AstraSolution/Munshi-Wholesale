import { useState } from "react";
import ProductCard from "../../Components/Shared/ProductCard/ProductCard";
import SectionBanner from "../../Components/Shared/SectionBanner/SectionBanner";
import { FaSortDown } from "react-icons/fa";

export default function Shop() {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);

  const categories = [
    {
      _id: 1,
      categoryName: "category-1",
    },
    {
      _id: 2,
      categoryName: "category-2",
    },
    {
      _id: 3,
      categoryName: "category-3",
    },
    {
      _id: 4,
      categoryName: "category-4",
    },
    {
      _id: 5,
      categoryName: "category-5",
    },
  ];

  const brands = [
    {
      _id: 1,
      brandName: "Brand-1",
    },
    {
      _id: 2,
      brandName: "Brand-2",
    },
    {
      _id: 3,
      brandName: "Brand-3",
    },
    {
      _id: 4,
      brandName: "Brand-4",
    },
    {
      _id: 5,
      brandName: "Brand-5",
    },
  ];

  const colors = [
    {
      id: 1,
      name: "Red",
    },
    {
      id: 2,
      name: "Blue",
    },
    {
      id: 3,
      name: "Yellow",
    },
  ];

  const defaultCategoriesCount = 4;
  const visibleCategories = showAllCategories
    ? categories
    : categories.slice(0, defaultCategoriesCount);

  const defaultBrandsCount = 4;
  const visibleBrands = showAllBrands
    ? brands
    : brands.slice(0, defaultBrandsCount);

  return (
    <div>
      <SectionBanner title={"Collection"}></SectionBanner>

      <div className="flex justify-between items-center px-5 lg:px-10 my-10">
        <div className="relative max-w-sm">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 w-full rounded-l-lg text-lg focus:outline-none border-[1px] border-gray-300"
            />
            <button
              type="submit"
              className="bg-black lg:bg-yellow-300 text-white lg:text-black py-2 px-3 rounded-r-lg text-lg font-semibold border-[1px] border-yellow-400"
            >
              Search
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <h3 className="text-lg">Sort by</h3>
          <div className="flex gap-8 py-2 px-5 bg-yellow-300 rounded-full">
            <p className="text-lg">Featured</p>
            <p>
              <FaSortDown className="block" />
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-5 px-5 lg:px-10">
          <div className="w-1/4 flex flex-col">
            {/* category section start */}
            <div className="py-3 px-0 md:px-4">
              <h2 className="text-xs md:text-base lg:text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">
                Filter by category
              </h2>

              <div className="flex flex-col gap-3 my-3">
                {visibleCategories.map((category) => (
                  <label
                    key={category?._id}
                    className="inline-flex items-center"
                  >
                    <input
                      id={category?.categoryName}
                      type="checkbox"
                      className="form-checkbox h-5 w-5"
                    />
                    <span className="text-xs md:text-base ml-1 md:ml-2 text-gray-700">
                      {category?.categoryName}
                    </span>
                  </label>
                ))}
                {categories?.length > defaultCategoriesCount && (
                  <button
                    className="text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={() => setShowAllCategories(!showAllCategories)}
                  >
                    {showAllCategories ? "- View Less" : "+ View More"}
                  </button>
                )}
              </div>
            </div>
            {/* category section end */}

            <div className="py-3 px-0 md:px-4">
              <h2 className="text-xs md:text-base lg:text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">
                Filter by Brands
              </h2>
              <div className="flex flex-col gap-3 my-3">
                {visibleBrands.map((brand) => (
                  <label key={brand?._id} className="inline-flex items-center">
                    <input
                      id={brand?.brandName}
                      type="checkbox"
                      className="form-checkbox h-5 w-5"
                    />
                    <span className="text-xs md:text-base ml-1 md:ml-2 text-gray-700">
                      {brand?.brandName}
                    </span>
                  </label>
                ))}
                {brands?.length > defaultBrandsCount && (
                  <button
                    className="text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={() => setShowAllBrands(!showAllBrands)}
                  >
                    {showAllBrands ? "- View Less" : "+ View More"}
                  </button>
                )}
              </div>
            </div>
            {/* brands section end */}

            {/* color section start */}
            <div className="py-3 px-0 md:px-4">
              <h2 className="text-xs md:text-base lg:text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">
                Filter by Colors
              </h2>

              <div className="flex flex-col gap-3 my-3">
                {colors?.map((color) => (
                  <label key={color?.id} className="inline-flex items-center">
                    <input
                      id={color?.name}
                      type="checkbox"
                      className="form-checkbox h-5 w-5"
                      // onChange={() => handleColorChecked(color?.name)}
                    />
                    <span className="text-xs md:text-base ml-1 md:ml-2 text-gray-700">
                      {color?.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            {/* color section end */}

            {/* price section start */}
            <div className="py-3 px-0 md:px-4">
              <h2 className="text-xs md:text-base lg:text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">
                Set Price Range
              </h2>

              <div className="space-y-1 my-2">
                <div className="flex flex-col md:flex-row items-center gap-1">
                  <input
                    className="w-full rounded-md border border-gray-300 py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
                    placeholder="Min"
                    type="number"
                    id="minPrice"
                  />

                  <input
                    className="w-full rounded-md border border-gray-300 py-2 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
                    placeholder="Max"
                    type="number"
                    id="maxPrice"
                  />
                </div>
              </div>
              <button className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-md py-2 px-4">
                Apply
              </button>
            </div>
            {/* price section end */}
          </div>

          {/* Side bar end */}
          <div className="w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 my-10">
              {/* Product-Cards */}
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
              <ProductCard></ProductCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
