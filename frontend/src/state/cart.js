
import { createReducer, createAction } from "@reduxjs/toolkit";

 export const setCart = createAction("SET_CART")

 export const cartProductsReducer = createReducer([],{
   [setCart]: (state, action) => [...state,action.payload],
  })

  