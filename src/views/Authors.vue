<template>
  <div id="authors">
    <h1>AUTHORS</h1>
    <AuthorCreate />
    <AuthorList />
  </div>
</template>

<script>
import AuthorCreate from '@/components/AuthorCreate.vue'
import AuthorList from '@/components/AuthorList.vue'

export default {
  name: 'Authors',
  components: { AuthorCreate, AuthorList },
}
</script>
