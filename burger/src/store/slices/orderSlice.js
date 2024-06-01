import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  orderItems: [],
  quantity: 0,
  total: 0,
};

const orderSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCourse(state, action){
        state.orderItems.push(
          {
           name: action.payload.name,
           description: action.payload.description,
           cost: action.payload.cost,
           id: nanoid(),
          });
      },
  
    clearCart: (state) => {
      state.orderItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.orderItems = state.orderItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.orderItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity += 1;
    },
    decrease: (state, action) => {
      const cartItem = state.orderItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity -= 1;
    },
    calculateTotal: (state) => {
      let total = 0;
      let quantity = 0;
      state.orderItems.forEach((item) => {
        total += item.quantity * item.price;
        quantity += item.quantity;
      });
      state.quantity = quantity;
      state.total = total;
    },
  },
});


export const { clearCart, removeItem, increase, decrease, calculateTotal, addCourse} = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
