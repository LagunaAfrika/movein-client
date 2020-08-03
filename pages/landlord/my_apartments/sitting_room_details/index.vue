<template>
  <v-layout justify-center align-center column fill-height>
    <v-flex xs12 md12>
      <v-card class="mx-auto">
        <v-card-title class="text-center txt">Living Room Details</v-card-title>

        <v-img height="250" width="600" src="/living.jpg"></v-img>
        <v-card-subtitle class="txt black--text">What items does your Living have ?</v-card-subtitle>
       
      </v-card>
    </v-flex>
    <v-flex md12 xs12>
       <v-card class="mx-auto mt-4" width="600">
        <v-card-text>
          <v-checkbox v-model="wall_lighting" :label="` Wall lights`"></v-checkbox>
          <v-checkbox v-model="balcony" :label="` Balcony`"></v-checkbox>
        </v-card-text>
        </v-card>
    </v-flex>

    <v-flex md12>
      <v-card class="mx-auto mt-4">
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="ec7d10">

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
      balcony: false,
      wall_lighting: false
    };
  },
  methods: {
    next() {
      this.$store.commit("SET_LIVINGROOM_DETAILS", this.selected);
      this.$router.push("/landlord/my_apartments/washroom_details");
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
