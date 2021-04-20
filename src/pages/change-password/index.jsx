import React, { useCallback } from "react";
// import { useDispatch } from "react-redux";
// import { dropSession } from "stores/services";
import { AdminTemplate } from "templates/admin-template";

export const ChangePasswordPage = () => {
  // const dispatch = useDispatch();

  const handleChangePassword = useCallback(async () => {
    try {
     // await dispatch(dropSession());
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <AdminTemplate>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
            <button onClick={handleChangePassword}> Change password</button>
          </div>
        </div>
      </div>
    </AdminTemplate>
  );
};
