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
                    id="natid"
                    v-model="userData.national_id"
                    outlined
                    label="National Id"
                    required
                    color="purple"
                  />
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field
                    id="phone"
                    v-model="userData.phone_number"
                    outlined
                    label="Phone"
                    required
                    color="purple"
                  />
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn to="/signupphone" class="mx-0 font-weight-light" color="general">
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

export default {
  data () {
    return {
      userData: {
        national_id: '',
        phone_number: ''
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
