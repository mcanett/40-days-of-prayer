import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should add an expense', () => {
  const newExpense = {
    description: 'New expense',
    amount: 100,
    createdAt: moment(0).add(5, 'days').valueOf(),
    note: 'My new note'
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    ...expenses,
    newExpense
  ])
});

test('should edit an expense', () => {
  const newDescription = 'New description';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      description: newDescription
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe(newDescription);
});

test('should not edit an expense if id not found', () => {
  const newDescription = 'New description';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description: newDescription
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses
  };
  const state = expensesReducer(undefined, action);
  expect(state).toEqual(expenses);
});
