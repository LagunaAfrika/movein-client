<template>
  <div>
    <v-card
      :loading="loading"
      class="mx-auto my-12 txt"
      max-width="374"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="getProperty.property_picture"
      >
        <v-card-title>Ksh {{ Number(getProperty.details.rent_amount).toLocaleString() }}</v-card-title>
      </v-img>

      <v-card-text>
        <v-row
          align="center"
          class="mx-0 "
        >
          <div class="txt mb-2  black--text">
            <v-icon color="#ec7d10">
              mdi-map-marker
            </v-icon> {{ getProperty.location.name }}
          </div>

          <div class="yellow--text text--darken-4 ml-4">
            <v-icon class="yellow--text text--darken-4">
              mdi-bed
            </v-icon> {{ getProperty.details.house_type }} <v-icon class="yellow--text text--darken-4">
              mdi-shower
            </v-icon> {{ getProperty.details.bathrooms }} {{ getProperty.details.bathrooms > 1 ? 'Bathrooms' : 'Bathroom' }}
          </div>
        </v-row>
      </v-card-text>

      <v-divider class="mx-4" />

      <v-card-title class="black--text">
        Description
      </v-card-title>

      <v-card-text>
        <div>{{ getProperty.details.description }}</div>
      </v-card-text>
      <v-divider class="mx-4" />
      <v-card-text class="black--text">
        Basic house details
      </v-card-text>
      <v-card-text v-for="item in getProperty.details.house" :key="item">
        {{ item }}
      </v-card-text>
      <v-divider class="mx-4" />
      <v-card-text class="black--text">
        Bedroom Details
      </v-card-text>
      <v-card-text v-for="item in getProperty.details.bedroom" :key="item">
        {{ item }}
      </v-card-text>

      <v-divider class="mx-4" />
      <v-card-text class="black--text">
        Kitchen Details
      </v-card-text>
      <v-card-text v-for="item in getProperty.details.kitchen" :key="item">
        {{ item }}
      </v-card-text>
      <v-divider class="mx-4" />
      <v-card-text class="black--text">
        Living Room Details
      </v-card-text>
      <v-card-text v-for="item in getProperty.details.livingRoom" :key="item">
        {{ item }}
      </v-card-text>

      <v-divider class="mx-4" />
      <v-card-text class="black--text">
        Washroom Details
      </v-card-text>
      <v-card-text v-for="item in getProperty.details.washRoom" :key="item">
        {{ item }}
      </v-card-text>
    </v-card>
    <v-card-actions>
      <v-spacer />
      <v-btn
        color="yellow darken-4"
        class="bottom white--text"
        

        to="/landlord/add_property"
      >
        New Apart
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    card: [{ title: '5555' }
    ],
    loading: false,
    selection: 1
  }),
  computed: {
    ...mapGetters([
      'getProperty'
    ])
  },
  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
  }
}
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
.bottom{
  position: absolute;
  top:90%;
  left: 37%;
  right: 37%;
}

</style>
