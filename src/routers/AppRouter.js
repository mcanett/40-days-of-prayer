import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditPartakerPage from '../components/EditPartakerPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

import WelcomePage from '../components/WelcomePage';
import FinancesDashboardPage from '../components/FinancesDashboardPage';
import AddFolioPage from '../components/AddFolioPage';
import PartakerDashboardPage from '../components/PartakerDashboardPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={WelcomePage} exact={true} />
        <Route path="/finances" component={FinancesDashboardPage} exact={true} />
        <Route path="/create/folio" component={AddFolioPage} />
        <Route path="/registry" component={PartakerDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} exact={true} />
        <Route path="/edit/:id" component={EditPartakerPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;