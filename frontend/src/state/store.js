import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {getSingleProductReducer} from './singleProduct'
import {getSearchProductReducer} from './searchProduct'
import {getAllProductsReducer} from './allProducts'
import {productReducer} from './product'
import { registerReducer } from "./register";
import { loginReducer } from "./login";
import { logoutReducer } from "./logout";




const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    singleProduct: getSingleProductReducer,
    searchProduct: getSearchProductReducer,
    allProducts : getAllProductsReducer,
    register: registerReducer,
    login: loginReducer,
    logout:logoutReducer,
    product :productReducer,
  },
});

export default store;