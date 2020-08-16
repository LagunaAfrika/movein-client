<template>
  <v-container fluid>
    <v-layout column justify-center align-center fill-height class="txt">
      <v-card-title class=" font-weight-bold">
        Your Matches
      </v-card-title>
      <v-card width="400" height="200" class="mb-2 card" @click="next">
        <v-img
          width="400"
          height="200"
          src="/apartment_sittingroom.jpg"
          class="white--text align-end img"
        >
          <v-fade-transition>
            <v-overlay absolute color="#000000" />
          </v-fade-transition>
        </v-img>
        <v-flex>
          <v-card class="card-text ">
            <v-flex>
              <v-card-text class=" white--text ">
                Matches Everything You Want
              </v-card-text>
            </v-flex>
          </v-card>
        </v-flex>

        <v-card-actions>
          <v-btn small depressed class=" btn mt-6 mr-2 white--text" color="#ec7d10" @click="next">
            {{ this.getSearchResults.search_results.results_fits_all.length}} 
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card width="400" height="200" class="mb-2 card">
        <v-img
          width="400"
          height="200"
          src="/apartment_bedroom.jpg"
          class="white--text align-end img"
        >
          <v-fade-transition>
            <v-overlay absolute color="#000000" />
          </v-fade-transition>
        </v-img>
        <v-flex class="card-text white--text">
          <v-card-text>Fits Your Budget &  location</v-card-text>
        </v-flex>

        <v-card-actions>
          <v-btn small depressed class="btn mt-6 mr-2 white--text" color="#ec7d10" @click="next">
            8
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card width="400" height="200" class="mb-2 card">
        <v-img
          width="400"
          height="200"
          src="/apartment-kitchen.jpg"
          class="white--text align-end img"
        >
          <v-fade-transition>
            <v-overlay absolute color="#000000" />
          </v-fade-transition>
        </v-img>
        <v-flex class="card-text white--text">
          <v-card-text>Fits  location & House </v-card-text>
        </v-flex>

        <v-card-actions>
          <v-btn small depressed class="btn mt-6 mr-2  white--text" color="#ec7d10" @click="next">
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
// import axios from 'axios'
export default {
  data: () => {
    return {
      overlay: false
    }
  },
  computed: {
    ...mapGetters(['getSearchResults'])
  },
  methods: {
    next () {
      console.log(this.getSearchResults.search_results.results_fits_all.length)
      this.$router.push('/auth/signup')
    }
  }
}
</script>
<style scoped>

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

  height: 50px;
  width: 320px;
  top: 135px;
  left: 8px;
  background-color: #0091ad;
  border-radius: 0px 25px 25px 0px;

}
.btn {
  position: absolute;
  right: 8px;
  top: 120px;
  background: #ffffff;
  border-radius: 25px 25px 25px 25px;

}
</style>
