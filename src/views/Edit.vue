<template>
  <div id="Edit">
    <h1>EDIT</h1>
    <form @submit.prevent="update">
      <div>
        <label>firstName</label>
        <input v-model="form.firstName" required />
      </div>
      <div>
        <label>lastName</label>
        <input v-model="form.lastName" required />
      </div>
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getAuthor, updateAuthor } from '@/firebase'

export default {
  // name: 'Home',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const authorId = computed(() => route.params.id)
    const form = reactive({ firstName: '', lastName: '' })

    onMounted(async () => {
      const author = await getAuthor(authorId.value)
      console.log(author, authorId.value)
      form.firstName = author.firstName
      form.lastName = author.lastName
    })

    const update = async () => {
      await updateAuthor(authorId.value, { ...form })
      router.push('/authors')
      form.name = ''
      form.email = ''
    }

    return { form, update }
  },
}
</script>
