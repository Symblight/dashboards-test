import React from "react";

// components

import CardTable from "components/Cards/CardTable";
import { AdminTemplate } from "templates/admin-template";

export const TablesPage = () => {
  return (
    <AdminTemplate>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </AdminTemplate>
  );
}
