import axios from 'axios'
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";


export const getSingleProduct = createAsyncThunk('GET_PRODUCT',(productID,thunkAPI)=> {
  return axios.get(``)
   .then(response =>{return(response.data)})
})



 export const getSingleProductReducer = createReducer([],{
 
   [getSingleProduct.fulfilled]: (state, action) => action.payload,

  })