<template>
  <v-content>
    <v-container fill-height fluid>
      <v-layout align-center justify-center class="txt">
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar color="general">
              <v-toolbar-title>Log In</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  ref="email"
                  v-model="email"
                  :rules="[() => !!email || 'This field is required']"
                  prepend-icon="mdi-account"
                  color="#0091ad"
                  label="Login"
                  placeholder="example@gmail.com"
                  required
                />
                <v-text-field
                  ref="password"
                  v-model="password"
                  :rules="[() => !!password || 'This field is required']"
                  :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="showPassword ? 'text' : 'password'"
                  prepend-icon="mdi-lock"
                  color="#0091ad"
                  label="Password"
                  placeholder="*********"
                  counter
                  required
                  @keydown.enter="login"
                  @click:append="showPassword = !showPassword"
                />
              </v-form>
            </v-card-text>
            <v-divider class="mt-5" />
            <v-card-actions>
              <v-spacer />
              <v-btn align-center justify-center color="general" class="mx-0 yellow--text text--darken-4" @click="login">
                Login
              </v-btn>
            </v-card-actions>
            <v-snackbar v-model="snackbar" :color="color" :top="true">
              {{ errorMessages }}
              <v-btn color=" #ec7d10" flat @click="snackbar = false">
                Close
              </v-btn>
              <v-btn color=" #ec7d10" @click="snackbar = false">
                Close
              </v-btn>
            </v-snackbar>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      email: '',
      password: '',
      errorMessages: 'Incorrect login info',
      snackbar: false,
      color: 'general',
      showPassword: false
    }
  },

  // Sends action to Vuex that will log you in and redirect to the dash otherwise, error
  methods: {
    login () {
      console.log(this)
      this.loginUser(this)
    },
    loginUser (context) {
      axios
        .post('https://movein-app.herokuapp.com/login/', {
          email: this.email,
          password: this.password

        })
        .then(function (response) {
          // eslint-disable-next-line no-console
          console.log(response.data.data[0].user_role)
          console.log(response.data.data[0].jwt_token)
          context.$store.commit('SET_USER_ID', response.data.data[0].jwt_token)
          if (response.data.data[0].user_role === 'tenant') { context.$router.push('../tenant/category_results') } else { context.$router.push('../landlord/') }

        //  context.$router.push('../tenant/advanced_results')
          // sessionStorage.setItem('token', token)
          // eslint-disable-next-line no-console
          // console.log(sessionStorage.getItem)
        })
        .catch(function (error) {
          // eslint-disable-next-line no-console
          console.log(error)
          // context.errorMessages = error.response.data.error
        })
    /*  this.$store
        .dispatch('login', { email, password })
        .then(() => this.$router.push('/dashboard'))
        .catch((err) => {
          console.log(err)
          this.snackbar = true
        }) */
    }

  },
  metaInfo () {
    return {
      title: 'Super Secret | Login'
    }
  }
}
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
</style>
