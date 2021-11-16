<template>
    <div>
        <Searchbar :genere="getSongGenre"></Searchbar>
       {{getSongGenre()}}
        
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
import Searchbar from './Searchbar.vue'
import Songcard from "./Songcard.vue";
import Loader from "./Loader.vue";

export default {
    name: 'Songcontainer',
    components: {
    Songcard,
    Searchbar,
    Loader
  },
    data() {
        return {
            songList: '',
            loading: true
        }

    },
    methods: {
      getSongGenre(){
          const songGenre = {};
          this.songList.forEach((genere) =>{
            const {genre} = genere;

            if(songGenre[genre] === undefined) {
                songGenre[genre] = 0;
            }
            songGenre[genre]++
          });

            return songGenre;
          
      }
    },
    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then(resp => {
            this.songList = resp.data.response;
            setTimeout(() => {
                this.loading = false;
            }, 1000)
            
        })
    }
}
</script>