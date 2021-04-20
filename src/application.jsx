import React, { lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { WaitingComponent } from "libs/waiting-component";

import ProtectedRoute from "features/auth/protected-routes/ProtectedRoute";
import GuestRoute from "features/auth/protected-routes/GuestRoute";

// eslint-disable-next-line import/no-unresolved
import "assets/styles/tailwind.css";
import { paths } from "pages/paths";

const DashboardPageLazy = lazy(() =>
  import(/* webpackChunkName: "dashboard-page" */ "pages/admin").then(
    ({ DashboardPage }) => ({
      default: DashboardPage,
    })
  )
);

const MapsPageLazy = lazy(() =>
  import(/* webpackChunkName: "maps-page" */ "pages/admin").then(
    ({ MapsPage }) => ({
      default: MapsPage,
    })
  )
);

const SettingsPageLazy = lazy(() =>
  import(/* webpackChunkName: "settings-page" */ "pages/admin").then(
    ({ SettingsPage }) => ({
      default: SettingsPage,
    })
  )
);

const TablePageLazy = lazy(() =>
  import(/* webpackChunkName: "table-page" */ "pages/admin").then(
    ({ TablesPage }) => ({
      default: TablesPage,
    })
  )
);

const LoginPageLazy = lazy(() =>
  import(/* webpackChunkName: "auth-page" */ "pages/auth").then(
    ({ LoginPage }) => ({
      default: LoginPage,
    })
  )
);

const RegisterPageLazy = lazy(() =>
  import(/* webpackChunkName: "auth-page" */ "pages/auth").then(
    ({ RegisterPage }) => ({
      default: RegisterPage,
    })
  )
);

const LogoutPageLazy = lazy(() =>
  import(/* webpackChunkName: "logout-page" */ "pages/auth").then(
    ({ LogoutPage }) => ({
      default: LogoutPage,
    })
  )
);



const ChangePasswordPageLazy = lazy(() =>
  import(/* webpackChunkName: "change-passsword-page" */ "pages/change-password").then(
    ({ ChangePasswordPage }) => ({
      default: ChangePasswordPage,
    })
  )
);

export const Application = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* add routes with layouts */}
        <ProtectedRoute
          path={paths.dashboard()}
          exact
          component={WaitingComponent(DashboardPageLazy)}
        />
        <ProtectedRoute
          path={paths.maps()}
          exact
          component={WaitingComponent(MapsPageLazy)}
        />
        <ProtectedRoute
          path={paths.settings()}
          exact
          component={WaitingComponent(SettingsPageLazy)}
        />
        <ProtectedRoute
          path={paths.tables()}
          exact
          component={WaitingComponent(TablePageLazy)}
        />
        <ProtectedRoute
          path={paths.logout()}
          exact
          component={WaitingComponent(LogoutPageLazy)}
        />
        <ProtectedRoute
          path={paths.changePassword()}
          exact
          component={WaitingComponent(ChangePasswordPageLazy)}
        />
        <GuestRoute
          path={paths.login()}
          component={WaitingComponent(LoginPageLazy)}
        />
        <GuestRoute
          path={paths.register()}
          component={WaitingComponent(RegisterPageLazy)}
        />
        {/* add routes without layouts */}
        {/* <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} /> */}
        {/* add redirect for first page */}
      </Switch>
    </BrowserRouter>
  );
};
