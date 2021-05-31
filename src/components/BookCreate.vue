<template>
  <div id="BookCreate">
    <form @submit.prevent="onSubmit">
      <div>
        <label>First Name</label>
        <input v-model="form.firstName" required />
      </div>

      <div>
        <label>Last Name</label>
        <input v-model="form.lastName" required />
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
    const form = reactive({ firstName: '', lastName: '' })

    const onSubmit = async () => {
      await createBook({ ...form })
      form.firstName = ''
      form.lastName = ''
    }

    return { form, onSubmit }
  },
}
</script>
