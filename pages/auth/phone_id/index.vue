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
                    id="natid"
                    v-model="userData.national_id"
                    outlined
                    label="National Id"
                    :rules="national_idRules"
                    required
                    color="purple"
                    placeholder="25446587"
                  />
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field
                    id="phone"
                    v-model="userData.phone_number"
                    placeholder="072262901"
                    outlined
                    label="Phone"
                    :rules="phone_numberRules"
                    required
                    color="purple"
                  />
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn id="confirm" to="./verification" class="mx-0 font-weight-light" color="general" @click="submitted">
                    Confirm Phone Number
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
import * as firebase from 'firebase'

export default {
  data () {
    return {
      userData: {
        national_id: '',
        phone_number: ''
      },
      national_idRules: [
        v => !!v || 'National Id is required',
        v => v.length <= 8 || 'National Id must be less than 8 characters'
      ],
      phone_numberRules: [
        v => !!v || 'Phone Number is required',
        v => v.length <= 10 || 'Phone Number must be less than 10 characters'
      ],
      isSubmitted: false
    }
  },
  methods: {
    submitted () {
      this.isSubmitted = true
      this.send_auth_code()
    },

    send_auth_code () {
      firebase.auth().languageCode = 'it'
      // To apply the default browser preference instead of explicitly setting it.
      firebase.auth().useDeviceLanguage()
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('confirm', {
        size: 'invisible',
        callback (response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit()
          console.log('Im in')
        }
      })
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
