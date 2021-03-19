import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {getSingleProductReducer} from './singleProduct'
import {getSearchProductReducer} from './searchProduct'
import {getAllProductsReducer} from './allProducts'
import {productReducer} from './product'
import {getSearchCategoryReducer} from './category'
import { userReducer } from "./user";
import {cartProductsReducer} from './cart'
import { adminReducer } from "./adminUser";



const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    singleProduct: getSingleProductReducer,
    searchProduct: getSearchProductReducer,
    allProducts : getAllProductsReducer,
    user: userReducer,
    categoryReducer: getSearchCategoryReducer,
    product :productReducer,
    cart : cartProductsReducer,
    admin: adminReducer,
  },
});

export default store;