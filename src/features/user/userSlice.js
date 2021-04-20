import { createSlice } from "@reduxjs/toolkit";
import update from "immutability-helper";

export const initialState = {
  users: [],
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
      state.loading = true;
      state.error = false;
    },
    createUser: (state, action) => {
      state.users = [...state.users, action.payload];
      state.loading = false;
    },
    deleteUser: (state, action) => {
      state.users.filter((user) => user.id !== action.payload.id);
      state.loading = false;
    },
    updateUser: (state, action) => {
      const indexUser = state.users.findIndex((user) => user.id === action.payload.id);
      if (indexUser > -1) {
        state.users = update(state, {
          users: { [indexUser]: { $set: action.payload } },
        });
      }
      state.loading = false;
    },
  },
});

export const { createUser, deleteUser, setUsers } = userSlice.actions;

export default userSlice.reducer;
