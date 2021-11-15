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
                

    </div>
    
</template>

<script>
import axios from "axios";
import Songcard from "./Songcard.vue";

export default {
    name: 'Songcontainer',
    components: {
    Songcard
  },
    data() {
        return {
            songList: '',
        }

    },
    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then(resp => {
            this.songList = resp.data.response
            console.log(resp)
        })
    }
}
</script>