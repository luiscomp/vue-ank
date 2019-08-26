import firebase from 'firebase'
import 'firebase/database'

const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
}

export const inicializarFirebase = () => {
    firebase.initializeApp(firebaseConfig)
}
