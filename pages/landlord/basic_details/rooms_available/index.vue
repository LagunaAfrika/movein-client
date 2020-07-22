<template>
  <v-container fill-height fluid >
    <v-layout justify-center align-center column class="txt">
      <v-flex xs12 md12>
              Total Number of Houses
              <v-text-field
                id="total_number_of_vacant_houses"
                label="Number of houses"
                solo
                color="#0091ad"
              />
            </v-flex>
      <v-flex xs12 md12>
              How many are vacant
              <v-text-field
                id="vacant_houses"
                label="Enter number"
                solo
                color="#0091ad"
              />
            </v-flex>
             
      <v-flex xs12 md12 text-xs-right>
        <v-btn
          to="/landlord/basic_details/add_photos"
          class=" white--text"
          large
          color="#ec7d10"
        >Save </v-btn>
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

.txt {
  font-family: "Comfortaa", cursive;
}
</style>
