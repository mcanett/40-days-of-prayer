import database from '../firebase/firebase';
import moment from 'moment';
import folio from '../utils/folio';


// ADD_FOLIO
export const addFolio = (partaker) => ({
  type: 'ADD_FOLIO',
  partaker
});

export const addLastPartaker = (partaker) => ({
  type: 'ADD_LAST_PARTAKER',
  partaker
});

export const removeLastPartaker = () => ({
  type: 'REMOVE_LAST_PARTAKER'
});

export const startAddFolio = (partakerName = {}) => {
  return (dispatch) => {
    
    const {
      prefix = '',
      lastName = '',
      mothersSurname = '',
      firstName = ''
    } = partakerName;
    
    const newFolio = folio.generate(prefix);

    const partaker = {
      name: {
        lastName,
        mothersSurname,
        firstName
      },
      createdAt: moment().valueOf()
     };

    // Looking if the folio is repeated
    return database.ref('folios')
    .orderByValue()
    .equalTo(newFolio)
    .once('value')
    .then((snapshot) => {
      return snapshot.val();
    }).then((storedFolio) => {
      // If folio is repeated the process run again
      if (storedFolio !== null) {
        startAddFolio(partakerName)
      } else {
        // If folio doesn't exist, it's created
        // console.log('new folio created');
        return database.ref('folios').push(newFolio);
      }
    }).then((createdFolio) => {
      // If folio was created, partaker is saved
      if (createdFolio) {
        // console.log('creating partaker');
        Object.assign(partaker, { folio: newFolio });

        // Creating partaker
        return database.ref('partakers').push(partaker).then((ref) => {
          dispatch(addFolio({
            id: ref.key,
            ...partaker
          }));
          dispatch(addLastPartaker({
            id: ref.key,
            ...partaker
          }));
        });
      }
    });
  };
};

// ADD_PARTAKER
export const addPartaker = (partaker) => ({
  type: 'ADD_PARTAKER',
  partaker
});

export const startAddPartaker = (partakerData = {}) => {
  return (dispatch) => {
    const {
      folio,
      name,
      phone = '',
      age = 0,
      gender = 0,
      isChristian = false,
      congregateTime = '',
      congregartionName = '',
      createdAt = 0, 
      registeredAt = 0
    } = partakerData;

    const partaker = {
      folio,
      name,
      phone,
      age,
      gender,
      isChristian,
      congregateTime,
      congregartionName,
      createdAt, 
      registeredAt
     };

    return database.ref('partakers').push(partaker).then((ref) => {
      dispatch(addPartaker({
        id: ref.key,
        ...partaker
      }));
    });
  };
};

// REMOVE_PARTAKER
export const removePartaker = ({ id }) => ({
  type: 'REMOVE_PARTAKER',
  id
});

export const startRemovePartaker = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`partakers/${id}`).remove().then(() => {
      dispatch(removePartaker({ id }));
    });
  };
}

// EDIT_PARTAKER
export const editPartaker = (id, updates) => ({
  type: 'EDIT_PARTAKER',
  id,
  updates
});

export const startEditPartaker = (id, updates) => {
  return (dispatch) => {
    return database.ref(`partakers/${id}`).update(updates).then(() => {
      dispatch(editPartaker(id, updates));
    });
  };
};

// SET_PARTAKERS
export const setPartakers = (partakers) => ({
  type: 'SET_PARTAKERS',
  partakers
});

export const startSetPartakers = () => {
  return (dispatch) => {
    return database.ref('partakers').once('value').then((snapshot) => {
      const partakers = [];
      snapshot.forEach((childSnapshot) => {
        partakers.push({
          id: childSnapshot.key,
          ...childSnapshot.val()        
        });
      });
      dispatch(setPartakers(partakers));
    });
  };
};