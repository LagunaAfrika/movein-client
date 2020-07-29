<template>
  <v-container fill-height fluid>
    <v-layout justify-center align-center column class="txt">
      <v-flex xs12 md12>
        <v-flex xs12 md12>
          <v-card-title>Hi Thato</v-card-title>
        </v-flex>
        <v-divider class="mx-4" />
        <v-card-title>Here is what you asked for</v-card-title>
        <v-chip class="ma-2" outlined color="#0091AD">
          <v-icon left>mdi-map-marker</v-icon>Thika Road
        </v-chip>

        <v-chip class="ma-2" outlined color="#0091AD">
          <v-icon left>mdi-bed</v-icon>1 Bed
        </v-chip>

        <v-chip class="ma-2" outlined color="#0091AD">
          <v-icon left>mdi-shower</v-icon>1 Baths
        </v-chip>

        <v-chip class="ma-2" outlined color="#0091AD">
          <v-icon left>mdi-cash</v-icon>KES 17500 - KES 1600
        </v-chip>

        <v-chip class="ma-2" outlined color="#0091AD">
          <v-icon left>mdi-calendar</v-icon>Jan
        </v-chip>
        <v-chip class="ma-2" outlined color="#0091AD">
          <v-icon left>mdi-format-list-checks</v-icon>Amenities
        </v-chip>
        <div class="my-4 subtitle">Results (120)</div>
      </v-flex>
      <v-flex xs12 md12>
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="/apartment.jpg"
          >
          </v-img>

          <v-card-subtitle class="pb-0 grey--text text--darken-2">10 matches</v-card-subtitle>

          <v-card-text class="black--text">
            <div>Has everything you want</div>

            <div>Ksh 50,000- Ksh 120,000</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text>Share</v-btn>

            <v-btn to="../auth/signup/" color="orange">View</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    results: [
      {
        price: "Ksh 50,000- Ksh 120,000",
        matches: "5 matches"
      }
    ]
  })
};
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
</style>
