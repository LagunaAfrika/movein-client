<template>
  <v-container fill-height fluid >
    <v-layout justify-center align-center column class="txt">
        <v-flex xs12 md4 class="size mt-4 "><v-img src="/house.svg"></v-img></v-flex>

      <v-flex xs12 md12 class="mt-4">
        
        <v-text-field
          id="house_name"
          v-model="houseData.house_name"
          solo
          label="House Name"
          :rules="nameRules"
          required
          color="#0091ad"
        />
      </v-flex>
      <v-flex xs12 md12>
    
        <v-text-field
          id="location"
          v-model="houseData.house_location"
          solo
          label="Location"
          :rules="locationRules"
          required
          color="#0091ad"
        />
      </v-flex>
      <v-flex xs12 md12 text-xs-right>
        <v-btn
          to="/landlord/basic_details/pin"
          class="mx-0 white--text"
          large
          color="#ec7d10"
          @click="next"
          >Next</v-btn
        >
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  layout: 'namearea',
  data() {
    return {
      houseData: {
        house_name: "",
        house_location: ""
      },
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 25 || "Name must be less than 25 characters"
      ],
      locationRules: [
        v => !!v || "Location is required",
        v => v.length <= 25 || "Name must be less than 25 characters"
      ]
    };
  },
  methods: {
    next() {
      console.log("working");
      const houseNameArea = {
        property_name: this.houseData.house_name,
        location: this.houseData.house_location
      };

      this.$store.commit("SET_HOUSE_NAME_AREA", houseNameArea);
    }
  }
};
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
.size{
  width: 400px;
}

</style>
