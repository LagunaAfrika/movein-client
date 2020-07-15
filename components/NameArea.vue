<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <v-container py-0>
          <v-layout wrap>
            <v-flex xs12 md12>
              Hostel Name
              <v-text-field
                id="hostel_name"
                v-model="hostelData.hostel_name"
                outlined
                label="Hostel Name"
                :rules="nameRules"
                required
                color="#0091ad"
              />
            </v-flex>
            <v-flex xs12 md12>
              Location
              <v-text-field
                id="location"
                v-model="hostelData.location"
                outlined
                label="Location"
                :rules="locationRules"
                required
                color="#0091ad"
              />
            </v-flex>
            <v-flex xs12 text-xs-right>
              <v-btn
                to="/landlord/pin"
                class="mx-0 white--text"
                large
                rounded
                color="#ec0868"
              >
                Next
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      hostelData: {
        hostel_name: '',
        location: ''
      },
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 25 || 'Name must be less than 25 characters'
      ],
      locationRules: [
        v => !!v || 'Location is required',
        v => v.length <= 25 || 'Name must be less than 25 characters'
      ]
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
