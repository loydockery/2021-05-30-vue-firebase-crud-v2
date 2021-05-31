import firebase from 'firebase/app'
import 'firebase/firestore'

// import firebase from 'firebase'

// import firebase from 'firebase/app'
// import { ref, onUnmounted } from 'vue'
// import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAf4oUWXy5hRyDl3s_R-L9hWjeij7zfbhk',
  authDomain: 'testingmay2021-e0349.firebaseapp.com',
  projectId: 'testingmay2021-e0349',
})

// const db = firebaseApp.getFirestore()

// const firebaseConfig = {
//   apiKey: 'AIzaSyAf4oUWXy5hRyDl3s_R-L9hWjeij7zfbhk',
//   authDomain: 'testingmay2021-e0349.firebaseapp.com',
//   projectId: 'testingmay2021-e0349',
//   storageBucket: 'testingmay2021-e0349.appspot.com',
//   messagingSenderId: '332003476997',
//   appId: '1:332003476997:web:4e26bfecd5a76c737e3e6c',
//   measurementId: 'G-VKFX0CWQHV',
// }

// const firebaseApp = firebase.initializeApp(firebaseConfig)

// const db = firebaseApp.getFirestore()
const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
  return usersCollection.add(user)
}
