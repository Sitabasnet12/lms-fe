import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  toppings: ["Mushroom", "pepporoni"],
  sauce: ["bbq", "tomato"],
  gluten: false,
};
const pizzaSlice = createSlice({
  name: "latest",
  initialState,
  reducers: {
    addToppings: (state, action) => {
      state.toppings = [...state.toppings, action.payload];
    },
    addSauce: (state, action) => {
      state.sauce = [...state.sauce, action.payload];
    },
    toggleGluten: (state) => {
      state.gluten = !state.gluten;
    },
    clearToppingsAndSauce: (state) => {
      state.sauce = [];
      state.toppings = [];
    },
  },
});
// export const { addToppings, addSauce, toggleGluten } = pizzaSlice.actions;
export const addToppings = pizzaSlice.actions.addToppings;
export const addSauce = pizzaSlice.actions.addSauce;
export const toggleGluten = pizzaSlice.actions.toggleGluten;
export const clearToppingsAndSauce = pizzaSlice.actions.clearToppingsAndSauce;
export default pizzaSlice.reducer;
