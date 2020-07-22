<template>
  <v-col
    :align="center"
    :justify="center"
  >
    <v-carousel class="mx-0">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      />
    </v-carousel>

    <h1 class="mx-0  mx-4 my-4 heading">
      Nile House
    </h1>

    <v-col>
      <v-divider class="mx-0" />
      <v-card-title>Summery</v-card-title>
      <v-row class="mx-4 my-4 subtitle-1">
        <div class="">
          <div>
            A 3 story multifamily apartment with 9 units and 3 bedrooms per unit. Perfect for young families with children between the ages of 0-12.
          </div>
        </div>
      </v-row>
      <v-card-title>For your information</v-card-title>
      <v-row class="mx-4 my-4">
        <v-col>
          <v-row class="my-4">
            <div>
              <v-icon class=" mx-4 " color="0091AD">
                mdi-file-document-edit
              </v-icon>
              Contract becomes active upon reciept of deposit
            </div>
          </v-row>
          <v-row class="my-4">
            <div>
              <v-icon class=" mx-4 " color="0091AD">
                mdi-cancel
              </v-icon>
              Notice of termination is done a month in advance
            </div>
          </v-row>
        </v-col>
      </v-row>
      <v-divider class="mx-4" />
      <v-card-title>Facilities</v-card-title>
      <v-row
        align="center"
        class="mx-4"
      >
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip
            outlined
            color="#0091AD"
          >
            <v-icon left>
              mdi-bed
            </v-icon>
            3 Bed rooms
          </v-chip>

          <v-chip
            outlined
            color="#0091AD"
          >
            <v-icon left>
              mdi-shower
            </v-icon>
            1.5 Bathroom
          </v-chip>

          <v-chip
            outlined
            color="#0091AD"
          >
            <v-icon left>
              mdi-garage
            </v-icon>
            Parking lot
          </v-chip>

          <v-chip
            outlined
            color="#0091AD"
          >
            <v-icon left>
              mdi-fire
            </v-icon>
            1 Kitchen
          </v-chip>
        </v-chip-group>
      </v-row>

      <v-divider class="mx-4" />
      <v-card-title>Health, safety & environment</v-card-title>
      <v-row class="mx-4">
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip
            outlined
            color="#0091AD"
          >
            <v-icon left>
              mdi-door
            </v-icon>
            contact-less doors
          </v-chip>

          <v-chip
            outlined
            color="#0091AD"
          >
            <v-icon left>
              mdi-spray bottle
            </v-icon>
            Regular disinfection
          </v-chip>

          <v-chip
            outlined
            color="#0091AD"
          >
            <v-icon left>
              mdi-fire-extinguisher
            </v-icon>
            Smoke detection & extinguishers
          </v-chip>

          <v-chip
            outlined
            color="#0091AD"
          >
            <v-icon left>
              mdi-recycle
            </v-icon>
            Waste & recycle bins
          </v-chip>
        </v-chip-group>
      </v-row>
      <v-divider class="mx-4" />

      <v-card-title>Commute</v-card-title>
      <v-row class="mx-4 my-4">
        <div>
          <v-icon class=" mx-4 " color="0091AD">
            mdi-car
          </v-icon>
          Vehicle
        </div>
        <div class="mx-4  ml-4">
          30 min drive to your workplace
        </div>
      </v-row>
      <v-btn
        class="mx-4  my-4"
        outlined=""
        color="#0091AD"
      >
        Calculate commute costs
      </v-btn>
      <v-divider class="mx-4" />
      <v-card-title>Neighbourhood</v-card-title>
      <v-row class="mx-4 my-4">
        <div>
          <v-icon class=" mx-4 " color="0091AD">
            mdi-car
          </v-icon>
          Vehicle
        </div>
        <div class="mx-4  ml-4">
          30 min drive to your workplace
        </div>
      </v-row>
      <v-btn
        class="mx-4  my-4"
        outlined=""
        color="#0091AD"
      >
        local shops & services
      </v-btn>
      <v-divider class="mx-4" />
      <v-card-title>Reviews</v-card-title>
      <v-row>
        <div class="mx-4 subtitle-1">
          <v-avatar color="teal" size="48" class="mx-4">
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            >
          </v-avatar>
        </div>
        <div class="mx-4 my-4 subtitle-1">
          30 min drive to your workplace
        </div>
      </v-row>
      <v-card-title>House rules</v-card-title>
      <v-row class="mx-4 my-4">
        <div>
          <v-icon class=" mx-4 " color="0091AD">
            mdi-car
          </v-icon>
          Vehicle
        </div>
        <div class="mx-4  ml-4">
          30 min drive to your workplace
        </div>
      </v-row>
      <v-divider class="mx-4" />
      <v-card-title>Landlord</v-card-title>
      <v-row>
        <div class="mx-4 subtitle-1">
          <v-avatar color="teal" size="48" class="mx-4">
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            >
          </v-avatar>
        </div>
        <v-icon class=" mx-4 " color="0091AD">
          mdi-star
        </v-icon>
        <div class="mx-4 my-4 subtitle-1">
          121 reviews
        </div>
        <div class="mx-4 my-4 subtitle-1">
          <v-icon class=" mx-4 " color="0091AD">
            mdi-shield-check
          </v-icon>
          Verifified
        </div>
      </v-row>
    </v-col>
    <v-col>
      <v-card
        :loading="loading"

        elevation="5"

        width="800"
      >
        <v-card-text>
          <v-row>
            <v-card-title> Schedule a viewing</v-card-title>
          </v-row>

          <v-flex xs12 md12>
            <v-col cols="12" sm="6" md="4">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Pick a date"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer />
                  <v-btn text color="primary" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
          </v-flex>
          <div class="my-4 subtitle-1" />

          <v-row
            class="mx-4"
          />
        </v-card-text>
        <v-card-actions
          align="center"
          class="mx-4 my-4"
        >
          <v-btn
            outlined=""
            color="#0091AD"
          >
            Schedule a viewing
          </v-btn>
        </v-card-actions>

        <v-divider class="mx-4" />
      </v-card>

      <div class="mx-2 my-4 subtitle-1">
        <v-icon class=" mx-4 " color="0091AD">
          mdi-flag
        </v-icon>
        <a href="" class=" cyan--text">Report this listing</a>
      </div>
    </v-col>
    <v-col />
  </v-col>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  }
}

</script>
