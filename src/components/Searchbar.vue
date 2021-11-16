<template>
    <div class="text-center">
        <div class="input-group mx-auto" style="max-width: 500px">
            <select class="form-select" aria-label="Default select example"  >
                <option selected >Genere</option>
                <option v-for="(value, key) in genere" :key="key" >{{value}}</option>
            </select>
            <!--  <input type="select" class="form-control" placeholder="Ricerca" v-model="searchValue" @keyup.enter="ricerca" >
            <button class="btn btn-outline-primary" type="button" @click="ricerca">Click</button> -->
        </div> 
    </div>
</template>

<script>
export default {
    name: 'Searchbar',
    props: {
        genere: Function,
    },
    data() {
        return{
             
        }
    },
    methods: {
    
    }
}
</script>




