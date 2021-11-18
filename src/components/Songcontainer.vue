<template>
  <div class="display_song">
    <Navapp></Navapp>
    <div class="container py-5">
      <Searchbar @search="filter" @lista="reset"></Searchbar>
      <div class="row row-cols-5 g-4 pt-3">
        <div class="col" v-for="(card, i) in filterlist" :key="i">
          <Songcard
            :image="card.poster"
            :title="card.title"
            :author="card.author"
            :genre="card.genre"
            :year="card.year"
          ></Songcard>
        </div>
      </div>
    </div>
    
    <Loader v-if="loading === true"></Loader>
  </div>
</template>

<script>
import axios from "axios";
import Songcard from "./Songcard.vue";
import Searchbar from "./Searchbar.vue";
import Loader from "./Loader.vue";
import Navapp from "./Navapp.vue";

export default {
  name: "Songcontainer",
  components: {
    Songcard,
    Searchbar,
    Loader,
    Navapp
  },

  data() {
    return {
      songs: [],
      genre: "",
      loading: true,
    };
  },

  methods: {
    filter(genre) {
      this.genre = genre;
    },
    reset() {
        this.genre ="";
    }
  },

  computed: {
    filterlist() {
      if (!this.genre) {
        return this.songs;
      }
      return this.songs.filter(element => {
        return element.genre.toLowerCase().includes(this.genre.toLowerCase().trim())
      });
    },
  },

  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music").then((resp) => {
        this.songs.push(...resp.data.response);
        setTimeout(() => {
          this.loading = false;
        }, 3000);
      });
  },
};
</script>