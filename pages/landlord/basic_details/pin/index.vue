/* eslint-disable */
<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap class="mt-6">
      <v-flex xs12 md8>
        <v-form id="app" action="/signup" method="post">
          <v-container py-0>
            <v-layout wrap>
              <v-flex xs12 md4>
                <v-text-field
                  id="location"
                  ref="autocomplete"
                  v-model="address"
                  outlined
                  required
                  label="Plese enter location of your hostel"
                  color="#0091ad"
                  type="text"
                  placeholder="Kasarani"
                />
                <p class="mb-4">
                  Hostel Location : {{ address }}
                </p>
                <v-btn @click="locatorButtonPressed">
                  <v-icon color="#0091ad">
                    mdi-map-marker<v-icon
                      v-btn
                    />
                  </v-icon>({{ userData.lat }}, {{ userData.long }})
                </v-btn>
              </v-flex>
              <v-flex xs12 md4>
                <v-btn to="/landlord/basic_details/rooms_available" color="#ec0868">
                  Confirm Location
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
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
