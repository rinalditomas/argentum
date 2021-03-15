import axios from 'axios'
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

<<<<<<< HEAD
export const getSearchProduct = createAsyncThunk('SEARCH_PRODUCT',(search,thunkAPI)=> {
  return axios.get(`/products/${search}`)
=======
export const getSearchProduct = createAsyncThunk('SEARCH_PRODUCT',(search)=> {
  return axios.get(``)
>>>>>>> 272af29c209a24af8c82df068a55bd0f018e8cfd
   .then(response =>{return(response.data)})
})


 export const getSearchProductReducer = createReducer([],{
   [getSearchProduct.fulfilled]: (state, action) => action.payload,
  })