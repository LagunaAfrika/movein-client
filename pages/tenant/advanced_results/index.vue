<template>
  <v-container fill-height fluid>
    <v-layout justify-center align-center column class="txt">
      <v-flex xs12 md12>
        <v-flex xs12 md12>
          <v-card-title>Hi Thato</v-card-title>
        </v-flex>
        <v-divider class="mx-4" />
        <v-card-title>Here is what you asked for</v-card-title>
        <v-card-text class="txt ">
          <v-row align="center" class="mx-0">
            9 Units · 2 Vacant
          </v-row>

          <div class="txt my-4    black--text">
            <v-icon color="#ec7d10">
              mdi-map-marker
            </v-icon> Kasarani County, Kenya
          </div>
        </v-card-text>

        <v-chip class="ma-2" outlined color="#0091AD">
          <v-icon left>
            mdi-bed
          </v-icon>1 Bed
        </v-chip>

        <v-chip class="ma-2" outlined color="#0091AD">
          <v-icon left>
            mdi-shower
          </v-icon>1 Baths
        </v-chip>

        <v-chip class="ma-2" outlined color="#0091AD">
          <v-icon left>
            mdi-cash
          </v-icon>KES 17500 - KES 1600
        </v-chip>

        <v-chip class="ma-2" outlined color="#0091AD">
          <v-icon left>
            mdi-calendar
          </v-icon>Jan
        </v-chip>
        <v-chip class="ma-2" outlined color="#0091AD">
          <v-icon left>
            mdi-format-list-checks
          </v-icon>Amenities
        </v-chip>
        <div class="my-4 subtitle">
          Results (120)
        </div>
      </v-flex>
      <v-flex xs12 md12>
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="/apartment.jpg"
          />

          <v-card-subtitle class="pb-0 grey--text text--darken-2">
            10 matches
          </v-card-subtitle>

          <v-card-text class="black--text">
            <div>Has everything you want</div>

            <div>Ksh 50,000- Ksh 120,000</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text>
              Share
            </v-btn>

            <v-btn to="../auth/signup/" color="orange">
              View
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-container fluid>
        <v-layout column justify-center>
          <v-tabs
            v-model="tab"
            background-color="#0091ad"
            class="elevation-2"
            dark
            :centered="centered"
            :grow="grow"
            :vertical="vertical"
            :right="right"
            :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
            :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
            :icons-and-text="icons"
          >
            <v-tabs-slider />

            <v-tab>
              Results
            </v-tab>

            <v-tab-item>
              <v-layout column justify-center align-center fill-height class="txt">
                <v-card-title>Your Matches !!</v-card-title>
                <v-card width="310" class="card">
                  <v-card-title>Fits All</v-card-title>

                  <v-card-subtitle>Price,Location, House type</v-card-subtitle>

                  <v-card-actions>
                    <v-btn small class=" btn mt-6 white--text" color="#ec7d10" @click="next">
                      10
                    </v-btn>
                  </v-card-actions>
                </v-card>
                <v-card class="mt-4 card" width="310">
                  <v-card-title>Fits Budget & Area</v-card-title>

                  <v-card-subtitle>Different House type</v-card-subtitle>

                  <v-card-actions>
                    <v-btn small class=" btn mt-6 white--text" color="#ec7d10" @click="next">
                      10
                    </v-btn>
                  </v-card-actions>
                </v-card>
                <v-card class="mt-4 card" width="310">
                  <v-card-title>Fits Budget & House Type</v-card-title>

                  <v-card-subtitle>Different Area</v-card-subtitle>

                  <v-card-actions>
                    <v-btn small class=" btn mt-6 white--text" color="#ec7d10" @click="next">
                      10
                    </v-btn>
                  </v-card-actions>
                </v-card>
                <v-card class="mt-4 card" width="310">
                  <v-card-title>Fits House Type & Area</v-card-title>

                  <v-card-subtitle>Different Price</v-card-subtitle>

                  <v-card-actions>
                    <v-btn small class=" btn mt-6 white--text" color="#ec7d10" @click="next">
                      10
                    </v-btn>
                  </v-card-actions>
                </v-card>

                <v-divider class="mx-4" />
              </v-layout>
            </v-tab-item>
            <v-tab>
              Short List
            </v-tab>

            <v-tab-item />
            <v-tab>
              Sheduled Visits
            </v-tab>

            <v-tab-item />
          </v-tabs>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    results: [
      {
        price: 'Ksh 50,000- Ksh 120,000',
        matches: '5 matches'
      }
    ]
  }),

  layout: 'advanced',
  data: () => {
    return {
      tab: null,
      icons: false,
      centered: true,
      grow: false,
      vertical: false,
      prevIcon: false,
      nextIcon: false,
      right: false,
      tabs: 3
    }
  },
  methods: {
    next () {
      this.$router.push('/auth/signup')
    }
  }
}
  })
}
// layout: 'advanced',
// data: () => {
//   return {
//     tab: null,
//       icons: false,
//       centered: true,
//       grow: false,
//       vertical: false,
//       prevIcon: false,
//       nextIcon: false,
//       right: false,
//       tabs: 3,
//   };
// },
//   methods:  {
//       next(){
//           this.$router.push("/auth/signup");
//       }
//   }
// };
</script>
<style scoped>

.txt {
  font-family: "Comfortaa", cursive;
}
.card {
  border-radius: 18px 18px 18px 18px;

}
.btn {
  position: absolute;

  right: 2px;
  top: 45px;
  background: #ffffff;
  border-radius: 25px 0px 25px 0px;
}
</style>
