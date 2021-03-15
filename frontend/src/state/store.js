import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {getSingleProductReducer} from './singleProduct'
import {getSearchProductReducer} from './searchProduct'
import {getAllProductsReducer} from './allProducts'
import {productReducer} from './product'
import { userReducer } from "./user";




const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    singleProduct: getSingleProductReducer,
    searchProduct: getSearchProductReducer,
    allProducts : getAllProductsReducer,
    user: userReducer,
<<<<<<< HEAD
    product :productReducer,
=======
   product :productReducer,
>>>>>>> 272af29c209a24af8c82df068a55bd0f018e8cfd
  },
});

export default store;