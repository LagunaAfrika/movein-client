<template>
  <v-layout justify-center align-center column class="txt">
    <v-flex xs12 md12 class="size mt-4" />
    <v-layout column justify-center>
      <v-card flat max-width="350" color="#f7f4ef">
        <v-card-actions />
        <v-flex xs12 md12>
          <v-flex xs12 md12>
            <v-card-title class="black--text">
              Select A Day and Time
            </v-card-title>

            <v-date-picker
              v-model="picker"
              :landscape="landscape"
              :reactive="reactive"
              :flat="flat"
              :full-width="fullWidth"
              :show-current="showCurrent"
              :type="month ? 'month' : 'date'"
              :multiple="multiple"
              :readonly="readonly"
              :disabled="disabled"
              :events="enableEvents ? functionEvents : null"
              color="#0091ad"
            />
          </v-flex>
          <v-flex xs12 md12>
            <v-card-text>
              <v-card-title class="black--text">
                Time
              </v-card-title>

              <template>
                <v-row justify="space-around">
                  <v-time-picker v-model="time_picker" color="green lighten-1" header-color="primary" />
                </v-row>
              </template>
            </v-card-text>
          </v-flex>

          <v-flex>
            <v-card-actions align="center" class="mx-4 my-4">
              <v-snackbar v-model="snackbar">
                {{ text }}
                <template v-slot:action="{ attrs }">
                  <v-btn color="0091ad" text v-bind="attrs" @click="snackbar = false">
                    Close
                  </v-btn>
                </template>
              </v-snackbar>
              <v-btn class="white--text" color="#ec7d10" @click="schedule">
                Schedule
              </v-btn>
              <v-btn text color="#ec7d10" @click="book">
                Book House
              </v-btn>
            </v-card-actions>
          </v-flex>
        </v-flex>
      </v-card>
    </v-layout>
  </v-layout>
</template>
<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  data () {
    return {
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
    ...mapGetters(['getSearchResults', 'getUser'])
  },
  methods: {
    schedule () {
      console.log(this.picker)
      console.log(this.time_picker)
      console.log(this.getSearchResults.search_results.results_fits_all[0].house_id)
      console.log(this.getUser.token)
      this.bookHouse(this)
    },
    book () {
      // this.$store.commit("SET_AMENITIES", this.tenantData.picked);
      // this.$router.push('/tenant/movein')
    //  console.log(this.picker)
    },
    bookHouse (context) {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: context.$store.getters.getUser.token
      }
      const url =
        'https://movein-app.herokuapp.com/schedule/' + context.getSearchResults.search_results.results_fits_all[0].house_id + '/'
      axios
        .post(
          url,
          {
            schedule_date: context.picker,
            schedule_time: context.time_picker
          }, { headers }
        )
        .then(function (response) {
          // eslint-disable-next-line no-console
          console.log(response)
          // eslint-disable-next-line no-console
          // console.log(response.data[0].data[0])
        })
        .catch(function (error) {
          // eslint-disable-next-line no-console
          console.log(error.response)
        })
    } // add bedroom details,

  }
}
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
</style>
