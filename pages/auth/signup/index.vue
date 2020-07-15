/* eslint-disable no-console */
<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card color="pink" title="Edit Profile" text="Complete your profile">
          <v-form id="app" action="/signup" method="post">
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md12>
                  Full Name
                  <v-text-field
                    id="full_name"
                    v-model="userData.full_name"
                    outlined
                    label="FullName"
                    :rules="nameRules"
                    required
                    color="#0091ad"
                  />
                </v-flex>
                <v-flex xs12 md12>
                  Email
                  <v-text-field
                    id="email"
                    v-model="userData.email"
                    outlined
                    type="email"
                    label="Email Address"
                    :rules="emailRules"
                    required
                    color="#0091ad"
                  />
                </v-flex>
                <v-flex xs12 md12>
                  Password
                  <v-text-field
                    id="password"
                    v-model.lazy="userData.password"
                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show3 ? 'text' : 'password'"
                    hint="At least 8 characters"
                    value="********"
                    label="Password"
                    outlined
                    required
                    color="#0091ad"
                    @click:append="show3 = !show3"
                  />
                </v-flex>
                <v-flex xs12 md12>
                  <p> Sign up as {{ userData.user_type }}</p>
                  <v-radio-group v-model="userData.user_type" row>
                    <v-radio label="landlord" value="landlord" />
                    <v-radio label="tenant" value="tenant" />
                  </v-radio-group>
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn
                    class="mx-0 white--text"
                    large
                    rounded
                    color="#ec0868"
                    @click="submitted"
                  >
                    Sign Up
                  </v-btn>
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
      userData: {
        email: '',
        password: '',
        full_name: '',
        user_type: ''
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
      this.createUser()
    },
    createUser () {
      axios.post('https://movein-app.herokuapp.com/signup/', {
        full_name: this.userData.full_name,
        email: this.userData.email,
        password: this.userData.password,
        user_type: this.userData.user_type

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
