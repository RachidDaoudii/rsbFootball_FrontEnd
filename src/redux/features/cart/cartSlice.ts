import { createSlice } from '@reduxjs/toolkit';
import { cartEntity } from './entity.cart';
// import { RootState } from '../../store';

const initialState=  {
  shoppingCart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addOrderInCart: (state, action) => {
      let data = {
        id: action.payload.id,
        name: action.payload.name,
        image: action.payload.image,
        price: action.payload.price,
        qnt: 1,
      };

      let index = state.shoppingCart.findIndex((item) => item.id === data.id);

      if (index !== -1) {
        state.shoppingCart[index].qnt += 1;
      } else {
        state.shoppingCart.push(data);
      }
    },
    increment: (state, action) => {
      let index = state.shoppingCart.findIndex(
        (item) => item.id === action.payload,
      );
      state.shoppingCart[index].qnt += 1;
    },
    decrement: (state, action) => {
      let index = state.shoppingCart.findIndex(
        (item) => item.id === action.payload,
      );

      state.shoppingCart[index].qnt -= 1;

      if (state.shoppingCart[index].qnt === 0) {
        state.shoppingCart.splice(index, 1);
      }
    },
    clear:(state, action)=>{
      const itemIdToRemove = action.payload;
      const indexToRemove = state.shoppingCart.findIndex(item => item.id === itemIdToRemove);
      
      if (indexToRemove !== -1) {
          state.shoppingCart.splice(indexToRemove, 1);
      }
    }
  },
});

export const { addOrderInCart, increment, decrement ,clear} = cartSlice.actions;

export default cartSlice.reducer;