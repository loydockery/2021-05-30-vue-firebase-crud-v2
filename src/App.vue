<template>
  <div id="appContainer">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer,
  },
}
</script>

<style>
.notdoneyet {
  color: blue;
}
</style>
