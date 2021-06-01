<template>
  <table id="BookList">
    <thead>
      <tr>
        <th>title</th>
        <th>authorId</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ id, title, authorId } in books" :key="id">
        <td>{{ title }}</td>
        <td>{{ authorId }}</td>
        <td>
          <router-link :to="`/editBook/${id}`">
            <button>Edit Book</button>
          </router-link>
          <button @click="deleteBook(id)">Delete Book</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { loadBooks, deleteBook, getAuthor } from '@/firebase'

export default {
  setup() {
    const books = loadBooks()
    console.log('book list', books)
    return { books, deleteBook }
  },
}
</script>

<style></style>
