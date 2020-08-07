<template>
  <v-layout justify-center align-center column class="txt">
            <v-flex xs12 md12 class="size mt-4 "><v-img src="/price.svg"></v-img></v-flex>

    <v-flex 12 xs md12>
      <v-card-title class="text-center"> Maximum Budget (KSH)</v-card-title>


      <v-subheader class="pl-0 "></v-subheader>
<v-slider
            v-model="slider"
            class="align-center"
            :max="max"
            :min="min"
            hide-details
          >
            <template v-slot:append>
              <v-text-field
                v-model="slider"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
              ></v-text-field>
            </template>
          </v-slider>    </v-flex>
    <v-flex xs12 md12>
      <v-card-actions>
        <v-btn color="yellow darken-4 white--text" @click="next">next</v-btn>
      </v-card-actions>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data: () => {
    return {
      isLoading: false,
      tab: null,
      min: 5000,
      max: 300000,
      slider: '',
    };
  },
  methods: {
    next() {
       this.$store.commit("SET_RENT", this.slider);
      this.$router.push("/tenant/bed_bath");
    }
  }
};
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
.size{
  width: 350px;
}
</style>