/* eslint-disable */
<template>
  <v-container fluid>
    <v-layout justify-center align-center column>
      <v-flex xs12 md12>
      <v-flex xs12 md12>
                <v-text-field
                  id="location"
                  ref="autocomplete"
                  v-model="address"
                  outlined
                  required
                  label="Plese enter location of your hostel"
                  color="#ffffff"
                  type="text"
                  placeholder="Kasarani"
                />
                </v-flex>
                <v-flex xs12 md12>

                <p class="mb-4">
                  Hostel Location : {{ address }}
                </p>
                </v-flex>
                <v-flex xs12 md8>
                <v-btn @click="locatorButtonPressed">
                  <v-icon color="#0091ad">
                    mdi-map-marker<v-icon
                      v-btn
                    />
                  </v-icon>({{ userData.lat }}, {{ userData.long }})
                </v-btn>
                </v-flex>
              <v-flex xs12 md12>
                <v-btn  class="btn" to="/landlord/basic_details/rooms_available" color="#ec0868">
                  Confirm Location
                </v-btn>
              </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      address: '',
      userData: {
        lat: '',
        long: ''

      }
    }
  },
  // user's longitude and latitude.
  methods: {
    locatorButtonPressed () {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.userData.lat = position.coords.latitude
          this.userData.long = position.coords.longitude
        },
        (error) => {
          console.log(error.message)
        }
      )
    }
  }
}
</script>
<style scoped>
.btn {
  position: relative;
  
  left: 2px;
  top: 300px;
}

</style>
