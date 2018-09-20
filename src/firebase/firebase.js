import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIRBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);

  const database = firebase.database();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();



  export {firebase,googleAuthProvider,database as default}; 

  // database.ref('expenses')
  // .once('value')
  // .then((snapshot)=>{
  //   const expenses = [];

  //   snapshot.forEach((childSnapshot)=>{
  //     expenses.push({
  //       id:childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });

  //   console.log(expenses);
  // });

  // database.ref('expenses').on('value',(snapshot)=>{
  //   const expenses = [];

  //   snapshot.forEach((childSnapshot)=>{
  //     expenses.push({
  //       id:childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });

  //   console.log(expenses);
  // });

  // database.ref('expenses').push({
  //   description:'rent',
  //   note:'pay rent',
  //   amount:300,
  //   createdAt:0
  // });

  // database.ref('expenses').push({
  //   description:'water bill',
  //   note:'pay rent',
  //   amount:300,
  //   createdAt:0
  // });

  // database.ref('expenses').push({
  //   description:'electricity bill',
  //   note:'pay rent',
  //   amount:300,
  //   createdAt:0
  // });

  // database.ref().on('value',(snpashot)=>{
  //   const val = snpashot.val();
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  // });

//   database.ref().set({
//     name:'nkk',
//     age:24,
//     stressLevel:6,
//     job:{
//       title:'Software Developer',
//       company:'Google'
//     },
//     location:{
//       city:'phl',
//       country:'india'
//     }
//   }).then(()=>{
//     console.log('passed');
//   }).catch((e)=>{
//     console.log(e);
//   });


// database.ref().update({
// stressLevel:9,
// "location/country":'uk',
// "job/company":"amazon"
// });
// database.ref('name').remove().then(()=>{
//   console.log('Remove succeeded');
// }).catch((e)=>{
//   console.log('Remove FAiled',e)
// })

// const adaRef = firebase.database().ref('users/ada');
// adaRef.remove()
//   .then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });

//   firebase.ref().remove(name);


