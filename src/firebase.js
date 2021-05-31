import firebase from 'firebase/app'
import 'firebase/firestore'
import { ref, onUnmounted } from 'vue'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAf4oUWXy5hRyDl3s_R-L9hWjeij7zfbhk',
  authDomain: 'testingmay2021-e0349.firebaseapp.com',
  projectId: 'testingmay2021-e0349',
})

const db = firebaseApp.firestore()

// collections

const usersCollection = db.collection('users')
const authorsCollection = db.collection('authors')
const booksCollection = db.collection('books')

// CREATE

export const createUser = user => {
  return usersCollection.add(user)
}

export const createAuthor = user => {
  return authorsCollection.add(user)
}

export const createBook = book => {
  return authorsCollection.add(book)
}

// READ load

export const loadAuthors = () => {
  const authors = ref([])
  const close = authorsCollection.onSnapshot(snapshot => {
    authors.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return authors
}

export const loadBooks = () => {
  const books = ref([])
  const close = booksCollection.onSnapshot(snapshot => {
    books.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return books
}

// READ get

export const getAuthor = async id => {
  const author = await authorsCollection.doc(id).get()
  return author.exists ? author.data() : null
}

export const getBook = async id => {
  const book = await booksCollection.doc(id).get()
  return book.exists ? book.data() : null
}

// UPDATE

export const updateAuthor = (id, author) => {
  return authorsCollection.doc(id).update(author)
}

export const updateBook = (id, book) => {
  return booksCollection.doc(id).update(book)
}

// DELETE

export const deleteAuthor = id => {
  return authorsCollection.doc(id).delete()
}

export const deleteBook = id => {
  return booksCollection.doc(id).delete()
}
