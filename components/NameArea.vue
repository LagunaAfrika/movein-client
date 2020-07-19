<template>
  <v-container fill-height fluid >
    <v-layout justify-center align-center column>
            <v-flex xs12 md12>
              House Name
              <v-text-field
                id="house_name"
                v-model="houseData.house_name"
                outlined
                label="House Name"
                :rules="nameRules"
                required
                color="#0091ad"
              />
            </v-flex>
            <v-flex xs12 md12>
              Location
              <v-text-field
                id="location"
                v-model="houseData.house_location"
                outlined
                label="Location"
                :rules="locationRules"
                required
                color="#0091ad"
              />
            </v-flex>
            <v-flex xs12 md12 text-xs-right>
              <v-btn
                to="/landlord/basic_details/pin"
                class="mx-0 white--text "
                large
                rounded
                color="#ec0868"
              >
                Next
              </v-btn>
            </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      houseData: {
        house_name: '',
        house_location: ''
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
</style>
