<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card color="pink" title="Edit Profile" text="Complete your profile">
          <v-form id="app" action="/signup" method="post" @submit="checkForm">
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md12>
                  <v-text-field
                    id="name"
                    v-model="userData.email"
                    outlined
                    label="Name"
                    required
                    color="purple"
                  />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field outlined :error-messages="emailErrors" label="Email Address" required color="purple" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field outlined label="Phone Number" color="purple" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field v-model="userData.address" label="Address" outlined required color="purple" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field
                    id="password"
                    v-model.lazy="userData.password"
                    label="Password"
                    outlined
                    required
                    color="purple"
                  />
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn class="mx-0 font-weight-light" color="general" @click.prevent="submitted">
                    Sign Up
                  </v-btn>
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <button v-google-signin-button="clientId" class="google-signin-button">
                    Continue with Google
                  </button>
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn class="mx-0 font-weight-light" color="general">
                    Sign Up With Facebook
                  </v-btn>
                  <div v-if="isSubmitted" class="card">
                    <div class="card-body">
                      <h4 class="card-title">
                        Form Data
                      </h4>

                      <p>Mail: <b>{{ userData.email }}</b></p>
                      <p>Password: <b>{{ userData.password }}</b></p>
                      <p>Adress: <b>{{ userData.address }}</b></p>
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
        address: ''
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
