<template>
  <div id="app-container">
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

<style></style>
