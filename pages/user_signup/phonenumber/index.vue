<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card color="pink" title="Edit Profile" text="Complete your profile">
          <v-form id="app" action="/signup" method="post" @submit="checkForm">
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md12>
                  National Id
                  <v-text-field
                    id="natid"
                    v-model="userData.natid"
                    outlined
                    label=" 22637846"
                    required
                    color="#0091ad"
                  />Phone Number
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field
                    id="phone"
                    v-model="userData.phone"
                    outlined
                    label="+254719235608"
                    required
                    color="#0091ad"
                  />Enter 6 digit code
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field outlined label="324-343" required color="#0091ad" />
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn large outlined rounded class="mx-0" color="#ec0686">
                    Resend
                  </v-btn>
                  <v-btn large rounded class="mx-0 white--text" color="#ec0686">
                    Confirm
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
