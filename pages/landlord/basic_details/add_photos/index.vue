<template>
  <v-container fill-height fluid class="txt">
    <v-layout justify-center align-center column >
      <v-flex xs12 md8>
        <div class="text-md-center mb-4 black--text">
          House Photo
        </div>
        <v-row align="center" justify="center">
          <v-img
            ref="photo"
            src=""
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
      <v-flex xs12 md12 text-xs-right class="mt-4">
          <input id="imgInp" type="file" @change="chooseImage">
        </v-flex>
        <v-flex xs12 text-xs-right>

           <v-flex xs12 md12 text-xs-right>
        <v-btn class=" white--text mt-4" large color="#ec7d10" to="/landlord/my_apartments">
          Save
        </v-btn>
      </v-flex>
          
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'UploadHousePhotoPage',
  data: () => ({
    imagePath: ''
  }),
  methods: {
    chooseImage (e) {
      console.log(e.target.value, 'the event')
      this.$refs.photo.src = URL.createObjectURL(event.target.files[0])
    }
  }
}
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
</style>
