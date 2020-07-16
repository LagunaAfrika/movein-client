<template>
  <v-container fluid>
    <v-layout row class="top" />
    <v-layout justify-center align-center column >
      <v-flex xs12 md8>
        <div class="text-md-center mb-4">
          Meals Offered
        </div>

        <Meals />
      </v-flex>
      <v-flex xs12 text-xs-right>
        <v-btn
          to="/landlord/hostel_features/hostel_rules"
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
</template>
<script>
import Meals from '~/components/Meals'

export default {
  components: {
    Meals
  }
}
</script>
<style scoped>
.top {
  height: 10px;
}

</style>
