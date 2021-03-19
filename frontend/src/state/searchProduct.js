import axios from 'axios'
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";


export const getSearchProduct = createAsyncThunk('SEARCH_PRODUCT',(value)=> {

  return axios.get(`http://localhost:3001/products/search/${value}`)
   .then(response => response.data)

})


 export const getSearchProductReducer = createReducer([],{
   [getSearchProduct.fulfilled]: (state, action) => action.payload,
  
  })