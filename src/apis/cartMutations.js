import axios from "axios";

export const addToCartApi = async (data) => {
   console.log(data)
  const res = await axios.post("http://localhost:3000/api/cart/add_item", {
    ...data
  });
  return res.data;
};

export const removeToCartApi = async (productId, userId) => {
    const res = await axios.post("http://localhost:3000/api/cart/remove_item", {
      productId,
      userId,
    });
    return res.data;
  };
  export const incrementToCartApi = async (productId, userId) => {
    const res = await axios.post("http://localhost:3000/api/cart/increment_item", {
      productId,
      userId,
    });
    return res.data;
  };
  export const decrementToCartApi = async (productId, userId) => {
    const res = await axios.post("http://localhost:3000/api/cart/decrement_item", {
      productId,
      userId,
    });
    return res.data;
  };
