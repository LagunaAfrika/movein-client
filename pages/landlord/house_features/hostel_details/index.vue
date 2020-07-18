<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <div class="text-md-center mb-4">
          Hostel Amenities
        </div>
        <RoomDetails />
      </v-flex>
      <v-flex xs12 text-xs-right>
        <v-btn
          to="/landlord/hostel_features/meals"
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
import RoomDetails from '~/components/RoomDetails'

export default {
  components: {
    RoomDetails,
   
  }
}
</script>
