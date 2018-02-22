import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAunhgvKoqNDxDGPugq_RCE2O7d0nvNiQg",
  authDomain: "turnout-e16ab.firebaseapp.com",
  databaseURL: "https://turnout-e16ab.firebaseio.com",
  projectId: "turnout-e16ab",
  storageBucket: "turnout-e16ab.appspot.com",
  messagingSenderId: "455356684096"
};

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
