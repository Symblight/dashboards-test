import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { dropSession } from "stores/services";

export const LogoutPage = () => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(async () => {
    try {
      await dispatch(dropSession());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    handleLogout();
  }, [handleLogout]);
  return <div>logout page</div>;
};
