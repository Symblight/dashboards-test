import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { dropSession } from "stores/services";
import { AdminTemplate } from "templates/admin-template";

export const ChangePasswordPage = () => {
  const dispatch = useDispatch();

  const handleChangePassword = useCallback(async () => {
    try {
       await dispatch(dropSession());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  return (
    <AdminTemplate>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Password
            </label>
            <input
              type="password"
              // value={formik.values.password}
              // onChange={formik.handleChange}
              name="password"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Password"
            />
            <button className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"onClick={handleChangePassword}> Change password</button>
          </div>
        </div>
      </div>
    </AdminTemplate>
  );
};
