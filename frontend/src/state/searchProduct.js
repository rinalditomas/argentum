import axios from 'axios'
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getSearchProduct = createAsyncThunk('SEARCH_PRODUCT',(search,thunkAPI)=> {
  return axios.get(`/products/${search}`)
   .then(response =>{return(response.data)})
})


 export const getSearchProductReducer = createReducer([],{
   [getSearchProduct.fulfilled]: (state, action) => action.payload,
  })