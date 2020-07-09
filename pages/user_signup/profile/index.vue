/* eslint-disable vue/require-default-prop */
/* eslint-disable vue/require-default-prop */
<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card class="v-card-profile">
          <v-avatar slot="offset" class="mx-auto d-block" size="130">
            <img
              src="https://bookingagentinfo.com/wp-content/uploads/2014/12/Travis-Scott-Contact-Information.jpg"
            >
          </v-avatar>
          <v-card-text class="text-xs-center">
            <h1 class="category text-gray font-weight-thin mb-3">
              Landlord Eureka Apartments
            </h1>
            <h2 class="card-title font-weight-light">
              Murimi Kasee
            </h2>
            <v-btn rounded class="white--text" color="#ec0686">
              Upload
            </v-btn>
          </v-card-text>
        </material-card>
      </v-flex>
      <v-flex xs12 md8>
        <material-card color="general" title="Edit Profile" text="Complete your profile">
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md12>
                  <v-text-field label="Name" class="#0091ad" />
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field label="Email Address" class="#0091ad" :details="childData" @inputData="updateDetails" />
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field label="Phone Number" class="#0091ad" />
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field label="National Id" class="#0091ad" />
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn rounded class="mx-0 white--text" color="#ec0868">
                    Update Profile
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
// import SignUp from './components/SignUp'
export default {
  name: 'Users',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    details: {
      type: String
    }
    // eslint-disable-next-line vue/require-default-prop
    // email: String,
    // eslint-disable-next-line vue/require-default-prop
    // address: String
    // eslint-disable-next-line vue/require-default-prop
    // phone: Number
  },
  data: () => {
    return {
      childData: '',
      arry: []
    }
  },
  watch: {
    details: () => {
      this.details.push(this.details)
    }
  },
  methods: {
    updateDetails (variable) {
      this.childData = variable
    }
  }
}
</script>
