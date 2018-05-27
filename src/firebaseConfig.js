import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyAV1dP9SLUm00nLc13eAmiZ-HLdCRF8OzU",
    authDomain: "vuegram-api.firebaseapp.com",
    databaseURL: "https://vuegram-api.firebaseio.com",
    projectId: "vuegram-api",
    storageBucket: "vuegram-api.appspot.com",
    messagingSenderId: "923040661876"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}