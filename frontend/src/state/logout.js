import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const sendLogoutRequest = createAsyncThunk("LOGOUT", (user,thunkAPI) => {
    return axios.post("/logout").then((res)=> res.data )
  });

  export const logoutReducer = createReducer({}, {
    [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
  });