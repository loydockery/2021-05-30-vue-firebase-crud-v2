<template>
  <div id="Author">
    <h1>AUTHOR</h1>
    <h2>{{ form.firstName }} {{ form.lastName }}</h2>
    <AuthorBookList />
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getAuthor, updateAuthor } from '@/firebase'
import AuthorBookList from '@/components/AuthorBookList.vue'

export default {
  name: 'Author',
  components: { AuthorBookList },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const authorId = computed(() => route.params.id)
    const form = reactive({ firstName: '', lastName: '' })

    onMounted(async () => {
      const author = await getAuthor(authorId.value)
      console.log('edit author', author, authorId.value)
      form.firstName = author.firstName
      form.lastName = author.lastName
    })

    const update = async () => {
      await updateAuthor(authorId.value, { ...form })
      router.push('/authors')
      form.firstName = ''
      form.lastName = ''
    }

    return { form, update }
  },
}
</script>
