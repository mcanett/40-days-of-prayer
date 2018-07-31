import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render a singular message for single expense', () => {
  const wrapper = shallow(
    <ExpensesSummary 
      expensesCount={1}
      expensesTotal={5000}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render a plural message for multiple expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary 
      expensesCount={3}
      expensesTotal={15000}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

