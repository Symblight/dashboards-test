import React from "react";

// components

import MapExample from "components/Maps/MapExample";
import { AdminTemplate } from "templates/admin-template";

export const MapsPage = () => {
  return (
    <AdminTemplate>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <MapExample />
          </div>
        </div>
      </div>
    </AdminTemplate>
  );
}
