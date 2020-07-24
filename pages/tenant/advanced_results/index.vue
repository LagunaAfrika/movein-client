<template>
  <v-container>
    <v-row dense class="my-4">
      <v-col
        cols="12"
      >
        <v-flex md6>
          <h1 class="my-4">
            Hi Thato
          </h1>
        </v-flex>
        <v-divider class="mx-4" />
        <div class="my-4 subtitle">
          Here is what you asked for
        </div>
        <v-chip
          class="ma-2"
          outlined
          color="#0091AD"
        >
          <v-icon left>
            mdi-map-marker
          </v-icon>
          Thika Road
        </v-chip>

        <v-chip
          class="ma-2"
          outlined
          color="#0091AD"
        >
          <v-icon left>
            mdi-bed
          </v-icon>
          1 Bed
        </v-chip>

        <v-chip
          class="ma-2"
          outlined
          color="#0091AD"
        >
          <v-icon left>
            mdi-shower
          </v-icon>
          1 Baths
        </v-chip>

        <v-chip
          class="ma-2"
          outlined
          color="#0091AD"
        >
          <v-icon left>
            mdi-cash
          </v-icon>
          KES 17500 - KES 1600
        </v-chip>

        <v-chip
          class="ma-2"
          outlined
          color="#0091AD"
        >
          <v-icon left>
            mdi-calendar
          </v-icon>
          Jan
        </v-chip>
        <v-chip
          class="ma-2"
          outlined
          color="#0091AD"
        >
          <v-icon left>
            mdi-format-list-checks
          </v-icon>
          Amenities
        </v-chip>
        <div class="my-4 subtitle">
          Results (120)
        </div>
      </v-col>
      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="6"
      >
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card
              :color="item.color"
              dark
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="cyan--text text--darken-2"
                    v-text="item.title"
                  />

                  <v-card-subtitle
                    class=" cyan--text text--darken-2"
                    v-text="item.artist"
                  />
                  <v-card-title
                    class=" cyan--text text--darken-2"
                    v-text="item.matches"
                  />

                  <v-fade-transition>
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="#036358"
                    >
                      <v-card-text />
                      <v-card-actions>
                        <v-btn color="#ffffff" to="../auth/signup/tenant">
                          <v-btn text color="#0091AD">
                            Sign up to view matches
                          </v-btn>
                        </v-btn>
                        <!-- <v-btn color="#ffffff" to="advanced_results/category_list">
                        <v-btn text color="#0091AD">
                          View matches
                        </v-btn>
                      </v-btn> -->
                      </v-card-actions>
                    </v-overlay>
                  </v-fade-transition>
                </div>
                <v-avatar
                  class="ma-3"
                  size="300px"
                  tile
                >
                  <v-img
                    :aspect-ratio="16/9"
                    :src="item.src"
                  />
                </v-avatar>
              </div>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: '#ffffff',
        src: '/apartment.jpg',
        title: 'Your perfect match',
        artist: 'Has everything you want',
        matches: '5 matches'
      },
      {
        color: '#ffffff',
        src: '/apartment.jpg',
        title: 'A slightly longer commute',
        artist: 'Meets all of the house feautures you want, but is a little further away',
        matches: '10 matches'
      },
      {
        color: '#ffffff',
        src: '/apartment.jpg',
        title: 'Consider sharing',
        artist: 'Has 75%+ of the house feautures you want, but is slightly expensive',
        matches: '17 matches'
      },
      {
        color: '#ffffff',
        src: '/apartment.jpg',
        title: 'Compromise comfort',
        artist: 'Has 50% of the features you want , stay for shortwhile while looking for the best fit',
        matches: '25 matches'
      },
      {
        color: '#ffffff',
        src: '/apartment.jpg',
        title: 'Rent saver',
        artist: 'Has 50% of the features you want ,shorter travel distance plus you get to save 10% on rent',
        matches: '20 matches'
      },
      {
        color: '#ffffff',
        src: '/apartment.jpg',
        title: 'Commute longer',
        artist: 'Fits your budget, fits your taste but you have to commute longer',
        matches: '20 matches'
      }
    ]
  })
}
</script>
