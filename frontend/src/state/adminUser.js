import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

const parseJwt = (token) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};

////LOGIN///////////////////////////////

export const sendAdminLoginRequest = createAsyncThunk("ADMINLOGIN", (user, thunkAPI) => {
  return axios
    .post("http://localhost:3001/users/admin/login", {
      isAdmin: user.isAdmin,
      email: user.email,
      password: user.password,
    })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      const data = parseJwt(res.data.token);
      return data;
    });
});
//parsear la data del token y guardarla en redux, buscar el payload de jwt
//////LOGOUT///////////////////////////////

export const sendLogoutRequest = createAsyncThunk("LOGOUT", (user,thunkAPI) => {
  localStorage.removeItem('token')
  return {}
});


/////CHECK QUE EL TOKEN ESTE OK//////////

export const sendToken = createAsyncThunk("LOGIN", (token,thunkAPI) => {
  console.log("llego hasta aca")
    return axios.post("http://localhost:3001/me",{}, {headers: { Authorization: `Bearer ${token}`}} )
    .then((res)=> res.data) 
    .catch((err) => console.log(err))
  });


export const adminReducer = createReducer(
  {},
  {
    [sendAdminLoginRequest.fulfilled]: (state, action) => action.payload,
    [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
    [sendToken.fulfilled]: (state, action) => action.payload,
  }
);
