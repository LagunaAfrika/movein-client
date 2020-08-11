<template>
  <v-container fluid>
    <v-layout column justify-center align-center fill-height class="txt">
      <v-card-title>Your Matches</v-card-title>
      <v-card  width="400" height="200" class="mb-2 card">
        <v-img
          width="400"
          height="200"
          src="/apartment_sittingroom.jpg"
          class="white--text align-end img"
        >
          <v-fade-transition>
            <v-overlay absolute color="#036358"></v-overlay>
          </v-fade-transition>
        </v-img>
        <v-flex class="card-text white--text">
          <v-card-text>Matches Everything You Want</v-card-text>

          <v-card-text>Price,Location, House type</v-card-text>
        </v-flex>

        <v-card-actions>
          <v-btn small class=" btn mt-6 white--text" color="#ec7d10" @click="next">

            {{ this.getSearchResults.search_results.results_fits_all.length }}
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card width="400" height="200" class="mb-2 card">
        <v-img
          width="400"
          height="200"
          src="/apartment_sittingroom.jpg"
          class="white--text align-end img"
        >
          <v-fade-transition>
            <v-overlay absolute color="#036358"></v-overlay>
          </v-fade-transition>
        </v-img>
        <v-flex class="card-text white--text">
          <v-card-text>Matches Your Budget & Desired location</v-card-text>

          <v-card-text>Price,Location, House type</v-card-text>
        </v-flex>

        <v-card-actions>
          <v-btn small class="btn mt-6 white--text" color="#ec7d10" @click="next">
            8
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      

      <v-card width="400" height="200" class="mb-2 card">
        <v-img
          width="400"
          height="200"
          src="/apartment_sittingroom.jpg"
          class="white--text align-end img"
        >
          <v-fade-transition>
            <v-overlay absolute color="#036358"></v-overlay>
          </v-fade-transition>
        </v-img>
        <v-flex class="card-text white--text">
          <v-card-text>Matches Your desired location & House </v-card-text>

          <v-card-text>Price,Location, House type</v-card-text>
        </v-flex>

        <v-card-actions>
          <v-btn small class="btn mt-6 white--text" color="#ec7d10" @click="next">
            15
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  data: () => {
    return {
      overlay: false
    };
  },
  computed: {
    ...mapGetters(['getSearchResults'])
  },
  methods: {
    next () {
      // console.log(this.getSearchResults.search_results.results_fits_all.length)
      this.$router.push('/auth/signup')
    }
  }
};
</script>
<style scoped>
.display {
  z-index: 00;
}
.txt {
  font-family: "Comfortaa", cursive;
}
.img {
  border-radius: 18px 18px 18px 18px;
}
.card {
  border-radius: 18px 18px 18px 18px;
}
.card-text {
  position: absolute;
  width: 200px;
  height: 50px;
  top: 130px;
  left: 8px;
  border-radius: 25px 25px 25px 1px;
}
.btn {
  position: absolute;
  right: 0px;
  top: 130px;
  background: #ffffff;
  border-radius: 25px 0px 0px 25px;
}
</style>
