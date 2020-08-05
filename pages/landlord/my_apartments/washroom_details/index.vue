<template>
  <v-layout justify-center align-center column fill-height>
    <v-flex xs12 md12>
      <v-card-title class="text-center txt">Washroom Room Details</v-card-title>

      <v-row align="center" justify="center">
        <v-img
          ref="photo"
          :src="imagePath"
          aspect-ratio="1"
          class="grey lighten-2"
          max-width="500"
          max-height="300"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center" />
          </template>
        </v-img>
      </v-row>

      <v-card-actions class="mt-2">
        <input id="imgInp" type="file" @change="chooseImage" />
      </v-card-actions>
    </v-flex>
    <v-flex xs12 md12>
      <v-card class="mx-auto">
        <v-card-subtitle class="txt black--text">What items does your Washroom have ?</v-card-subtitle>
        <v-card-text>
          <v-checkbox v-model="washroomDetails.wall_lighting" :label="` Wall lights`"></v-checkbox>

          <v-checkbox
            class="txt"
            v-model="washroomDetails.bath_tub"
            :label="`Bath Tub`"
            value="Bath Tub"
          ></v-checkbox>
          <v-checkbox
            class="txt"
            v-model="washroomDetails.electric_heater"
            :label=" `Electric Heater`"
            value="Electric Heater"
          ></v-checkbox>
          <v-checkbox
            class="txt"
            v-model="washroomDetails.solar_heater"
            :label="`Solar Heater`"
            value="Solar Heater"
          ></v-checkbox>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex md12 xs12></v-flex>

    <v-flex md12>
      <v-card-actions>
        <v-btn @click="next" color="#ec7d10" class="white--text" >Next</v-btn>
      </v-card-actions>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data: () => {
    return {
      washroomDetails: {
        wall_lighting: false,
        bath_tub: false,
        electric_heater: false,
        solar_heater: false
      },
      imagePath: ""
    };
  },
  methods: {
    next() {
      this.$store.commit("SET_WASHROOM_DETAILS", {
        wall_lighting: this.washroomDetails.wall_lighting,
        bath_tub: this.washroomDetails.bath_tub,
        electric_heater: this.washroomDetails.electric_heater,
        solar_heater: this.washroomDetails.solar_heater
      });
      this.$router.push("/landlord/my_apartments/my_listing");
    },
    chooseImage(e) {
      console.log(e.target.value, "the event");
      this.imagePath = URL.createObjectURL(event.target.files[0]);
      this.$store.commit(
        "SET_WASHROOM_PICTURE",
        URL.createObjectURL(event.target.files[0])
      );
    }
  }
};
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
</style>
