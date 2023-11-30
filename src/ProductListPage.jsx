<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, { useState } from "react";
>>>>>>> a8d0f2cf463e45516b6e8a2046503d2f71f9aec4
import ProductDisplay from "./ProductDisplay";
import axios from "axios";
import ProductFilter from "./components/ProductFilter";
import Spinner from "./components/Spinner";
import { useQuery } from "@tanstack/react-query";
<<<<<<< HEAD
import { fetchCartApi } from "./apis/authQueries";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "./redux/cartSlice";
=======
>>>>>>> a8d0f2cf463e45516b6e8a2046503d2f71f9aec4


const ProductListPage = () => {
  const [brands, setBrands] = useState([]);
  const [lower, setLower] = useState(50);
  const [higher, setHigher] = useState(100);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("mens");
  const [selectedSort, setSelectedSort] = useState("price:asc");
<<<<<<< HEAD
const {userInfo} = useSelector(state => state.userReducer)
  const filters = {
    selectedSort,
    selectedCategory,
    brands,
    lower,
    higher,
    page,
  };
  const dispatch = useDispatch()

  const fetchData = async () => {
    const res = await axios.post("http://localhost:3000/api/products", {
=======

  const filters = {
    selectedSort,
    selectedCategory,
    brands,
    lower,
    higher,
    page,
  };

  const fetchData = async (filters) => {
    const res = await axios.post("https://ecomm-backend-murex.vercel.app/api/products", {
>>>>>>> a8d0f2cf463e45516b6e8a2046503d2f71f9aec4
      category: selectedCategory,
      sort: selectedSort,
      page,
      lower,
      higher,
      brands,
    });
<<<<<<< HEAD

    return res.data;
  };

  const { data: products, isLoading: loading } = useQuery({queryKey:["products",filters],queryFn:fetchData});
  const { data:cartItems } = useQuery({queryKey:["cart"],queryFn:()=>fetchCartApi(userInfo._id),
 

  
});
useEffect(()=>{
  dispatch(setCart(["hello wo"]))
},[cartItems])
=======

    return res.data;
  };

  const { data: products, isLoading: loading } = useQuery({queryKey:["products",filters],queryFn:fetchData});
>>>>>>> a8d0f2cf463e45516b6e8a2046503d2f71f9aec4

// dispatch(setCart(cartItems.products));
// console.log(cartItems.products)
  const onCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const onSortChange = (sortValue) => {
    setSelectedSort(sortValue);
  };

  const onPriceRangeChange = (x, y) => {
    setLower(x);
    setHigher(y);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      setBrands([...brands, name]);
    } else {
      setBrands(brands.filter((item) => item !== name));
    }
  };

  if (loading) {
    return <Spinner />;
  }
<<<<<<< HEAD
//   useEffect(()=>{
//  if(!cartItems.products.length ===0){
//    dispatch(cartItems(cartItems.products))
//    console.log("saved")
//  }
//   },[cartItems.products])
=======
>>>>>>> a8d0f2cf463e45516b6e8a2046503d2f71f9aec4

  return (
    <div className="p-5">
      <ProductFilter
        higher={higher}
        lower={lower}
        brands={brands}
        selectedSort={selectedSort}
        selectedCategory={selectedCategory}
        onPriceRangeChange={onPriceRangeChange}
        onBrandChange={handleCheckboxChange}
        onSortChange={onSortChange}
        onCategoryChange={onCategoryChange}
      />
      {products && <ProductDisplay page={page} onPageChange={setPage} products={products} />}
    </div>
  );
};

export default ProductListPage;
