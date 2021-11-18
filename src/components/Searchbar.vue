<template>
 <div class="text-center mb-4">
     <div class="input-group mx-auto" style="max-width:500px">
        <select class="form-control" v-model="genere" @keydown.enter="ricerca" @click="ricerca">
            <option value="">Tutti i generi</option>
            <option value="rock">Rock</option>
            <option value="metal">Metal</option>
            <option value="pop">Pop</option>
            <option value="jazz">Jazz</option>
        </select>
     </div>
 </div>
</template>

<script>

export default {
    name: "Searchbar",
    data(){
        return{
            genere:"",
        };
    },
    methods:{
        ricerca(){
            this.$emit("search",this.genere);
        },
        reset(){
          this.genere="" ;
          this.$emit("lista");
        }
    }
}
</script>
