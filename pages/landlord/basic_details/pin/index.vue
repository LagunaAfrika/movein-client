/* eslint-disable */
<template>
  <v-container fill-height fluid>
    <v-layout justify-center align-center column class="txt">
      <v-flex xs12 md12>
         <v-card-title class=" txt">Is this your House Location </v-card-title>
       
                </v-flex>
                <v-flex xs12 md12>
                </v-flex>
                <v-flex xs12 md8>
                <v-btn @click="locatorButtonPressed">
                  <v-icon color="#ec7d10">
                    mdi-map-marker<v-icon
                      v-btn
                    />
                  </v-icon>({{ userData.lat }}, {{ userData.long }})
                </v-btn>
                </v-flex>
      </v-flex>
    <div class="mapouter">
      <div class="gmap_canvas mt-2">
        <iframe
          id="gmap_canvas"
          width="100%"
          height="400"
          src="https://maps.google.com/maps?q=google&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        />
      </div>
    </div>
      <v-flex xs12 md12>
                <v-btn color="#ec7d10"  class="mt-4 white--text" to="/landlord/basic_details/rooms_available">
                  OK 
                </v-btn>
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
.mapouter {
  text-align:right;
  height:80%;
  width:100%;
  position: relative;
}
.gmap_canvas {
  overflow:hidden;
  background:none!important;
  height:80%;
  width:100%;
}
.txt {
  font-family: "Comfortaa", cursive;
}
</style>
