<template>
  <v-layout justify-center align-center column fill-height>
    <v-flex xs12 md12>
      <v-card-title class="text-center txt">
        Washroom Room Details
      </v-card-title>

      <v-row align="center" justify="center">
        <v-img
          ref="photo"
          :src="imagePath"
          aspect-ratio="1"
          class="grey lighten-2"
          max-width="400"
          max-height="200"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center" />
          </template>
        </v-img>
      </v-row>

      <v-card-actions class="mt-2">
        <input id="imgInp" type="file" @change="chooseImage">
      </v-card-actions>
    </v-flex>
    <v-flex xs12 md12>
      <v-card class="mx-auto" width="600" height="300">
        <v-card-subtitle class="txt black--text">
          What items does your Washroom have ?
        </v-card-subtitle>
        <v-card-text>
          <v-checkbox v-model="washroomDetails.wall_lighting" :label="` Wall lights`" />

          <v-checkbox
            v-model="washroomDetails.bath_tub"
            class="txt"
            :label="`Bath Tub`"
            value="Bath Tub"
          />
          <v-checkbox
            v-model="washroomDetails.electric_heater"
            class="txt"
            :label=" `Electric Heater`"
            value="Electric Heater"
          />
          <v-checkbox
            v-model="washroomDetails.solar_heater"
            class="txt"
            :label="`Solar Heater`"
            value="Solar Heater"
          />
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex md12 xs12 />

    <v-flex md12>
      <v-card-actions>
        <v-btn color="#ec7d10" class="btn white--text" @click="next">
          Next
        </v-btn>
      </v-card-actions>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  data: () => {
    return {
      washroomDetails: {
        wall_lighting: false,
        bath_tub: false,
        electric_heater: false,
        solar_heater: false
      },
      imagePath: ''
    }
  },
  computed: {
    ...mapGetters(['getProperty'])
  },
  methods: {
    next () {
      this.$store.commit('SET_WASHROOM_DETAILS', {
        wall_lighting: this.washroomDetails.wall_lighting,
        bath_tub: this.washroomDetails.bath_tub,
        electric_heater: this.washroomDetails.electric_heater,
        solar_heater: this.washroomDetails.solar_heater
      })
      this.addWashroomDetails(this)
      this.$router.push('/landlord/my_apartments/my_listing')
    },
    chooseImage (e) {
      console.log(e.target.value, 'the event')
      this.imagePath = URL.createObjectURL(event.target.files[0])
      this.$store.commit(
        'SET_WASHROOM_PICTURE',
        URL.createObjectURL(event.target.files[0])
      )
    },
    addWashroomDetails (context) {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: context.$store.getters.getUser.token
      }
      console.log(context.$store.state.property.properties.house_id, ' house id')
      console.log(context.$store.state.property.properties.washroom.washroom_picture, 'living room pic')
      const url =
        'https://movein-app.herokuapp.com/property/' +
        context.$store.state.property.properties.property_id + '/' + context.$store.state.property.properties.house_id +
        '/washroom/'
      axios
        .post(
          url,
          {
            washroom_picture: context.$store.state.property.properties.washroom.washroom_picture,
            washroom_type: 'combined bathroom and toilet',
            toilet_type: 'Sit on flushing toilet',
            shower_type: 'instant hot shower head',
            water_heater: 'electric water heater',
            wall_tiles: true,
            soap_holder: true,
            tissue_holder: true,
            bathtub: false,
            mirror: true,
            length: 5,
            width: 4
          },
          {
            headers
          }
        )
        .then(function (response) {
          // eslint-disable-next-line no-console
          // console.log(response.data)
          // eslint-disable-next-line no-console
          console.log(response)
          console.log(response.data)

          // const token = response.data.token
          // sessionStorage.setItem('token', token)
          // eslint-disable-next-line no-console
          // console.log(sessiontorage.getItem)
        })
        .catch(function (error) {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    } // add house details,
  }
}
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
.btn {
  position: fixed;
  z-index: 100;

  left: 44%;
  top: 85%;
  bottom: 50px;
}
</style>
