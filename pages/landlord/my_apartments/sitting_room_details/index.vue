<template>
  <v-layout justify-center align-center column fill-height>
    <v-flex xs12 md12>
              <v-card-title class="text-center txt">Living Room Details</v-card-title>

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

      <v-card-actions  class="mt-2">
      <input id="imgInp" type="file" @change="chooseImage" />
      </v-card-actions>
    
    </v-flex>
    <v-flex md12 xs12>
       <v-card class="mx-auto mt-4" width="600">
                 <v-card-subtitle class="txt black--text">What items does your Living have ?</v-card-subtitle>

        <v-card-text class="ml-12">
          <v-checkbox v-model="livingDetails.wall_lighting" :label="` Wall lights`"></v-checkbox>
          <v-checkbox v-model="livingDetails.balcony" :label="` Balcony`"></v-checkbox>
        </v-card-text>
      
        </v-card>
    </v-flex>

    <v-flex md12>
      <v-card class="mx-auto mt-4">
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="#ec7d10">

          <v-icon>mdi-camera</v-icon>
        </v-btn>
        <v-btn @click="next" class="yellow--text text--darken-4" text>Next</v-btn>
      </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data: () => {
    return {
      livingDetails: {
        balcony: false,
      wall_lighting: false
      }
      
    };
  },
  methods: {
    next() {
      this.$store.commit("SET_LIVINGROOM_DETAILS", {
        
        balcony: this.livingDetails.balcony,
        wall_lighting: this.livingDetails.wall_lighting
      });
      this.$router.push("/landlord/my_apartments/washroom_details");
    },
    chooseImage(e) {
      console.log(e.target.value, "the event");
      this.imagePath = URL.createObjectURL(event.target.files[0]);
      this.$store.commit(
        "SET_LIVING_PICTURE",
        URL.createObjectURL(event.target.files[0])
      );
    }
  }
};
</script>
Foo
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
</style>
