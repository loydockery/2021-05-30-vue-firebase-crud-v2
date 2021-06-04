<template>
  <div id="EditBook">
    <h1>EDIT BOOK</h1>
    <form @submit.prevent="update">
      <div>
        <label>title</label>
        <input v-model="form.title" required />
      </div>
      <div>
        <label>authorId</label>
        <input v-model="form.authorId" required />
      </div>
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getBook, updateBook } from '@/firebase'

export default {
  name: 'EditBook',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const bookId = computed(() => route.params.id)
    const form = reactive({ title: '', authorId: '' })

    onMounted(async () => {
      const book = await getBook(bookId.value)
      console.log('edit book', book, bookId.value)
      form.title = book.title
      form.authorId = book.authorId
    })

    const update = async () => {
      await updateBook(bookId.value, { ...form })
      router.push('/books')
      form.title = ''
      form.authorId = ''
    }

    return { form, update }
  },
}
</script>
