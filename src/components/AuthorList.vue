<template>
  <table id="AuthorList">
    <thead>
      <tr>
        <th>firstName</th>
        <th>lastName</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ id, firstName, lastName } in authors" :key="id">
        <td>{{ firstName }}</td>
        <td>{{ lastName }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { loadAuthors } from '@/firebase'
export default {
  setup() {
    const authors = loadAuthors()
    return { authors }
  },
}
</script>

<style></style>
