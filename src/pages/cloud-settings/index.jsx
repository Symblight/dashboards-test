import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { dropSession } from "stores/services";
import { AdminTemplate } from "templates/admin-template";

export const CloudSettingsPage = () => {
  const dispatch = useDispatch();

  return <AdminTemplate>CloudSettingsPage</AdminTemplate>;
};
