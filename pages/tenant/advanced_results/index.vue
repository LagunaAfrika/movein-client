<template>
  <v-container>
    <v-layout row>
      <v-flex>
        <h1> Hi Thato</h1>
      </v-flex>

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
    </v-layout>
    <v-layout row>
      <v-layout>
        <h3> Here are your matches</h3>
      </v-layout>
      v-for="(item, i) in items"
      :key="i"
      cols="12"
      >
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
                  color="#0091AD"
                  class="headline cyan--text text--darken-2"
                  v-text="item.title"
                />

                <v-card-subtitle v-text="item.artist" />
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
                    <v-card-text>
                      <h3>20 Matches</h3>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn color="#ffffff">
                    <v-card-text />
                    <v-card-actions>
                      <v-btn color="#ffffff" to="../auth/signup">
                        <v-btn text color="#0091AD">
                          Sign up
                        </v-btn>
                      </v-btn>
                      <v-btn color="#ffffff" to="advanced_results/category_list">
                        <v-btn text color="#0091AD">
                          View matches
                        </v-btn>
                      </v-btn>
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
    </v-layout>
  </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: '#ffffff',
        src: 'https://i.picsum.photos/id/397/4475/2984.jpg?hmac=_PEWxhdxVnCU15wD6E-blJDbpMVH17QQVV0JYMZnkjc',
        title: 'Best deal',
        artist: 'Has everything you want and more, but its double your budget, share with a roomate to afford it'
      },
      {
        color: '#0091AD',
        src: 'https://i.picsum.photos/id/398/4912/3264.jpg?hmac=CstSokUFdrQG6LTogdwjiBnpSAvm3aJ1165GQZY8q0M',
        title: 'Best fit',
        artist: 'Has 75%+ of the house feautures you want, fits your location preferences and budget superbly'
      },
      {
        color: '#0091AD',
        src: 'https://i.picsum.photos/id/625/2507/1674.jpg?hmac=ZuCWygmEqFbv5q0hlD-jimDTtYWRwgAebHLepuXaUUk',
        title: 'Consider sharing',
        artist: 'Has 75%+ of the house feautures you want, but a bit further from prefered location'
      },
      {
        color: '#0091AD',
        src: 'https://i.picsum.photos/id/437/4128/2716.jpg?hmac=j6COqB2RtRcMa56wHOd4qZbRPIUmjWrV_Ax73-tP_go',
        title: 'Compromise comfort',
        artist: 'Has 50% of the features you want , stay for shortwhile while looking for the best fit'
      },
      {
        color: '#0091AD',
        src: 'https://i.picsum.photos/id/448/5184/3456.jpg?hmac=Re31prwkZJfTnQ1SfUtPRK7bzxjrbGoFe14mkdWBqkQ',
        title: 'Rent saver',
        artist: 'Has 50% of the features you want ,shorter travel distance plus you get to save 10% on rent'
      },
      {
        color: '#0091AD',
        src: 'https://i.picsum.photos/id/448/5184/3456.jpg?hmac=Re31prwkZJfTnQ1SfUtPRK7bzxjrbGoFe14mkdWBqkQ',
        title: 'Commute longer',
        artist: 'Fits your budget, fits your taste but you have to commute longer'
        artist: 'Has everything you want and more, but its double your budget, share with a roomate to afford it',
        matches: '20 matches'
      },
      {
        color: '#ffffff',
        src: 'https://i.picsum.photos/id/398/4912/3264.jpg?hmac=CstSokUFdrQG6LTogdwjiBnpSAvm3aJ1165GQZY8q0M',
        title: 'Best fit',
        artist: 'Has 75%+ of the house feautures you want, fits your location preferences and budget superbly',
        matches: '20 matches'
      },
      {
        color: '#ffffff',
        src: 'https://i.picsum.photos/id/625/2507/1674.jpg?hmac=ZuCWygmEqFbv5q0hlD-jimDTtYWRwgAebHLepuXaUUk',
        title: 'Consider sharing',
        artist: 'Has 75%+ of the house feautures you want, but a bit further from prefered location',
        matches: '20 matches'
      },
      {
        color: '#ffffff',
        src: 'https://i.picsum.photos/id/437/4128/2716.jpg?hmac=j6COqB2RtRcMa56wHOd4qZbRPIUmjWrV_Ax73-tP_go',
        title: 'Compromise comfort',
        artist: 'Has 50% of the features you want , stay for shortwhile while looking for the best fit',
        matches: '20 matches'
      },
      {
        color: '#ffffff',
        src: 'https://i.picsum.photos/id/448/5184/3456.jpg?hmac=Re31prwkZJfTnQ1SfUtPRK7bzxjrbGoFe14mkdWBqkQ',
        title: 'Rent saver',
        artist: 'Has 50% of the features you want ,shorter travel distance plus you get to save 10% on rent',
        matches: '20 matches'
      },
      {
        color: '#ffffff',
        src: 'https://i.picsum.photos/id/448/5184/3456.jpg?hmac=Re31prwkZJfTnQ1SfUtPRK7bzxjrbGoFe14mkdWBqkQ',
        title: 'Commute longer',
        artist: 'Fits your budget, fits your taste but you have to commute longer',
        matches: '20 matches'
      }
    ]
  })
}
</script>
