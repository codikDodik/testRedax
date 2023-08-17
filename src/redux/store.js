/* eslint-disable default-case */
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  likes: 10,
};

const reducer = (state = initialState, action) => {
  console.log("reducer", action);

  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        likes: state.likes + 1
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: reducer,
});

export default store;
