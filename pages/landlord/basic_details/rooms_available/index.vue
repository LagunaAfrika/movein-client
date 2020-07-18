<template>
  <v-container fluid>
    <v-layout row class="top" />
    <v-layout justify-center align-center column>
      <v-flex xs12 md12>
              Total Number of Houses
              <v-text-field
                id="total_number_of_vacant_houses"
                label="Enter number of houses"
                outlined
                color="#0091ad"
              />
            </v-flex>
      <v-flex xs12 md12>
              How many are vacant
              <v-text-field
                id="vacant_houses"
                label="Enter number"
                outlined
                color="#0091ad"
              />
            </v-flex>
             
      <v-flex xs12 text-xs-right>
        <v-btn
          to="/landlord/basic_details/hostel_type"
          class="mx-0 white--text"
          large
          rounded
          color="#ec0868"
        >Next</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      items: ["1", "2", "4", "6"]
    };
  },
  rules: {
    required: value => !!value || "Required.",
    min: v => v.length >= 8 || "Min 10 characters"
  },
  studentRules: [
    v => !!v || "Number is required",
    v => v.length <= 10 || "Number must be less than 10 characters"
  ]
};
</script>
<style scoped>
.top {
  height: 200px;
}
</style>
