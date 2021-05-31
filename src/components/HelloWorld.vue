<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: { type: String, required: true },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
