<template>
    <div>
      <div class="container">
        <Songcontainer></Songcontainer>

      </div>
    </div>
  
</template>

<script>
import Songcontainer from './components/Songcontainer.vue'

export default {
  name: 'App',
  components: {
    Songcontainer
  }
}
</script>

<style lang="scss">
@import "@/style/app";

</style>
