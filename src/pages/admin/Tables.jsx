import React, { useCallback, useEffect } from "react";

// components

import CardTable from "components/Cards/CardTable";
import CardTableUsers from "components/Cards/CardUsers";
import { AdminTemplate } from "templates/admin-template";
import { allUsersRequest } from "api/users";

export const TablesPage = () => {
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const fetchAllUsers = useCallback(async () => {
    try {
      const { data } = await allUsersRequest({
        params: { sortBy: "desc", limit: 10, page },
      });
      setUsers(data.results);
    } catch (error) {
      console.log(error);
    }
  }, [page]);
  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);
  return (
    <AdminTemplate>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTableUsers color="dark" data={users} />
          <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Page:
            </label>
          <input
              type="number"
              value={page}
              onChange={(e) => setPage(e.target.value)}
              name="password"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Password"
            />

        </div>
      </div>
    </AdminTemplate>
  );
};
