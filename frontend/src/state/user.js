import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";




export const sendLoginRequest = createAsyncThunk("LOGIN", (user,thunkAPI) => {
    return axios.post("http://localhost:3001/users/login",{email:user.email,password:user.password}).then((res)=> 
    //parsear la data del token y guardarla en redux, buscar el payload de jwt
    res.data )
  });
export const sendLogoutRequest = createAsyncThunk("LOGOUT", (user,thunkAPI) => {
    return axios.post("/logout").then((res)=> res.data )
  });

  export const sendRegisterRequest = createAsyncThunk("REGISTER", (user,thunkAPI) => {
      return axios.post("http://localhost:3001/users/register",{email:user.email,password:user.password,name:user.name,lastName:user.lastName})
      .then((res)=> res.data )
      .catch((err) => console.log(err))
    });
  


  export const sendToken = createAsyncThunk("LOGIN", (token,thunkAPI) => {
    console.log("llego hasta aca")
      return axios.post("http://localhost:3001/me",{},{headers: { Authorization: `Bearer ${token}`}})
      .then((res)=> res.data) 
      .catch((err) => console.log(err))
    });

  export const userReducer = createReducer({}, {
    [sendLoginRequest.fulfilled]: (state, action) => action.payload,
    [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
    [sendRegisterRequest.fulfilled]: (state, action) => action.payload,
    [sendToken.fulfilled]: (state, action) => action.payload,
  });