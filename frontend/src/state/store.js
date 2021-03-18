import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {getSingleProductReducer} from './singleProduct'
import {getSearchProductReducer} from './searchProduct'
import {getAllProductsReducer} from './allProducts'
import {productReducer} from './product'
import { userReducer } from "./user";
import {cartProductsReducer} from './cart'



const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    singleProduct: getSingleProductReducer,
    searchProduct: getSearchProductReducer,
    allProducts : getAllProductsReducer,
    user: userReducer,
    product :productReducer,
    cart : cartProductsReducer,
    


  },
});

export default store;