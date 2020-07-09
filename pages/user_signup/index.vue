<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card color="pink" title="Edit Profile" text="Complete your profile">
          <v-form id="app" action="/signup" method="post">
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md12>
                  <v-text-field
                    id="full_name"
                    v-model="userData.full_name"
                    outlined
                    label="FullName"
                    required
                    color="#0091ad"
                  />
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field outlined label="Email Address" required color="#0091ad" />
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field
                    id="password"
                    v-model.lazy="userData.password"
                    label="Password"
                    outlined
                    required
                    color="#0091ad"
                  />
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn to="/user_signup/phonenumber" class="mx-0 white--text" rounded color="#ec0868" @click="submitted">
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

export default {
  data () {
    return {
      userData: {
        email: '',
        password: '',
        full_name: ''
      }
    }
  },
  watch: {
    full_name (newFullname) {
      localStorage.full_name = newFullname
    }
  },
  mounted () {
    if (localStorage.email) {
      this.email = localStorage.email
    }
    if (localStorage.password) {
      this.password = localStorage.password
    }
  },
  methods: {
    submitted () {
      localStorage.full_name = this.full_name
      localStorage.email = this.email
      localStorage.password = this.password
    }
  }

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
