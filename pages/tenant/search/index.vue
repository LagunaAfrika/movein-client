/* eslint-disable no-console */
<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card color="pink" title="Edit Profile" text="Complete your profile">
          <v-form id="app" action="/signup" method="post">
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md12 />
                <v-flex xs12 md12>
                  Location
                  <v-text-field
                    id="Location"
                    v-model="queryData.location"
                    :append-icon="'mdi-map-marker'"
                    outlined
                    type="text"
                    label="Enter location, provice or Surburb"
                    color="#0091ad"
                  />
                </v-flex>
                <v-flex xs12 md12>
                  Bedrooms
                  <v-text-field
                    id="bedrooms"
                    v-model="queryData.bedrooms"
                    :append-icon="'mdi-bed'"
                    outlined
                    type="number"
                    label="Number of beds"
                    color="#0091ad"
                  />
                </v-flex>
                <v-flex xs12 md12>
                  Bathrooms
                  <v-text-field
                    id="bathrooms"
                    v-model="queryData.bath"
                    :append-icon="'mdi-shower'"
                    outlined
                    type="number"
                    label="Number of bathrooms"
                    color="#0091ad"
                  />
                </v-flex>
                <v-flex xs12 md12>
                  Max price
                  <v-text-field
                    id="price"
                    v-model="queryData.price"
                    :append-icon="'mdi-cash'"
                    outlined
                    type="text"
                    label="Search by location"
                    color="#0091ad"
                  />
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-item-group row>
                    <v-btn
                      class="mx-0 white--text"
                      large
                      rounded
                      color="#0091AD"
                      @click="submitted"
                    >
                      Search
                    </v-btn>
                  </v-item-group>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      queryData: {
        location: '',
        price: '',
        beds: '',
        bathrooms: ''
      },
      show3: false,
      password: 'Password',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters'
      },
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 50 || 'Name must be less than 10 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }
  }, // data
  methods: {
    submitted () {
      this.isSubmitted = true
      this.search_apartment()
    },
    search_apartment () {
      axios.post('https://movein-app.herokuapp.com/search/', {
        location: this.queryData.location,
        price: this.queryData.price,
        beds: this.queryData.beds,
        bathrooms: this.queryData.bathrooms

      /* full_name: 'some guy',
        email: 'someguy@gmail.com',
        password: '12345',
        user_type: 'new_tenant'

        // to="/auth/phone_id"
        */
      })
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
          console.log(error.response)
        })
    } // create user,
  } // methods
}
</script>
<style scoped>
.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
