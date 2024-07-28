import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import questionReducer from "../features/questionSlice";
import categoryReducer from "../features/categorySlice";


export default configureStore({
  reducer: {
    user: userReducer,
    question: questionReducer,
    category: categoryReducer,
  },
});
