import { configureStore } from "@reduxjs/toolkit";

import userSlice from "features/user/userSlice";
import authSlice from "features/auth/authSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
  },
});
