<template>
  <div id="authors">
    <h1>AUTHORS</h1>
    <UserCreate />
  </div>
</template>

<script>
import UserCreate from '../components/UserCreate.vue'

export default {
  name: 'Authors',
  components: { UserCreate },
}
</script>
