import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import * as routes from '../constants/routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AdminRoute from './AdminRoute';
import FinancesRoute from './FinancesRoute';
import RegistryRoute from './RegistryRoute';

import PublicWelcomePage from '../components/PublicWelcomePage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';

import PrivateWelcomePage from '../components/PrivateWelcomePage';
import ChangePasswordPage from '../components/ChangePasswordPage';

import UsersDashboardPage from '../components/UsersDashboardPage';
import AddUserPage from '../components/AddUserPage';

import FinancesDashboardPage from '../components/FinancesDashboardPage';
import AddFolioPage from '../components/AddFolioPage';

import PartakerDashboardPage from '../components/PartakerDashboardPage';
import SearchPartakerPage from '../components/SearchPartakerPage';
import EditPartakerPage from '../components/EditPartakerPage';


export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
      <PublicRoute path={routes.PUBLIC_WELCOME} component={PublicWelcomePage} exact={true} />
      <PublicRoute path={routes.LOGIN} component={LoginPage} exact={true} />
        
        <PrivateRoute path={routes.PRIVATE_WELCOME} component={PrivateWelcomePage} exact={true} />
        <PrivateRoute path={routes.CHANGE_PASSWORD} component={ChangePasswordPage} exact={true} />

        <AdminRoute path={routes.USERS} component={UsersDashboardPage} exact={true}/>
        <AdminRoute path={routes.USERS_CREATE} component={AddUserPage} exact={true}/>
        
        <FinancesRoute path={routes.FINANCES} component={FinancesDashboardPage} exact={true} />
        <FinancesRoute path={routes.CREATE_FOLIO} component={AddFolioPage} exact={true} />

        <RegistryRoute path={routes.REGISTRY} component={SearchPartakerPage} exact={true}/>
        <RegistryRoute path={routes.REGISTRY_DASHBOARD} component={PartakerDashboardPage} exact={true}/>
        <RegistryRoute path={routes.EDIT_PARTAKER} component={EditPartakerPage} exact={true} />
        
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;