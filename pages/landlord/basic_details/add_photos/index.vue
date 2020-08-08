<template>
  <v-container fill-height fluid>
    <v-layout justify-center column wrap class="txt">
      <v-flex xs12 md12>
        <v-card-text class="text-center black--text">Upload Building Photo</v-card-text>

        <v-layout justify-center align-center column>
          <v-flex xs12 md12 class="mt-4">
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
          </v-flex>
          <v-flex xs12 class="mt-4">
            <input id="imgInp" type="file" @change="chooseImage" />
          </v-flex>
        </v-layout>

        <v-layout justify-center>
          <v-card-actions class="mx-auto">
            <v-btn
              to="/landlord/my_apartments"
              color="#ec710d"
              class="white--text"
              @click="storeProperty"
            >Next</v-btn>
          </v-card-actions>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "UploadHousePhotoPage",
  data: () => ({
    imagePath: "",
  }),

  computed: {
    ...mapGetters(["getProperty", "getUser"]),
  },

  methods: {
    chooseImage(e) {
      console.log(e.target.value, "the event");
      this.imagePath = URL.createObjectURL(event.target.files[0]);
      this.$store.commit(
        "SET_PROPERTY_PICTURE",
        URL.createObjectURL(event.target.files[0])
      );
    },
    storeProperty() {
      this.updateProperty(this);
    },
    updateProperty(context) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: context.$store.getters.getUser.token,
      };
      axios
        .post(
          "https://movein-app.herokuapp.com/property/",
          {
            property_type: this.getProperty.property_type,
            property_name: this.getProperty.property_name,
            area: this.getProperty.area,
            location: this.getProperty.location,
            total_units: this.getProperty.available_units,
            available_units: this.getProperty.available_units,
            property_picture: this.getProperty.property_picture,
          },
          {
            headers,
          }
        )
        .then(function (response) {
          // eslint-disable-next-line no-console
          // console.log(response.data)
          // eslint-disable-next-line no-console
          console.log(response);
          console.log(response.data[0].payload.Property_id.property_id);

          context.$store.commit(
            "SET_PROPERTY_ID",
            response.data[0].payload.Property_id.property_id
          );

          // const token = response.data.token
          // sessionStorage.setItem('token', token)
          // eslint-disable-next-line no-console
          // console.log(sessionStorage.getItem)
        })
        .catch(function (error) {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }, // update property,
  },
};
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
</style>
