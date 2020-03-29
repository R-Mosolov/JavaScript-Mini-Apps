const functions = require('firebase-functions');

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: functions.config().app.apikey,
    authDomain: "fir-db-723c3.firebaseapp.com",
    databaseURL: "https://fir-db-723c3.firebaseio.com",
    projectId: "fir-db-723c3",
    storageBucket: "fir-db-723c3.appspot.com",
    messagingSenderId: "876140265383",
    appId: "1:876140265383:web:c86e8f1946de1cdeb7c082"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const docRef = firestore.collection('demo');


// Definition of layout's elements
const data = document.getElementById('data');
const postData = document.getElementById('postData');
const getData = document.getElementById('getData');


// Posting and getting data
postData.addEventListener('click', function () {
    const currentDoc = docRef.doc(`${Math.round(Math.random() * 100000)}`);

    const dataValue = data.value;
    console.log(dataValue);

    currentDoc
        .set({
            dataValue: dataValue,
            created: new Date(Date.now())
        })
        .then(function () {
            console.log('Data saved!');
        })
        .catch(function (err) {
            console.log(err);
        });
});

getData.addEventListener('click', function () {
    docRef
        .get()
        .then(function (docs) {
            console.log(docs);
        })
        .catch(function (err) {
            console.log(err);
        });
});
