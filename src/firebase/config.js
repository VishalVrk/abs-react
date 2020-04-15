import firebase from 'firebase'

const config ={
    apiKey: "AIzaSyD7DwRQ1ipEhypmmqmxljnJMysnIDgPKkY",
    authDomain: "react-firebase-c96fd.firebaseapp.com",
    databaseURL: "https://react-firebase-c96fd.firebaseio.com",
    projectId: "react-firebase-c96fd",
    storageBucket: "react-firebase-c96fd.appspot.com",
    messagingSenderId: "231855891195",
    appId: "1:231855891195:web:d9797868c8b78061bcc65e",
    measurementId: "G-J43RYSYLWN"
}

export const firebaseui = {
    signInFlow:"popup",
    signInOptions:[
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ]
}

firebase.initializeApp(config);

export default firebase