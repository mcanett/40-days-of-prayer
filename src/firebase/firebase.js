import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// const folio = 'P-62519';
// const secondFolio = 'P-62518';
// const partaker = {
//   name: {
//     lastName: 'Pérez',
//     mothersSurname: 'Pérez',
//     firstName: 'Fulanito'
//   }
// }

// const createFolio = (folio) => {

//   // Looking if the folio is repeated
//   database.ref('folios')
//   .orderByValue()
//   .equalTo(folio)
//   .once('value')
//   .then((snapshot) => {
//     return snapshot.val();
//   }).then((storedFolio) => {
//     // If folio is repeated the process run again
//     if (storedFolio !== null) {
//       createFolio(secondFolio)
//     } else {
//       // If folio doesn't exist, it's created
//       console.log('new folio created');
//       return database.ref('folios').push(folio);
//     }
//   }).then((createdFolio) => {
//     // If folio was created, partaker is saved
//     if (createdFolio) {
//       console.log('creating partaker');
//       Object.assign(partaker, { folio });

//       // Creating partaker
//       return database.ref('partakers').push(partaker).then((ref) => {
//         console.log('is entering here');
//         dispatch(addFolio({
//           id: ref.key,
//           ...partaker
//         }));
//       });
//     }
//   });
// }

// createFolio(folio);

// database.ref('expenses')
// .orderByChild('description').equalTo('new test expense').once('value').then((snapshot) => {
//   console.log(snapshot.val());
// });

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()        
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'Coffe',
//   note: '',
//   amount: 299,
//   createdAt: 0
// });

// database.ref('notes/-LImk_rkShr8ep5XXae3').remove();

// const firebaseNotes = {
//   notes: {
//     asdgas: {
//       title: 'First note',
//       body: 'This is my note'
//     },
//     dsgsvdsdv: {
//       title: 'Another note',
//       body: 'This is my note 2'
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'First note',
//   body: 'This is my note'
// }, {
//   id: '1678dcd',
//   title: 'Another note',
//   body: 'This is my note 2'
// }];

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const { name, age, stressLevel, job } = snapshot.val();
//   console.log(`${name} is a ${job.title} at ${job.company}`);
// }, (e) => {
//   console.log('Error with data fetching ', e);
// });

// database.ref().once('value').then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }).catch((e) => {
//   console.log('Error fetching data, ', e)
// });

// database.ref().set({
//   name: 'Moises Canett',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Mexicali',
//     country: 'Mexico'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed. ', e);
// });

// database.ref('isSingle')
//   .remove().then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Remove failed: ", error)
//   });;

// database.ref()
//   .update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattlá'
//   }).then(function() {
//     console.log("Update succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Update failed: ", error)
//   });;
