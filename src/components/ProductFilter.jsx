import React, { useState } from "react";
import FilterDrawer from "./FilterDrawer";
import {BiFilterAlt} from "react-icons/bi"
const ProductFilter = ({
  selectedCategory,
  selectedSort,
  lower,
  higher,
  brands,
  onCategoryChange,
  onSortChange,
  onPriceRangeChange,
  onBrandChange
}) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
 

 

  return (<>
  <div className="flex font-custom justify-center items-center gap-5">
   <button onClick={openDrawer}><BiFilterAlt size={36} /></button>
   <div className="">
        
        <select
          value={selectedSort}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full font-semibold px-4 py-2 border rounded-md">
          <option value="price:asc">Price (up)</option>
          <option value="review:asc">Review (up)</option>
          <option value="price:dsc">Price (down)</option>
          <option value="review:dsc">Review (down)</option>
        </select>
      </div>
      </div>
    <FilterDrawer openDrawer={openDrawer} closeDrawer={closeDrawer} isOpen={isDrawerOpen}>
    <div  className="p-5 flex sm:flex-row flex-col  justify-evenly">
      <div className="  ">
        <p className="font-bold text-lg">Category</p>
        <div className="flex font-semibold flex-col mt-2 ml-2">
          
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="mens"
              checked={selectedCategory === "mens"}
              onChange={() => onCategoryChange("mens")}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">Mens</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="women"
              checked={selectedCategory === "women"}
              onChange={() => onCategoryChange("women")}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">Women</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="kids"
              checked={selectedCategory === "kids"}
              onChange={() => onCategoryChange("kids")}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">Kids</span>
          </label>
        </div>
      </div>

      <div className="  ">
        <p className="font-bold text-lg">Price</p>
        <div className="flex font-semibold flex-col mt-2 ml-2">
          
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="mens"
              checked={lower === 50 && higher === 100}
              onChange={() => onPriceRangeChange(50, 100)}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">50$ - 100$</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="women"
              checked={lower === 100 && higher === 150}
              onChange={() => onPriceRangeChange(100, 150)}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">100$ - 150$</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="kids"
              checked={lower === 150 && higher === 200}
              onChange={() => onPriceRangeChange(150, 200)}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">150$ Above</span>
          </label>
        </div>
      </div>

      <div className="  ">
        <p className="font-bold text-lg">Price</p>
        <div className="flex font-semibold flex-col mt-2 ml-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name={"Nike"}
              checked={brands.includes("Nike")}
              onChange={(e) =>onBrandChange(e)}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">Nike</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name={"Puma"}
              checked={brands.includes("Puma")}
              onChange={(e) =>onBrandChange(e)}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">Puma</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name={"Adidas"}
              checked={brands.includes("Adidas")}
              onChange={(e) =>onBrandChange(e)}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">Adidas</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              
              name={"New Balance"}
              checked={brands.includes("New Balance")}
              onChange={(e) =>onBrandChange(e)}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">New Balance</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
             
              name={"Reebok"}
            checked={brands.includes("Reebok")}
            onChange={(e) =>onBrandChange(e)}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-gray-700">Reebok</span>
          </label>
        </div>
      </div>
     

    </div>
    </FilterDrawer>
    </>
  );
};

export default ProductFilter;

