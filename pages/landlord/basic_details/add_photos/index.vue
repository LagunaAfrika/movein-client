<template>
  <v-container fill-height fluid>
    <v-layout justify-center wrap class="txt">
      <v-flex xs12 md8>
          <v-card-text class="text-center black--text">Upload House Photo</v-card-text>
          <v-layout row="" align="center" justify="center">
            <v-img
              ref="photo"
              :src="imagePath"
              aspect-ratio="1"
              class="grey lighten-2"
              width="500"
              height="300"
            >
              <template v-slot:placeholder>
                <v-layout row class="fill-height ma-0" align="center" justify="center" />
              </template>
            </v-img>
          </v-layout>
          <v-layout justify-center align-center column>
           <v-flex xs12 class="mt-4">
              <input id="imgInp" type="file" @change="chooseImage" />
            </v-flex>
          </v-layout>

        <v-layout justify-center>
          
           
            <v-card-actions class="mx-auto">
              <v-btn to="/landlord/my_apartments" color="#ec710d" class="white--text">Next</v-btn>
            </v-card-actions>
         
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "UploadHousePhotoPage",
  data: () => ({
    imagePath: ""
  }),
  methods: {
    chooseImage(e) {
      console.log(e.target.value, "the event");
      this.imagePath = URL.createObjectURL(event.target.files[0]);
      this.$store.commit(
        "SET_PROPERTY_PICTURE",
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
