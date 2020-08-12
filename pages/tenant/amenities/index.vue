<template>
  <v-layout justify-center align-center column class="txt">
    <v-flex xs12 md12 class="size mt-4">
      <v-card-title>Amenities you want</v-card-title>
      <v-img class="image" src="/check.svg" />

      <v-card-title> Click on all you want</v-card-title>

      <v-chip-group
        v-model="tenantData.picked"
        active-class="yellow darken-4 white--text"
        column
        multiple
      >
        <v-chip
          v-for="amenity in tenantData.amenities"
          :key="amenity"
          :value="amenity"
        >
          {{ amenity }}
        </v-chip>
      </v-chip-group>
    </v-flex>

    <v-flex xs12 text-xs-right>
      <v-card-actions>
        <v-btn class="btn" color="yellow darken-4 white--text" @click="next">
          search
        </v-btn>
      </v-card-actions>
    </v-flex>
  </v-layout>
</template>
<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  name: 'BedBath',
  data: () => ({
    tenantData: {
      rent_amount: '',
      selected: '',
      bathrooms: 0,

      amenities: [
        'Borehole',
        'Generator',
        'Security',
        'Balcony',
        'Pet Friendly'
      ]
    },
    loading: false,
    house_types: ['Bedsitter', 'One bedroom']
  }),

  methods: {
    next () {
      this.$store.commit('SET_AMENITIES', this.tenantData.picked)
      this.findHouse(this)
      this.$router.push('/tenant/category_list')
    },
    set () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    minusBathroom () {
      this.tenantData.bathrooms--
    },
    addBathroom () {
      this.tenantData.bathrooms++
    },
    findHouse (context) {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: context.$store.getters.getUser.token
      }
      // console.log(context.$store.state.property.properties.house_id, ' house id')
      //   console.log(context.$store.state.property.properties.bedroom.bedroom_picture, 'bedroom pic')
      const url =
        'https://movein-app.herokuapp.com/search/'
      axios
        .post(
          url,
          {
            property_type: 'apartment',
            area: 'Juja',
            house_type: '1 bedroom',
            rent: 15000
          }
        )
        .then(function (response) {
          // eslint-disable-next-line no-console
          // console.log(response.data)
          // eslint-disable-next-line no-console
          console.log(response)
          console.log(response.data)

          context.$store.commit(
            'SET_SEARCH_RESULTS',
            response.data[0].payload
          )

          context.$router.push('/tenant/category_list')

          // const token = response.data.token
          // sessionStorage.setItem('token', token)
          // eslint-disable-next-line no-console
          // console.log(sessiontorage.getItem)
        })
        .catch(function (error) {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    } // add bedroom details,
  },
  head () {
    return {
      script: [
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Comfortaa&display=swap'
        }
      ]
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
.image {
  z-index: 1;
}
.size {
  width: 286px;
  height: 250px;
}
</style>
