/* eslint-disable */
var firebase = require('firebase')
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAsbnuqIQipd7RyknQf-7NvGz-KLqvV0CE",
  authDomain: "kanban-pakhaji.firebaseapp.com",
  databaseURL: "https://kanban-pakhaji.firebaseio.com",
  projectId: "kanban-pakhaji",
  storageBucket: "",
  messagingSenderId: "782418278435"
}

firebase.initializeApp(config)

var db = firebase.database()

module.exports = db
