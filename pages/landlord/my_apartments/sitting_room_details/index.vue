<template>
  <v-layout justify-center align-center column fill-height>
    <v-flex xs12 md12>
      <v-card-title class="text-center txt">
        Living Room Details
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
    <v-flex md12 xs12>
      <v-card class="mx-auto mt-4" width="600" height="300">
        <v-card-subtitle class="txt black--text">
          What items does your Living have ?
        </v-card-subtitle>

        <v-card-text class="ml-12">
          <v-checkbox v-model="livingDetails.wall_lighting" :label="` Wall lights`" />
          <v-checkbox v-model="livingDetails.balcony" :label="` Balcony`" />
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex md12>
      <v-card-actions>
        <v-spacer />

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
      livingDetails: {
        balcony: false,
        wall_lighting: false
      },
      imagePath: ''

    }
  },
  computed: {
    ...mapGetters(['getProperty'])
  },
  methods: {
    next () {
      this.$store.commit('SET_LIVINGROOM_DETAILS', {

        balcony: this.livingDetails.balcony,
        wall_lighting: this.livingDetails.wall_lighting
      })
      this.addSittingRoomDetails(this)
      this.$router.push('/landlord/my_apartments/washroom_details')
    },
    chooseImage (e) {
      console.log(e.target.value, 'the event')
      this.imagePath = URL.createObjectURL(event.target.files[0])
      this.$store.commit(
        'SET_LIVINGROOM_PICTURE',
        URL.createObjectURL(event.target.files[0])
      )
    },
    addSittingRoomDetails (context) {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: context.$store.getters.getUser.token
      }
      console.log(context.$store.state.property.properties.house_id, ' house id')
      console.log(context.$store.state.property.properties.living.living_picture, 'living room pic')
      const url =
        'https://movein-app.herokuapp.com/property/' +
        context.$store.state.property.properties.property_id + '/' + context.$store.state.property.properties.house_id +
        '/sittingroom/'
      axios
        .post(
          url,
          {
            sitting_room_picture: context.$store.state.property.properties.living.living_picture,
            wall_lighting: true,
            balcony: true,
            sockets: 3,
            windows: 2,
            length: 15,
            width: 11
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
Foo
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
