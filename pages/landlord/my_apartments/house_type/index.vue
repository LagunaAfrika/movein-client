<template>
  <v-container fluid>
    <v-layout justify-center align-center column class="txt">
      <v-flex xs12 md12>
        <v-card color="#ffffff" width="600">
          <v-overflow-btn
            v-model="houseData.selected"
            class="my-2"
            :items="house_types"
            label="Select house type"
            editable
            item-value="text"
          />
          <v-flex xs12 md12>
            <v-list-item>
              <v-list-item-title>Bathrooms</v-list-item-title>

              <v-card-actions>
                <v-layout justify-center align-center>
                  <v-btn tile @click="minusBathroom">
                    -
                  </v-btn>

                  <v-btn tile>
                    {{ houseData.bathrooms }}
                  </v-btn>

                  <v-btn tile @click="addBathroom">
                    +
                  </v-btn>
                </v-layout>
              </v-card-actions>
            </v-list-item>
          </v-flex>
          <v-flex xs12 md12 class="txt">
            <v-list-item>
              <v-list-item-title>Rent Amount</v-list-item-title>

              <v-card-actions>
                <v-text-field
                  id="rent_amount"
                  v-model="houseData.rent_amount"
                  class="mt-4"
                  solo
                  label="Rent Amount"
                  required
                  color="#0091ad"
                />
              </v-card-actions>
            </v-list-item>
          </v-flex>
        </v-card>
      </v-flex>

      <v-flex xs12 md12>
        <v-card color="#ffffff" class="mt-4" min-width="200" />
      </v-flex>

      <v-flex xs12 text-xs-right>
        <v-btn class="mt-6 white--text" color="#ec7d10" @click="next">
          next
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  name: 'HouseType',
  data: () => ({
    houseData: {
      rent_amount: '',
      selected: '',
      bathrooms: 0
    },
    loading: false,
    house_types: ['Bedsitter', 'One bedroom']
  }),

  computed: {
    ...mapGetters(['getProperty'])
  },

  methods: {
    next () {
      this.$store.commit('SET_HOUSE_DESCRIPTION', {
        bathrooms: this.houseData.bathrooms,
        description: this.houseData.description,
        house_type: this.houseData.selected
      })
      this.$store.commit('SET_RENTAMOUNT_DETAILS', this.houseData.rent_amount)
      this.addHouseDetails(this)
      this.$router.push('/landlord/my_apartments/bedroom_details')
    },
    set () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    minusBathroom () {
      this.houseData.bathrooms--
    },
    addBathroom () {
      this.houseData.bathrooms++
    },
    addHouseDetails (context) {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: context.$store.getters.getUser.token
      }
      console.log(context.$store.state.property.properties.property_id, 'id')
      const url =
        'https://movein-app.herokuapp.com/property/' +
        context.$store.state.property.properties.property_id +
        '/house/'
      axios
        .post(
          url,
          {
            house_type: '1 bedroom',
            washrooms: 1,
            smoke_detector: true,
            flowing_water: true,
            flooring_finish: 'Wooden tiles',
            rent: 15000
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
          // const token = response.data.token
          // sessionStorage.setItem('token', token)
          // eslint-disable-next-line no-console
          // console.log(sessionStorage.getItem)
        })
        .catch(function (error) {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    } // create user,
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
          href:
            'https://fonts.googleapis.com/css?family=Comfortaa&display=swap'
        }
      ]
    }
  }
}
</script>
    <style scoped>
.next {
  position: absolute;
  width: 414px;
  height: 634px;
  left: -1px;
  top: 289px;

  background: #ffffff;
  border-radius: 25px 25px 0px 0px;
}
.txt {
  font-family: "Comfortaa", cursive;
}
.btn {
  position: relative;

  left: 2px;
  top: 300px;
}
</style>
