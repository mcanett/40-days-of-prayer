import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addFolio, startAddFolio,
  addPartaker, startAddPartaker,
  editPartaker, startEditPartaker,
  removePartaker, startRemovePartaker,
  setPartakers, startSetPartakers 
} from '../../actions/partakers';
import partakers from '../fixtures/partakers';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const partakersData = {};
  partakers.forEach(({ id, folio, name, createdAt }) => {
    partakersData[id] = { folio, name, createdAt }
  });
  database.ref('partakers').set(partakersData).then(() => {
    done();
  });
});

// Edit expense
// test('should setup edit expense action object', () => {
//   const action = editExpense('123abc', { note: 'New note value' });
//   expect(action).toEqual({
//     type: 'EDIT_EXPENSE',
//     id: '123abc',
//     updates: {
//       note: 'New note value'
//     }
//   });
// });

// test('should edit expense from firebase', (done) => {
//   const store = createMockStore({});
//   const { id, description, amount, note, createdAt } = expenses[0];
//   const editedExpense = {
//     description: 'New much cooler description',
//     amount: 99999,
//     note: note,
//     createdAt: createdAt
//   };
//   store.dispatch(startEditExpense(id, editedExpense)).then(() => {
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({
//       type: 'EDIT_EXPENSE',
//       id,
//       updates: editedExpense
//     });

//     return database.ref(`expenses/${actions[0].id}`).once('value');
    
//   }).then((snapshot) => {
//     expect(snapshot.val()).toEqual(editedExpense);
//     done();
//   });
// });

// Remove expense
// test('should setup remove expense action object', () => {
//   const action = removeExpense({ id: '123abc' });
//   expect(action).toEqual({
//     type: 'REMOVE_EXPENSE',
//     id: '123abc'
//   });
// });

// test('should remove expenses from firebase', (done) => {
//   const store = createMockStore({});
//   const id = expenses[1].id;
//   store.dispatch(startRemoveExpense({ id })).then(() => {
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({
//       type: 'REMOVE_EXPENSE',
//         id
//     });

//     return database.ref(`expenses/${actions[0].id}`).once('value');

//   }).then((snapshot) => {
//     expect(snapshot.val()).toBeFalsy();
//     done();
//   });
// });

// Add folio
test('should setup add folio action object with provided values', () => {
  const partakerName= {
    lastName: 'Canett',
    mothersSurname: 'Cañedo',
    'firstName': 'Moises'
  };
  const action = addFolio(partakerName);
  expect(action).toEqual({
    type: 'ADD_FOLIO',
    partaker: partakerName
  });
});

test('should add folio to database and store', (done) => {
  const store = createMockStore({});
  const partakerData = { 
    lastName: 'Perez',
    mothersSurname: 'Lopez',
    firstName: 'John'
   };
  store.dispatch(startAddFolio(partakerData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_FOLIO',
      partaker: {
        id: expect.any(String),
        folio: expect.any(String),
        name : { ...partakerData },
        createdAt: expect.any(Number)
      }
    });

    return database.ref(`partakers/${actions[0].partaker.id}`).once('value');

  }).then((snapshot) => {
    expect(snapshot.val()).toEqual({
      folio: expect.any(String),
      name: { ...partakerData },
      createdAt: expect.any(Number),
    });
    done();
  });
});

// test('should add expense with default to database and store', (done) => {
//   const store = createMockStore({});
//   const defaultExpenseData = {
//     description: '',
//     amount: 0,
//     note: '',
//     createdAt: 0
//   }
//   store.dispatch(startAddExpense()).then(() => {
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({
//       type: 'ADD_EXPENSE',
//       expense: {
//         id: expect.any(String),
//         ...defaultExpenseData
//       }
//     });

//     return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    
//   }).then((snapshot) => {
//     expect(snapshot.val()).toEqual(defaultExpenseData);
//     done();
//   });
// });

// Set expenses
// test('should setup set expenses action object with data', () => {
//   const action = setExpenses(expenses);
//   expect(action).toEqual({
//     type: 'SET_EXPENSES',
//     expenses
//   });
// });

// test('should fetch the expenses from firebase', (done) => {
//   const store = createMockStore({});

//   store.dispatch(startSetExpenses()).then(() => {
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({
//       type: 'SET_EXPENSES',
//       expenses
//     });
//     done();
//   });
// });
