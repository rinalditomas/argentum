
import { createReducer, createAction } from "@reduxjs/toolkit";

export const setCart = createAction("SET_CART")
export const setQuantity = createAction("SET_QUANT")
export const filterProd = createAction("FILTER_PROD")


 const inicialState = []
 
 export const cartProductsReducer = createReducer(inicialState,{
   [setCart]: (state, action) => {
      
    state.push(
       {
       product:action.payload,
       quantity: action.payload.quantity
      }) 
       
   },
  })

 