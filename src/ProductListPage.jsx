import React, { useState, useEffect } from 'react';
import ProductDisplay from './ProductDisplay';
import axios from 'axios';
import ProductFilter from './components/ProductFilter';




const ProductListPage = () => {
 
  const [products, setProducts] = useState([]);

  const [brands,setBrands] = useState([])
  const [lower,setLower] = useState(50)
  const [higher,setHigher] = useState(100)
  const [page,setPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("mens");
  const [selectedSort, setSelectedSort] = useState('price:asc');

 
  useEffect(() => {
   
    const fetchData = async () => {
     const product = await axios.post("https://ecomm-backend-murex.vercel.app/api/products",{category:selectedCategory,sort:selectedSort,page,lower,higher,brands} )
     console.log(product)
     setProducts(product.data)
    };

    fetchData();
  }, [selectedCategory, selectedSort,brands,lower,higher,page]);


  const onCategoryChange = (category) => {
    setSelectedCategory(category);
  };


  const onSortChange = (sortValue) => {
    setSelectedSort(sortValue);
  };


  const onPriceRangeChange = (x,y) =>{
    setLower(x)
    setHigher(y)
  }
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
  console.log(name,checked)
    
    if (checked) {
      
      setBrands([...brands, name]);
    } else {
      
      setBrands(brands.filter((item) => item !== name));
    }
  };

  return (
    <div className='p-5'>
     
     <ProductFilter higher={higher} lower ={lower}  brands={brands} selectedSort={selectedSort} selectedCategory={selectedCategory} onPriceRangeChange={onPriceRangeChange}  onBrandChange={handleCheckboxChange} onSortChange={onSortChange} onCategoryChange={onCategoryChange}  />
     <ProductDisplay page={page} onPageChange={setPage} products={products} />
    </div>
  );
};

export default ProductListPage;



