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
                    required
                    color="#0091ad"
                  />
                </v-flex>
                <v-flex xs12 md12>
                  Email
                  <v-text-field
                    outlined
                    type="email"
                    label="Email Address"
                    required
                    color="#0091ad"
                  />
                </v-flex>
                <v-flex xs12 md12>
                  Password
                  <v-text-field
                    id="password"
                    v-model.lazy="userData.password"
                    label="Password"
                    outlined
                    required
                    color="#0091ad"
                  />
                </v-flex>
                <v-flex xs12 md12>
                  <p> Sign up as {{ userData.user_type }}</p>
                  <v-radio-group v-model="userData.user_type" row>
                    <v-radio label="landlord" :value="Landlord" />
                    <v-radio label="tenant" :value="Tenant" />
                  </v-radio-group>
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn
                    to="/users/phone_id"
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
export default {
  data () {
    return {
      userData: {
        email: '',
        password: '',
        full_name: '',
        user_type: ''
      }
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
