<template>
    <div>
    
        <div class="row row-cols-1 row-cols-md-5 gx-5 gy-4 pt-5 pb-5">

            <div class="col " v-for="(song, i) in songList" :key="i">
                <Songcard 
                :image="song.poster" 
                :title="song.title" 
                :author="song.author" 
                :year="song.year"></Songcard>
                
            </div>
        </div>
                
        <Loader v-if="loading === true"></Loader>
    </div>
    
</template>

<script>
import axios from "axios";
import Songcard from "./Songcard.vue";
import Loader from "./Loader.vue";

export default {
    name: 'Songcontainer',
    components: {
    Songcard,
    Loader
  },
    data() {
        return {
            songList: '',
            loading: true
        }

    },
    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then(resp => {
            this.songList = resp.data.response;
            console.log(resp);
            setTimeout(() => {
                this.loading = false;
            }, 3000)
            
        })
    }
}
</script>