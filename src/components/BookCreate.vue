<template>
  <div id="BookCreate">
    <form @submit.prevent="onSubmit">
      <div>
        <label>title</label>
        <input v-model="form.title" required />
      </div>

      <div>
        <label>authorId</label>
        <input v-model="form.authorId" required />
      </div>

      <button type="submit">Create Book</button>
    </form>
  </div>
</template>

<script>
import { createBook } from '@/firebase'
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({ title: '', authorId: '' })

    const onSubmit = async () => {
      await createBook({ ...form })
      form.title = ''
      form.authorId = ''
    }

    return { form, onSubmit }
  },
}
</script>
