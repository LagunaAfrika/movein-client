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
                    id="fullname"
                    v-model="userData.email"
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
                  <v-btn to="/user_signup/phonenumber" class="mx-0 white--text" rounded color="#ec0868" @click.prevent="submitted">
                    Sign Up
                  </v-btn>
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <div v-if="isSubmitted" class="card">
                    <div class="card-body">
                      <h4 class="card-title">
                        Form Data
                      </h4>

                      <p>Mail: <b>{{ userData.email }}</b></p>
                      <p>Password: <b>{{ userData.password }}</b></p>
                      <p>Adress: <b>{{ userData.fullname }}</b></p>
                    </div>
                  </div>
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
        fullname: ''
      },
      isSubmitted: false
    }
  },
  methods: {
    submitted () {
      this.isSubmitted = true
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
