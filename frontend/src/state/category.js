import axios from 'axios'
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";


export const getSearchCategory = createAsyncThunk('SEARCH_CATEGORY',(value)=> { 
  return axios.get(`http://localhost:3001/categories/search/${value}`)
   .then(response => response.data)
})
export const searchAllCategories = createAsyncThunk('SEARCH_ALL',(value)=> {
    return axios.get(`http://localhost:3001/categories/search`)
    .then((categorias)=>categorias.data)});


 export const getSearchCategoryReducer = createReducer([],{
   [getSearchCategory.fulfilled]: (state, action) => action.payload,
   [searchAllCategories.fulfilled]: (state, action) => action.payload,
  })