<template>
  <div id="books">
    <h1>BOOKS</h1>
    <BookCreate />
    <BookList />
  </div>
</template>

<script>
import BookCreate from '@/components/BookCreate.vue'
import BookList from '@/components/BookList.vue'

export default {
  name: 'Books',
  components: { BookCreate, BookList },
}
</script>
