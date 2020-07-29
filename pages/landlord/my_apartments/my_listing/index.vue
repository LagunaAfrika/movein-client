<template>
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
      <v-card-title >Ksh {{Number(getProperty.details.rent_amount).toLocaleString()}}</v-card-title>
    </v-img>
    <v-card-title class="black--text" >{{ getProperty.property_name }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0 "
      >
      <div class="txt mb-2  black--text">
              <v-icon color="#ec7d10" >mdi-map-marker</v-icon> {{getProperty.location.name}}
            </div>
 
        <div  class="yellow--text text--darken-4 ml-4"> <v-icon class="yellow--text text--darken-4">mdi-bed</v-icon> 3 Bedroom  <v-icon class="yellow--text text--darken-4">mdi-shower</v-icon> 2 Bathroom </div>
      </v-row>


    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title class="black--text">Description</v-card-title>


    <v-card-text>
                <div>One-bedroom apartment​ located in the heart of Kasarani on Thika Super Highway. Close to three major malls with easy access to Nairobi.</div>

    </v-card-text>
<v-divider class="mx-4"></v-divider>
    <v-card-title class="black--text mb-2">Basic details</v-card-title>
    <v-card-text class="black--text">Bedroom</v-card-text>
    <v-card-text v-for="item in getProperty.details.bedroom" :key="item">{{ item }} </v-card-text>
   
    <v-divider class="mx-4"></v-divider>
    <v-card-text class="black--text">Kitchen</v-card-text>
    <v-card-text v-for="item in getProperty.details.kitchen" :key="item">{{ item }} </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-text class="black--text">Living Room</v-card-text>
    <v-card-text v-for="item in getProperty.details.livingRoom" :key="item">{{ item }} </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-text class="black--text">Washroom</v-card-text>
    <v-card-text v-for="item in getProperty.details.washRoom" :key="item">{{ item }} </v-card-text>


    <v-card-actions>
      <v-btn
        color="yellow darken-4"
        text
        @click="reserve"
      >
        Add
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapGetters} from 'vuex'

  export default {
    data: () => ({
      card: [{
        title: '5555'}
        ],
      loading: false,
      selection: 1,
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
      },
    },
  }
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
</style>