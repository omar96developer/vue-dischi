<template>
    <div>
      <Navapp></Navapp>
      <div class="container">
        <Songcontainer></Songcontainer>
      </div>
    </div>
  
</template>

<script>
import Navapp from './components/Navapp.vue'
import Songcontainer from './components/Songcontainer.vue'


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
