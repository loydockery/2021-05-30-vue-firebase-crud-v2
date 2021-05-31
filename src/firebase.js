import firebase from 'firebase/app'
import 'firebase/firestore'
import { ref, onUnmounted } from 'vue'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAf4oUWXy5hRyDl3s_R-L9hWjeij7zfbhk',
  authDomain: 'testingmay2021-e0349.firebaseapp.com',
  projectId: 'testingmay2021-e0349',
})

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')
const authorsCollection = db.collection('authors')

export const createUser = user => {
  return usersCollection.add(user)
}

export const createAuthor = user => {
  return authorsCollection.add(user)
}

export const loadAuthors = () => {
  const authors = ref([])
  const close = authorsCollection.onSnapshot(snapshot => {
    authors.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return authors
}

export const deleteAuthor = id => {
  return authorsCollection.doc(id).delete()
}
