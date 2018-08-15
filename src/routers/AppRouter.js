import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import PartakerDashboardPage from '../components/PartakerDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

import AddFolioPage from '../components/AddFolioPage';
import FinancesDashboardPage from '../components/FinancesDashboardPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={PartakerDashboardPage} exact={true} />
        <Route path="/finances" component={FinancesDashboardPage} exact={true} />
        <Route path="/create/folio" component={AddFolioPage} />
        <Route path="/create" component={AddExpensePage} exact={true} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;