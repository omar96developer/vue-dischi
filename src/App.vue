<template>
    <div>
      <Navapp></Navapp>
      <div class="container">
        
        <Songcontainer></Songcontainer>

      </div>
    </div>
  
</template>

<script>
import Songcontainer from './components/Songcontainer.vue'
import Navapp from './components/Navapp.vue'

export default {
  name: 'App',
  components: {
    Navapp,
    Songcontainer
  }
}
</script>

<style lang="scss">
@import "@/style/app";

</style>
