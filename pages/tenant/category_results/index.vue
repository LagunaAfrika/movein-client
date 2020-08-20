<template>
  <v-container fluid>
    <v-layout column justify-center align-center fill-height class="txt">
      <v-card-title class=" font-weight-bold">
        Your Matches
      </v-card-title>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            class="mb-2 card "
            width="400"
            height="300"
          >
            <v-img
              src="/apartment_sittingroom.jpg"
              width="400"
              height="200"
            />

            <v-card-title>
              Eureka Apartments
            </v-card-title>
            <v-card-subtitle>
              <div>1 Bedroom. 1 Bathroom . Apartment</div>
              <div>Juja, Nairobi</div>
            </v-card-subtitle>

            <v-card-title>
              <v-rating
                :value="4"
                dense
                color="orange"
                background-color="orange"
                hover
                class="mr-2"
              />
              <span class="primary--text subtitle-2">64 Reviews</span>
            </v-card-title>

            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="#036358"
              >
                <v-btn to="/tenant/individual_house">
                  See more info
                </v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            class="mb-2 card "
            width="400"
            height="300"
          >
            <v-img
              src="/apartment_bedroom.jpg"
              width="400"
              height="200"
            />

            <v-card-title>
              Matte Apartments
            </v-card-title>
            <v-card-subtitle>
              <div>1 Bedroom. 1 Bathroom . Apartment</div>
              <div>Juja, Nairobi</div>
            </v-card-subtitle>

            <v-card-title>
              <v-rating
                :value="4"
                dense
                color="orange"
                background-color="orange"
                hover
                class="mr-2"
              />
              <span class="primary--text subtitle-2">64 Reviews</span>
            </v-card-title>

            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="#036358"
              >
                <v-btn to="/tenant/individual_house">
                  See more info
                </v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>

      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            class="mb-2 card "
            width="400"
            height="300"
          >
            <v-img
              src="/apartment-kitchen.jpg"
              width="400"
              height="200"
            />

            <v-card-title>
              Sunrise Apartments
            </v-card-title>
            <v-card-subtitle>
              <div>1 Bedroom. 1 Bathroom . Apartment</div>
              <div>Kahawa, Nairobi</div>
            </v-card-subtitle>

            <v-card-title>
              <v-rating
                :value="4"
                dense
                color="orange"
                background-color="orange"
                hover
                class="mr-2"
              />
              <span class="primary--text subtitle-2">64 Reviews</span>
            </v-card-title>

            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="#036358"
              >
                <v-btn to="/tenant/individual_house">
                  See more info
                </v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>
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
      console.log( this.getSearchResults.search_results.results_fits_all[0].rent)
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
.card-text-text{

}
.btn {
  position: absolute;
  right: 8px;
  top: 120px;
  background: #ffffff;
  border-radius: 25px 25px 25px 25px;

}
</style>
