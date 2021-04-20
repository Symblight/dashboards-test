import { createAsyncThunk } from "@reduxjs/toolkit";
import * as users from "api/users";
import * as auth from "api/auth";

export const createUser = createAsyncThunk(
  "user/createUser",
  users.createUserRequest
);
export const allUsers = createAsyncThunk(
  "user/setUsers",
  users.allUsersRequest
);
export const updateUser = createAsyncThunk(
  "user/updateUser",
  users.updateUserByIdRequest
);
export const removeUser = createAsyncThunk(
  "user/deleteUser",
  users.removeUserByIdRequest
);

export const dropSession = createAsyncThunk("auth/dropAuth", async (params) =>  await auth.logoutRequest(params));
export const onLogin = createAsyncThunk("auth/setAuth", async (params) => {
  return await auth.loginRequest(params);
});

export const onRegistered = createAsyncThunk("auth/setAuth", async (params) => {
  return await auth.registerRequest(params);
});
