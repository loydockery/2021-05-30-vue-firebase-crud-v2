<template>
  <table id="AuthorBookList">
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
          <button class="notdoneyet">Add Book</button>
          <button @click="deleteBook(id)">Delete Book</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { computed } from 'vue'
import { loadBooksByAuthor, deleteBook } from '@/firebase'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const authorId = computed(() => route.params.id)
    const books = loadBooksByAuthor(authorId)
    console.log('author book list', books)
    return { books, deleteBook }
  },
}
</script>

<style></style>
