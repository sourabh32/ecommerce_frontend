import axios from "axios";

export const fetchDataApi = async (selectedCategory,selectedSort,page,lower,higher,brands) => {
    console.log(selectedCategory,selectedSort,page,lower,higher,brands)
    const res = await axios.post("http://localhost:3000/api/products", {
      category: selectedCategory,
      sort: selectedSort,
      page,
      lower,
      higher,
      brands,
    });

    return res.data;
  };