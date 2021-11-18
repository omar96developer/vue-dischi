<template>
  <div id="app">
  <main><Songcontainer></Songcontainer></main>
  </div>
</template>

<script>
import Songcontainer from "./components/Songcontainer.vue"


export default {
  name: 'App',
  components: {
    Songcontainer
  }
}
</script>

<style lang="scss">
@import "@/styles/app.scss";

</style>
