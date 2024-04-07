import { configureStore } from "@reduxjs/toolkit";
import { loginReducer, updateReducer, userReducer } from "./reducers/user";

const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    update: updateReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(api)
});

export default store;