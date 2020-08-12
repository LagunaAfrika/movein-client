<template>
  <v-layout justify-center align-center column fill-height class="txt">
    <v-flex xs12 md12>
      <v-card-title class="text-center txt">
        Kitchen Details
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
      <v-card class="mx-auto mt-4" width="600">
        <v-card-subtitle class="txt black--text">
          What items does your kitchen have ?
        </v-card-subtitle>
        <v-card-text class="ml-12">
          <v-checkbox v-model="kitchenDetails.wall_tiles" :label="` Wall Tiles`" />
          <v-checkbox v-model="kitchenDetails.wall_cabinets" :label="` Wall Cabinets`" />
          <v-checkbox v-model="kitchenDetails.wall_shelves" :label="` Wall Shelves`" />
          <v-checkbox v-model="kitchenDetails.cooker_sockets" :label="` Cooker Sockets`" />
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex md12 xs12 />

    <v-flex md12>
      <v-card-actions>
        <v-btn color="#ec710d" class="btn white--text" @click="next">
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
      kitchenDetails: {
        wall_tiles: false,
        wall_cabinates: false,
        wall_shelves: false,
        cooker_sockets: false
      },

      overlay: true,
      imagePath: ''
    }
  },

  computed: {
    ...mapGetters(['getProperty'])
  },
  methods: {
    next () {
      this.$store.commit('SET_KITCHEN_DETAILS', {
        cooker_sockets: this.kitchenDetails.cooker_sockets,
        wall_cabinets: this.kitchenDetails.wall_cabinets,
        wall_shelves: this.kitchenDetails.wall_shelves,
        wall_tiles: this.kitchenDetails.wall_tiles
      })
      this.addKitchenDetails(this)
      this.$router.push('/landlord/my_apartments/sitting_room_details')
    },
    chooseImage (e) {
      console.log(e.target.value, 'the event')
      this.imagePath = URL.createObjectURL(event.target.files[0])
      this.$store.commit(
        'SET_KITCHEN_PICTURE',
        URL.createObjectURL(event.target.files[0])
      )
    },
    addKitchenDetails (context) {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: context.$store.getters.getUser.token
      }
      console.log(context.$store.state.property.properties.house_id, ' house id')
      console.log(context.$store.state.property.properties.kitchen.kitchen_picture, 'kitchen pic')
      const url =
        'https://movein-app.herokuapp.com/property/' +
        context.$store.state.property.properties.property_id + '/' + context.$store.state.property.properties.house_id +
        '/kitchen/'
      axios
        .post(
          url,
          {
            kitchen_picture: context.$store.state.property.properties.kitchen.kitchen_picture,
            kitchen_layout: 'american kitchen',
            countertops: 'quartz',
            wall_tiles: true,
            cabinets: true,
            wall_cabinets: true,
            wall_shelves: false,
            balcony: true,
            cooker_sockets: true,
            windows: 1,
            length: 8,
            width: 7
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
