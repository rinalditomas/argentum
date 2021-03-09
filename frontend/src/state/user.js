import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const sendLoginRequest = createAsyncThunk("LOGIN", (user,thunkAPI) => {
    return axios.post("/login",{username:user.username,password:user.password}).then((res)=> res.data )
  });
export const sendLogoutRequest = createAsyncThunk("LOGOUT", (user,thunkAPI) => {
    return axios.post("/logout").then((res)=> res.data )
  });

  export const sendRegisterRequest = createAsyncThunk("REGISTER", (user,thunkAPI) => {
      return axios.post("/signup",{username:user.username,password:user.password}).then((res)=> res.data )
    });

  export const userReducer = createReducer({}, {
    [sendLoginRequest.fulfilled]: (state, action) => action.payload,
    [sendRegisterRequest.fulfilled]: (state, action) => action.payload,
    [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
  });