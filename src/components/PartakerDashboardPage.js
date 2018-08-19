import React from 'react';
import PartakerList from './PartakerList';
import PartakerListFilters from './PartakerListFilters';
import PartakersSummary from './PartakersSummary';

const PartakerDashboardPage = () => (
  <div>
    {/*<PartakersSummary />*/}
    <PartakerListFilters />
    <PartakerList />
  </div>
);

export default PartakerDashboardPage;