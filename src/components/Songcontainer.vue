<template>
    <div>
        <h1>hjbsdiub</h1>
        <div v-for="(song, i) in songList" :key="i">
            {{song.title}}
        </div>
    </div>
    
</template>

<script>
import axios from "axios";

export default {
    name: 'Songcontainer',
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