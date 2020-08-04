<template>
  <v-layout justify-center align-center column fill-height class="txt">
    <v-flex xs12 md12>
              <v-card-title class="text-center txt">Kitchen Details</v-card-title>

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
    <v-flex xs12 md12>
      <v-card class="mx-auto mt-4" width="600">
        <v-card-subtitle class="txt black--text">What items does your kitchen have ?</v-card-subtitle>
        <v-card-text class="ml-12">
          <v-checkbox v-model="kitchenDetails.wall_tiles" :label="` Wall Tiles`"></v-checkbox>
          <v-checkbox v-model="kitchenDetails.wall_cabinets" :label="` Wall Cabinets`"></v-checkbox>
          <v-checkbox v-model="kitchenDetails.wall_shelves" :label="` Wall Shelves`"></v-checkbox>
          <v-checkbox v-model="kitchenDetails.cooker_sockets" :label="` Cooker Sockets`"></v-checkbox>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex md12 xs12></v-flex>

    <v-flex md12>
      <v-card-actions>
        <v-btn @click="next" color="#ec710d" class="white--text">Next</v-btn>
      </v-card-actions>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data: () => {
    return {
      kitchenDetails: {
        wall_tiles: false,
        wall_cabinates: false,
        wall_shelves: false,
        cooker_sockets: false
      },

      overlay: true,
      imagePath: ""
    };
  },
  methods: {
    next() {
      this.$store.commit("SET_KITCHEN_DETAILS", {
        cooker_sockets: this.kitchenDetails.cooker_sockets,
        wall_cabinets: this.kitchenDetails.wall_cabinets,
        wall_shelves: this.kitchenDetails.wall_shelves,
        wall_tiles: this.kitchenDetails.wall_tiles
      });
      this.$router.push("/landlord/my_apartments/sitting_room_details");
    },
    chooseImage(e) {
      console.log(e.target.value, "the event");
      this.imagePath = URL.createObjectURL(event.target.files[0]);
      this.$store.commit(
        "SET_KITCHEN_PICTURE",
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
