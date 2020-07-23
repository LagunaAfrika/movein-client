<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <div class="text-md-center mb-4">
          Hostel Amenities
        </div>
        <HostelType />
        <RoomDetails />
        <Internet />
        <Electricity />
        <Laundry />
        <CommonRoom />
        <Parking />
        <ChillZone />
        <Security />
        <Meals />
      </v-flex>
      <v-flex xs12 text-xs-right>
        <v-btn
          to="/landlord/hostel_rules"
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
import HostelType from '~/components/HostelType'
import RoomDetails from '~/components/RoomDetails'
import Internet from '~/components/Internet'
import Electricity from '~/components/Electricity'
import CommonRoom from '~/components/CommonRoom'
import Laundry from '~/components/Laundry'
import Parking from '~/components/Parking'
import ChillZone from '~/components/ChillZone'
import Security from '~/components/Security'
import Meals from '~/components/Meals'

export default {
  components: {
    HostelType,
    RoomDetails,
    Internet,
    Electricity,
    CommonRoom,
    Laundry,
    Parking,
    ChillZone,
    Security,
    Meals
  }
}
</script>
