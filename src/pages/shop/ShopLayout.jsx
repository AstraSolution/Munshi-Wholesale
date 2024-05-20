import { useEffect, useState } from "react";
import SectionBanner from "../../Components/Shared/SectionBanner/SectionBanner";
import { FaSortDown, FaBars, FaFilter } from "react-icons/fa";
import useAllCategory from "../../Hooks/useAllCategory";
import useAllBrand from "../../Hooks/useAllBrand";
import Shop from "./Shop";
import { useLocation } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

const ShopLayout = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [sort, setSort] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const { state } = useLocation();
  const { categories, categoryLoading } = useAllCategory();
  const { brands, brandsLoading } = useAllBrand();

  let defaultCategoriesCount = 5;
  if (categories?.length < 5) {
    defaultCategoriesCount = categories?.length;
  }

  let defaultBrandsCount = 5;
  if (brands?.length < 5) {
    defaultBrandsCount = brands?.length;
  }

  useEffect(() => {
    if (state !== null) {
      if (state?.type === "category") {
        setCategoryFilter([...categoryFilter, state?.value]);
        document.getElementById(state?.value).checked = true;
      } else if (state?.type === "brand") {
        setBrandFilter([...brandFilter, state?.value]);
        document.getElementById(state?.value).checked = true;
      }
    }
  }, []);

  // Filtering Array
  const handleCategoryFilter = (value) => {
    const check = document.getElementById(value).checked;

    if (check === true) {
      setCategoryFilter([...categoryFilter, value]);
    } else {
      setCategoryFilter(
        categoryFilter?.filter((category) => category !== value)
      );
    }
  };

  const handleBrandFilter = (value) => {
    const check = document.getElementById(value).checked;

    if (check === true) {
      setBrandFilter([...brandFilter, value]);
    } else {
      setBrandFilter(brandFilter?.filter((brand) => brand !== value));
    }
  };

  return (
    <div>
      <SectionBanner title={"Collection"} subTitle={"Shop / Products"} />

      <div className="border-b flex flex-col gap-10 md:gap-0 md:flex-row justify-between items-center px-5 lg:px-10 py-5">
        <div className="relative max-w-sm">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 w-full rounded-l-lg text-lg focus:outline-none border-[1px] border-gray-300"
            />
            <button
              type="submit"
              className="bg-yellow-300 text-black py-2 px-3 rounded-r-lg text-lg font-semibold border-[1px] border-yellow-400"
            >
              Search
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <h3 className="text-lg">Sort by</h3>
          <div className="flex flex-col">
            <div
              className={`${
                sort
                  ? "flex gap-6 py-2 px-6 bg-yellow-300 rounded-t-lg relative"
                  : "flex gap-6 py-2 px-6 bg-yellow-300 rounded-full"
              }`}
            >
              <p className="text-lg">Featured</p>
              <p>
                <FaSortDown className="block" onClick={() => setSort(!sort)} />
              </p>
              <ul
                className={`${
                  sort
                    ? "block bg-gray-200 py-2 px-[6px] rounded-b-lg absolute top-9 right-0 z-10"
                    : "hidden"
                }`}
              >
                <li className="hover:bg-white py-1 px-2 rounded-lg">
                  Alphabet A - Z
                </li>
                <li className="hover:bg-white py-1 px-2 rounded-lg">
                  Alphabet Z - A
                </li>
                <li className="hover:bg-white py-1 px-2 rounded-lg">
                  Price Low to High
                </li>
                <li className="hover:bg-white py-1 px-2 rounded-lg">
                  Price High to Low
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-3 md:hidden pl-5 ml-2 border-l">
            <button
              className="text-lg flex items-center gap-3"
              onClick={() => setSidebarVisible(!sidebarVisible)}
            >
              Filter
              <span>
                <FaFilter />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex px-5 md:px-0 relative mx-auto">
        {/* Sidebar start */}
        <div
          className={`${
            sidebarVisible ? "block" : "hidden"
          } md:block min-w-56 lg:min-w-96 flex flex-col border-r md:border-r-0 px-3 pt-36 md:pt-0 pb-10 lg:pl-10 fixed bg-white z-10 md:z-0 top-0 md:top-40 left-0 h-full overflow-y-auto md:sticky`}
        >
          {/* category section start */}
          <div className="py-3 px-0 md:px-4">
            <div className="flex items-center">
              <h2 className="text-xs md:text-base lg:text-xl font-semibold text-gray-800 w-full pb-2 border-b border-gray-200">
                Filter by category
              </h2>
              <button
                className="text-lg pl-5 md:hidden"
                onClick={() => setSidebarVisible(!sidebarVisible)}
              >
                <RxCross1 />
              </button>
            </div>

            {categoryLoading ? (
              <p className="mt-5">Loading...</p>
            ) : (
              <>
                <div className="flex flex-col gap-3 my-3">
                  {categories
                    ?.slice(0, defaultCategoriesCount)
                    .map((category) => (
                      <label
                        key={category?._id}
                        className="inline-flex items-center"
                      >
                        <input
                          id={category?.categoryName}
                          type="checkbox"
                          className="form-checkbox min-h-5 min-w-5"
                          onChange={() =>
                            handleCategoryFilter(category?.categoryName)
                          }
                        />
                        <span className="text-xs lg:text-base ml-1 md:ml-2 text-gray-700">
                          {category?.categoryName}
                        </span>
                      </label>
                    ))}
                </div>

                <div
                  className={
                    showAllCategories ? "flex flex-col gap-3 mb-3" : "hidden"
                  }
                >
                  {categories?.length > 5 &&
                    categories
                      ?.slice(5, categories?.length)
                      .map((category) => (
                        <label
                          key={category?._id}
                          className="inline-flex items-center"
                        >
                          <input
                            id={category?.categoryName}
                            type="checkbox"
                            className="form-checkbox min-h-5 min-w-5"
                            onChange={() =>
                              handleCategoryFilter(category?.categoryName)
                            }
                          />
                          <span className="text-xs lg:text-base ml-1 md:ml-2 text-gray-700">
                            {category?.categoryName}
                          </span>
                        </label>
                      ))}
                </div>
                <button
                  className="text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={() => setShowAllCategories(!showAllCategories)}
                >
                  {showAllCategories ? "- View Less" : "+ View More"}
                </button>
              </>
            )}
          </div>
          {/* category section end */}

          <div className="py-3 px-0 md:px-4">
            <h2 className="text-xs md:text-base lg:text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">
              Filter by Brands
            </h2>
            {brandsLoading ? (
              <p className="mt-5">Loading...</p>
            ) : (
              <>
                <div className="flex flex-col gap-3 my-3">
                  {brands?.slice(0, defaultBrandsCount).map((brand) => (
                    <label
                      key={brand?._id}
                      className="inline-flex items-center"
                    >
                      <input
                        id={brand?.brandName}
                        type="checkbox"
                        className="form-checkbox h-5 w-5"
                        onChange={() => handleBrandFilter(brand?.brandName)}
                      />
                      <span className="text-xs md:text-base ml-1 md:ml-2 text-gray-700">
                        {brand?.brandName}
                      </span>
                    </label>
                  ))}
                </div>
                <div
                  className={
                    showAllBrands ? "flex flex-col gap-3 mb-3" : "hidden"
                  }
                >
                  {brands?.slice(5, brands?.length).map((brand) => (
                    <label
                      key={brand?._id}
                      className="inline-flex items-center"
                    >
                      <input
                        id={brand?.brandName}
                        type="checkbox"
                        className="form-checkbox h-5 w-5"
                        onChange={() => handleBrandFilter(brand?.brandName)}
                      />
                      <span className="text-xs md:text-base ml-1 md:ml-2 text-gray-700">
                        {brand?.brandName}
                      </span>
                    </label>
                  ))}
                </div>
                <button
                  className="text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={() => setShowAllBrands(!showAllBrands)}
                >
                  {showAllBrands ? "- View Less" : "+ View More"}
                </button>
              </>
            )}
          </div>
          {/* brands section end */}

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
        {/* Sidebar end */}

        <div className="md:border-l"><Shop categoryFilter={categoryFilter} brandFilter={brandFilter} /></div>
      </div>
    </div>
  );
};

export default ShopLayout;
