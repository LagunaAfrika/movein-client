<template>
  <v-card>
    <v-toolbar color="#0091ad" flat>
      <v-spacer></v-spacer>



      

      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          fixed-tabs
        >
          <v-tabs-slider></v-tabs-slider>
          <v-tab
            class="primary--text"
          >
              Result
          </v-tab>

          <v-tab
            class="primary--text"
          >
            Shortlist
          </v-tab>

          <v-tab
            class="primary--text"
          >
            Scheduled Visit
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item
        
       
      >
        <v-card width="400" height="200" class="mb-2 card" @click="next">
        <v-img
          width="400"
          height="200"
          src="/apartment_sittingroom.jpg"
          class="white--text align-end img"
        >
          <v-fade-transition>
            <v-overlay absolute color="#036358" />
          </v-fade-transition>
        </v-img>
        <v-flex>
          <v-card class="card-text ">
            <v-flex>
              <v-card-text class=" white--text ">
                Matches Everything You Want
              </v-card-text>
            </v-flex>
          </v-card>
        </v-flex>

        <v-card-actions>
          <v-btn small depressed class=" btn mt-6 mr-2 white--text" color="#ec7d10" @click="next">
            3
            <!-- {{ this.getSearchResults.search_results.houses.length }} -->
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card width="400" height="200" class="mb-2 card">
        <v-img
          width="400"
          height="200"
          src="/apartment_bedroom.jpg"
          class="white--text align-end img"
        >
          <v-fade-transition>
            <v-overlay absolute color="#036358" />
          </v-fade-transition>
        </v-img>
        <v-flex class="card-text white--text">
          <v-card-text>Fits Your Budget &  location</v-card-text>
        </v-flex>

        <v-card-actions>
          <v-btn small depressed class="btn mt-6 mr-2 white--text" color="#ec7d10" @click="next">
            8
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card width="400" height="200" class="mb-2 card">
        <v-img
          width="400"
          height="200"
          src="/apartment-kitchen.jpg"
          class="white--text align-end img"
        >
          <v-fade-transition>
            <v-overlay absolute color="#036358" />
          </v-fade-transition>
        </v-img>
        <v-flex class="card-text white--text">
          <v-card-text>Fits  location & House </v-card-text>
        </v-flex>

        <v-card-actions>
          <v-btn small depressed class="btn mt-6 mr-2  white--text" color="#ec7d10" @click="next">
            15
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card width="400" height="200" class="mb-2 card" @click="next">
        <v-img
          width="400"
          height="200"
          src="/apartment_sittingroom.jpg"
          class="white--text align-end img"
        >
          <v-fade-transition>
            <v-overlay absolute color="#036358" />
          </v-fade-transition>
        </v-img>
        <v-flex>
          <v-card class="card-text ">
            <v-flex>
              <v-card-text class=" white--text ">
                Matches Everything You Want
              </v-card-text>
            </v-flex>
          </v-card>
        </v-flex>

        <v-card-actions>
          <v-btn small depressed class=" btn mt-6 mr-2 white--text" color="#ec7d10" @click="next">
            3
            <!-- {{ this.getSearchResults.search_results.houses.length }} -->
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card width="400" height="200" class="mb-2 card">
        <v-img
          width="400"
          height="200"
          src="/apartment_bedroom.jpg"
          class="white--text align-end img"
        >
          <v-fade-transition>
            <v-overlay absolute color="#036358" />
          </v-fade-transition>
        </v-img>
        <v-flex class="card-text white--text">
          <v-card-text>Fits Your Budget &  location</v-card-text>
        </v-flex>

        <v-card-actions>
          <v-btn small depressed class="btn mt-6 mr-2 white--text" color="#ec7d10" @click="next">
            8
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card width="400" height="200" class="mb-2 card">
        <v-img
          width="400"
          height="200"
          src="/apartment-kitchen.jpg"
          class="white--text align-end img"
        >
          <v-fade-transition>
            <v-overlay absolute color="#036358" />
          </v-fade-transition>
        </v-img>
        <v-flex class="card-text white--text">
          <v-card-text>Fits  location & House </v-card-text>
        </v-flex>

        <v-card-actions>
          <v-btn small depressed class="btn mt-6 mr-2  white--text" color="#ec7d10" @click="next">
            15
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import Results from '~/components/Results'

  export default {
     components: {
    Results,
  },
    data () {
      return {
        tabs: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>