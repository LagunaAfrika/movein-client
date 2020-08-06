<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card color="pink" title="Edit Profile" text="Complete your profile">
          <v-form id="app" action="/signup" method="post">
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md12>
                  National Id
                  <v-text-field
                    id="natid"
                    v-model="userData.national_id"
                    outlined
                    label=" 22637846"
                    required
                    color="#0091ad"
                  />
                </v-flex>

                <v-flex xs12 md12>
                  Enter 6 digit code
                  <v-text-field v-model="userData.verificationCode" type="number" outlined label="324-343" required color="#0091ad" />
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn to="" large class="mx-0 white--text" color="#ec7d10" @click="submitted">
                    Confirm
                  </v-btn>
                  <v-btn large outlined class="mx-0" color="#ec7d10">
                    Resend code
                  </v-btn>
                  {{ getUser.national_id }}
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
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      userData: {
        phone_number: '',
        national_id: '',
        verificationCode: 1
      },
      isSubmitted: false,
      condition: false
    }
  },
  computed: {
    ...mapGetters([
      'getUser'
    ])
  },

  methods: {
    submitted () {
      this.isSubmitted = true
      // if (this.userData.verificationCode == getUser.verificationCode) {
      //   condition = true
      // }
      console.log(this.condition)
      if (Number(this.userData.verificationCode.trim()) === this.$store.getters.getUser.verificationCode) {
        this.condition = true
        console.log(this.condition + this.userData.verificationCode + this.$store.getters.getUser.verificationCode)
      } else {
        console.log(this.condition + ' ' + typeof (this.userData.verificationCode) + ' names is ' + typeof (this.$store.getters.getUser.verificationCode))
      }
      this.createUser(this)
    },

    createUser (context) {
      axios
        .post('https://movein-app.herokuapp.com/signup/', {
          user_picture: 'some link here',
          full_name: context.$store.getters.getUser.fullname,
          email: context.$store.getters.getUser.email,
          phone_number: context.$store.getters.getUser.phonenumber,
          password: context.$store.getters.getUser.password,
          user_type: context.$store.getters.getUser.usertype,
          verified: this.condition

        })
        .then(function (response) {
          // eslint-disable-next-line no-console
          console.log(response.data)
          // eslint-disable-next-line no-console

          //   this.$store.commit('SET_USER', { fullname: this.fullname, email: this.email, phonenumber: this.phonenumber, usertype: this.selected, verificationCode: response.data['verification code'] })
          //   console.log(response.data['verification code'])
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
