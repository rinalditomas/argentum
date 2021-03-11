import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const sendLoginRequest = createAsyncThunk("LOGIN", (user,thunkAPI) => {
    return axios.post("http://localhost:3001/users/login",{email:user.email,password:user.password})
    .then((res)=> {console.log("ACA ESTA LA RESPUESTA DE REDUX",res.data)})
    .catch((err) => console.log(err))
  });

  export const loginReducer = createReducer({}, {
    [sendLoginRequest.fulfilled]: (state, action) => action.payload,
  });