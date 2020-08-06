/* eslint-disable no-console */
<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap class="txt">
      <v-flex xs12 md8>
        <v-form id="app" action="/signup" method="post">
          <v-container py-0>
            <v-layout wrap>
              <v-flex xs12 md12>
                Full Name
                <v-text-field
                  id="fullname"
                  v-model="fullname"
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
                  v-model="email"
                  outlined
                  type="email"
                  label="Email Address"
                  :rules="emailRules"
                  required
                  color="#0091ad"
                />
              </v-flex>
              <v-flex xs12 md12>
                Phone Number
                <v-text-field
                  id="phone"
                  v-model="phonenumber"
                  placeholder="072262901"
                  outlined
                  required
                  color="#0091ad"
                />
              </v-flex>
              <v-flex xs12 md12>
                Password
                <v-text-field
                  id="password"
                  v-model.lazy="password"
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
                <p>Sign up as </p>
                <v-radio-group v-model="selected" row>
                  <v-radio label="landlord" value="landlord" />
                  <v-radio label="tenant" value="tenant" />
                </v-radio-group>
              </v-flex>

              <v-flex xs12 text-xs-right>
                <v-item-group row>
                  <v-btn class="mx-0 white--text" large color="#ec7d10" @click="submitted">
                    Sign Up
                  </v-btn>
                  <v-btn
                    to="/tenant/advanced_results/details_page"
                    class="mx-0 yellow--text text--darken-4"
                    large
                    text
                    outlined
                  >
                    Log in
                  </v-btn>
                </v-item-group>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import axios from 'axios'

export default {
  name: 'SignUp',
  data: () => ({
    email: '',
    password: '',
    fullname: '',
    phonenumber: '',
    selected: '',
    // usertype: ['landlord', 'tenant'],

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
    ],
    isSubmitted: false
  }), // data

  methods: {
    submitted () {
      // this.isSubmitted = true;

      console.log(this)
      this.createUser(this)
      this.$router.push('/auth/verification')
    },
    /* firebase Login
    userSignUp: function(err) {
      this.$store
        .dispatch("signUp", {
          email: this.userData.email,
          password: this.userData.password
        })
        .then(() => {
          this.userData.email = "";
          this.userData.password = "";
          this.$router.push("/auth/phone_id");

        })
        .catch(err => {
          alert(err.message);
        });
    }, */

    createUser (context) {
      axios
        .post('https://movein-app.herokuapp.com/signup/', {
          user_picture: 'some link here',
          full_name: this.fullname,
          email: this.email,
          phone_number: this.phonenumber,
          password: this.password,
          user_type: this.selected,
          verified: false

        })
        .then(function (response) {
          // eslint-disable-next-line no-console
          console.log(response.data.verification_code)
          // eslint-disable-next-line no-console
          console.log(context)
          context.$store.commit('SET_USER', { fullname: context.fullname, email: context.email, phonenumber: context.phonenumber, usertype: context.selected, verificationCode: response.data.verification_code, password: context.password })
          //   console.log(response.data['verification code'])
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
  } // methods
}
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
</style>
