import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push : jest.fn() };
  wrapper = shallow(<EditExpensePage
    editExpense={editExpense}
    removeExpense={removeExpense}
    history={history}
    expense={expenses[2]} />);
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  const { id, description, amount, createdAt } = expenses[2];
  const editedExpense = {
    id,
    description: description + '!!',
    amount: amount + 500,
    createdAt,
    note: 'This is my new note'
  };
  wrapper.find('ExpenseForm').prop('onSubmit')(editedExpense);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(id, editedExpense);
});

test('should handle removeExpense', () => {
  // wrapper.find('button').prop('onClick')();
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
});