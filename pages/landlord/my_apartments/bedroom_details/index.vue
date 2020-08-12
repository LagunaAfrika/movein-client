p<template>
  <v-layout justify-center align-center column fill-height>
    <v-flex xs12 md12>
      <v-card-title class="text-center txt">
        Bedroom Details
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
      <v-card class="mx-auto mt-4" width="600" height="300">
        <v-card-subtitle class="txt black--text">
          What items does your bedroom have ?
        </v-card-subtitle>
        <v-card-text>
          <v-checkbox v-model="bedroomDetails.mirror" :label="`Dressing Mirror `" />
          <v-checkbox v-model="bedroomDetails.ensuite" :label="`Ensuite `" />
          <v-checkbox v-model="bedroomDetails.balcony" :label="` Balcony`" />
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex md12 xs12 />

    <v-flex md12>
      <v-card-actions>
        <v-spacer />

        <v-btn color="#ec7d10" class="btn white--text " @click="next">
          Next
        </v-btn>
      </v-card-actions>
    </v-flex>
  </v-layout>
</template>
<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  data: () => {
    return {
      bedroomDetails: {
        mirror: false,
        balcony: false,
        ensuite: false
      },
      imagePath: ''
    }
  },
  computed: {
    ...mapGetters(['getProperty'])
  },

  watch: {
    model (val, prev) {
      if (val.length === prev.length) { return }

      this.model = val.map((v) => {
        if (typeof v === 'string') {
          v = {
            text: v,
            color: this.colors[this.nonce - 1]
          }

          this.items.push(v)

          this.nonce++
        }

        return v
      })
    }
  },

  methods: {
    next () {
      this.$store.commit('SET_BEDROOM_DETAILS', {
        mirror: this.bedroomDetails.mirror,
        ensuite: this.bedroomDetails.ensuite,
        balcony: this.bedroomDetails.balcony
      })
      this.addBedRoomDetails(this)
      this.$router.push('/landlord/my_apartments/kitchen_details')
    },
    addBedRoomDetails (context) {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: context.$store.getters.getUser.token
      }
      console.log(context.$store.state.property.properties.house_id, ' house id')
      console.log(context.$store.state.property.properties.bedroom.bedroom_picture, 'bedroom pic')
      const url =
        'https://movein-app.herokuapp.com/property/' +
        context.$store.state.property.properties.property_id + '/' + context.$store.state.property.properties.house_id +
        '/bedroom/'
      axios
        .post(
          url,
          {
            bedroom_picture: context.$store.state.property.properties.bedroom.bedroom_picture,
            wardrobe: true,
            Ensuite: context.bedroomDetails.ensuite,
            wall_lighting: false,
            balcony: context.bedroomDetails.balcony,
            sockets: 3,
            windows: 2,
            length: 12,
            width: 12
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
    }, // add bedroom details,

    edit (index, item) {
      if (!this.editing) {
        this.editing = item
        this.index = index
      } else {
        this.editing = null
        this.index = -1
      }
    },
    filter (item, queryText, itemText) {
      if (item.header) { return false }

      const hasValue = val => (val != null ? val : '')

      const text = hasValue(itemText)
      const query = hasValue(queryText)

      return (
        text
          .toString()
          .toLowerCase()
          .includes(query.toString().toLowerCase())
      )
    },
    chooseImage (e) {
      console.log(e.target.value, 'the event')
      this.imagePath = URL.createObjectURL(event.target.files[0])
      this.$store.commit(
        'SET_BEDROOM_PICTURE',
        URL.createObjectURL(event.target.files[0])
      )
    }
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
.position {
  position: relative;

  left: 2px;
  top: 300px;
}
</style>
