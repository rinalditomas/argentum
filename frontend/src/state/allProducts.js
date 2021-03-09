import axios from 'axios'
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

 export const getAllProducts = createAsyncThunk('GET_ALL',(movieID,thunkAPI)=> {
   return axios.get(``)
    .then(response =>{return(response.data)})
})

 export const getAllProductsReducer = createReducer([],{
   [getAllProducts.fulfilled]: (state, action) => action.payload,
  })