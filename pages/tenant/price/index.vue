<template>
  <v-layout justify-center align-center column class="txt">
    <v-flex xs12 md12 class="size mt-4">
      <v-img class="image" src="/cash.svg" />
    </v-flex>

    <v-card flat color="transparent">
      <v-card-title class="text-center">
        Maximum Budget (KSH)
      </v-card-title>
      <v-card-text>
        <v-slider v-model="slider" class="align-center" :max="max" :min="min" hide-details>
          <template v-slot:append>
            <v-text-field
              v-model="slider"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 60px"
            />
          </template>
        </v-slider>
      </v-card-text>
    </v-card>

    <v-flex xs12 md12>
      <v-card-actions>
        <v-btn color="yellow darken-4 white--text" class="btn" @click="next">
          next
        </v-btn>
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
      min: 2500,
      max: 50000,

      slider: ''
    }
  },
  methods: {
    next () {
      this.$store.commit('SET_RENT', this.slider)
      this.$router.push('/tenant/bed_bath')
    }
  }
}
</script>
<style scoped>
.next {
  position: absolute;
  width: 414px;
  height: 634px;
  left: -1px;
  top: 289px;

  background: #ffffff;
  border-radius: 25px 25px 0px 0px;
}
.txt {
  font-family: "Comfortaa", cursive;
}
.btn {
  position: fixed;
  z-index: 100;

  left: 44%;
  top: 85%;
  bottom: 50px;
}
.image {
  z-index: 1;
}
.size {
  width: 340px;
  height: 250px;
}
</style>
