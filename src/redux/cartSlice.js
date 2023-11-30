import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    setCart: (state, action) => {
      console.log("reached",action.payload)
      state.items = action.payload;
    },
    addItemToCart: (state, action) => {
      const item = state.items.find((item) => item.productId === action.payload.productId);

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },
   
    removeItemToCart:(state,action) =>{
        state.items = state.items.filter(item => item.productId !== action.productId)
    },
    incrementToCart: (state, action) => {
    


        const productIdToIncrement = action.payload.productId;
        state.items = state.items.map(item =>
          item.productId === productIdToIncrement
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      },
      decrementToCart:(state,action)=>{
        const productIdToDecrement = action.payload.productId

        state.items = state.items.map(item=> item.productId === productIdToDecrement ? {...item,quantity:Math.max(0,item.quantity - 1)}: item).filter(item => item.quantity>0)
      }
  
  },
});

export const { setCart,removeItemToCart,addItemToCart,incrementToCart,decrementToCart } = cartSlice.actions;

export default cartSlice.reducer;
