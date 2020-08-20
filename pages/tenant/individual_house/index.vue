<template>
  <v-container fill-height>
    <v-layout justify-center align-center column class="txt">
      <v-card width="500" class="mb-12 card" height="250">
        <v-card-title>
          {{
            this.getSearchResults.search_results.results_fits_all[0].property_name }}
        </v-card-title>

        <v-carousel height="250">
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          />
        </v-carousel>
      </v-card>
      <v-card class="vd">
        Virtual Viewing
        <v-btn
          color="#ec7d10"
          href="https://my.matterport.com/show/?m=Tb49cJnwxcQ"
          target="_blank"
        >
          3D
        </v-btn>
      </v-card>
      <v-card width="500" class="card mt-8">
        <v-card-title>House Details</v-card-title>
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header class="justify-self-start" disable-icon-rotate>
              <div>
                <span>{{ this.getSearchResults.search_results.results_fits_all[0].house_type }} </span>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>Two of which are Master Ensuit</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header class="justify-self-start" disable-icon-rotate>
              <div>
                <span>1.5 Bath</span>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>One bathroom and toilet and one toilet</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header class="justify-self-start" disable-icon-rotate>
              <div>
                <span>1 Kitchen</span>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>Fully furnished kitchen</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
      <v-card width="500" class="card mt-8">
        <v-card-title>Amenities</v-card-title>

        <v-expansion-panels accordion>
          <v-expansion-panel v-for="amenity in amenities" :key="amenity">
            <v-expansion-panel-header class="white black--text">
              {{ amenity.title }}
            </v-expansion-panel-header>

            <v-expansion-panel-content class="white grey--text text--darken-3">
              {{ amenity.desc }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
      <v-card width="500" class="card mt-8">
        <v-layout column justify-center>
          <v-flex>
            <v-card-actions class="mx-4 my-4">
              <v-btn to="/tenant/schedule" class="white--text" color="#ec7d10">
                Schedule
              </v-btn>
              <v-btn text color="#ec7d10" @click="book">
                chat
              </v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
// import axios from 'axios'
export default {
  data () {
    return {
      items: [
        {
          src: '/apartment_front.jpg'
        },
        {
          src: '/apartment_bedroom.jpg'
        },
        {
          src: '/apartment_washroom.jpg'
        },
        {
          src: '/apartment_sittingroom.jpg'
        },
        {
          src: '/apartment-kitchen.jpg'
        }
      ],
      amenities: [
        {
          title: 'Internet',
          desc: 'We have a Home Fibre connection'
        },
        {
          title: 'Water',
          desc: '24/7 water from Borehole to complement Municipal Water'
        },
        {
          title: 'Security',
          desc: '24 hour guard, CCTV Cameras and An Electic Fence'
        },
        {
          title: 'Parking Lot',
          desc: 'A spacious parking that can accommodate up to 3 cars'
        }
      ],
      dialog: false,
      dialog1: false,
      picker: new Date().toISOString().substr(0, 10),
      landscape: false,
      reactive: false,
      fullWidth: false,
      flat: false,
      showCurrent: true,
      month: false,
      multiple: false,
      readonly: false,
      disabled: false,
      enableEvents: false,
      loading: false,
      snackbar: false,
      text: 'Booking confirmed',
      tags: ['09.30 A.M', '11.30 A.M', '1.30 A.M', '3.00 P.M', '4.00 P.M']
    }
  },
  computed: {
    ...mapGetters(['getSearchResults'])
  },
  methods: {

  }
}
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
.card {
  border-radius: 18px 18px 18px 18px;
  background-color: #f7f4ef;
}
.vd{
  margin-top: 30px;
}
</style>
