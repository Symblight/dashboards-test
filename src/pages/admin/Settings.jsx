import React from "react";

// components

import CardProfile from "components/Cards/CardProfile";
import CardSettings from "components/Cards/CardSettings";
import { AdminTemplate } from "templates/admin-template";

export const SettingsPage = () => {
  return (
    <AdminTemplate>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </AdminTemplate>
  );
}
