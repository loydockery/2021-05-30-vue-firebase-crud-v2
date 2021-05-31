<template>
  <div id="authors">
    <h1>AUTHORS</h1>
    <AuthorCreate />
  </div>
</template>

<script>
import AuthorCreate from '../components/AuthorCreate.vue'

export default {
  name: 'Authors',
  components: { AuthorCreate },
}
</script>
