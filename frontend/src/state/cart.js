import axios from 'axios'
import { createReducer, createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const setCart = createAction("SET_CART")
export const setQuantity = createAction("SET_QUANT")
export const filterProd = createAction("FILTER_PROD")


export const sendcartRequest = createAsyncThunk("CREATE_CART", (user, thunkAPI) => {
  const token =localStorage.getItem("token")
  return axios
    .post(`http://localhost:3001/cart/create/${user}`,{} , {headers: { Authorization: `Bearer ${token}`}} )
    .then((res) => console.log("ACA ESTA LA RESPUESTA DEL CARRITO",res.data))
    .catch(console.log("entre al error"))
});


export const getcartRequest = createAsyncThunk("GET_CART", (user, thunkAPI) => {
  console.log(user)
  return axios
    .get(`http://localhost:3001/cart/getCart`,{headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}})
    .then((res) => {
      /* const carritoLocalSt = JSON.parse(localStorage.getItem('cart'))

      console.log("este es el carrito del local storage",carritoLocalSt ) */
     return res.data})
    .catch(console.log("entre al error"))
});




 const inicialState = []
 
 export const cartProductsReducer = createReducer(inicialState,{
   [setCart]: (state, action) => {
      
    state.push(
       {
       product:action.payload,
       quantity: action.payload.quantity
      }) 
       
   },
  [getcartRequest.fulfilled]:(state,action)=> action.payload
  })

 