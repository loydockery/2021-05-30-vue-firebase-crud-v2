<template>
  <table id="AuthorList">
    <thead>
      <tr>
        <th>firstName</th>
        <th>lastName</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ id, firstName, lastName } in authors" :key="id">
        <td>{{ firstName }}</td>
        <td>{{ lastName }}</td>
        <td>
          <router-link :to="`/editAuthor/${id}`">
            <button>Edit Author</button>
          </router-link>
          <button class="notdoneyet">See Author</button>
          <button class="notdoneyet">Add Book</button>
          <button class="notdoneyet">See Books</button>
          <button @click="deleteAuthor(id)">Delete Author</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { loadAuthors, deleteAuthor } from '@/firebase'

export default {
  setup() {
    const authors = loadAuthors()
    console.log('author list', authors)
    return { authors, deleteAuthor }
  },
}
</script>

<style>
.notdoneyet {
  color: blue;
}
</style>
