import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

  export const sendRegisterRequest = createAsyncThunk("REGISTER", (user,thunkAPI) => {
      return axios.post("http://localhost:3001/users/register",{email:user.email,password:user.password,name:user.name,lastName:user.lastName})
      .then((res)=> res.data )
      .catch((err) => console.log(err))
    });

  export const registerReducer = createReducer({}, {
    [sendRegisterRequest.fulfilled]: (state, action) => action.payload,
  });