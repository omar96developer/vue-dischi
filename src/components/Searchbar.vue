<template>
    <div class="text-center">
        <div class="input-group mx-auto" style="max-width: 500px">
            <input type="text" class="form-control" placeholder="Ricerca" v-model="searchValue" @keyup.enter="ricerca" >
            <button class="btn btn-outline-primary" type="button" @click="ricerca">Click</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Searchbar',
    data() {
        return{
            searchValue: '',
        }
    },
    methods: {
        ricerca() {
            console.log(this.searchValue)
        }
    }
}
</script>




