<template>
  <v-layout justify-center align-center column fill-height>
    <v-flex xs12 md12>
      <v-card class="mx-auto" >
        <v-card-title  class=" text-center txt"> Washroom Details</v-card-title>

        <v-img
      height="250"
      src="/washroom.jpg"
    ></v-img>
     <v-card-subtitle class="txt black--text"> What items does your Washroom have ?  </v-card-subtitle>
        <v-card-text >
          <v-checkbox class="txt" v-model="selected" label="Bath Tub" value="Bath Tub"></v-checkbox>
          <v-checkbox class="txt" v-model="selected" label=" Electric Heater" value="Electric Heater"></v-checkbox>
          <v-checkbox class="txt" v-model="selected" label="Solar Heater" value="Solar Heater"></v-checkbox>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex md12 xs12></v-flex>

    <v-flex md12>
      <v-card-actions>
        <v-btn  color="ec7d10" >
          <v-icon >mdi-camera</v-icon>
        </v-btn>
        <v-btn to="/landlord/my_apartments/rent_amount" class="yellow--text text--darken-4" text>Next</v-btn>
      </v-card-actions>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data: () =>{
    return {
      selected: [],
    }
  },

  
};
</script>
Foo
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
</style>
