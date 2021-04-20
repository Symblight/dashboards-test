import React, { useCallback, useEffect } from "react";

// components

import CardTable from "components/Cards/CardTable";
import CardTableUsers from "components/Cards/CardUsers";
import { AdminTemplate } from "templates/admin-template";
import { allUsersRequest } from "api/users";

export const TablesPage = () => {
  const [users, setUsers] = React.useState([]);
  const fetchAllUsers = useCallback(async () => {
    try {
      const { data } = await allUsersRequest({
        params: { sortBy: "desc", limit: 10, page: 1 },
      });
      setUsers(data.results);
    } catch (error) {
      console.log(error);
    }
  }, []);
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
        </div>
      </div>
    </AdminTemplate>
  );
};
