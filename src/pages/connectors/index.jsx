import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { dropSession } from "stores/services";
import { AdminTemplate } from "templates/admin-template";

export const ConnectorsPage = () => {
  const dispatch = useDispatch();

  return <AdminTemplate>ConnectorsPagePage</AdminTemplate>;
};
