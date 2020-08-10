<template>
  <v-layout justify-center align-center column class="txt">
   
    <v-flex xs12 md12 class=" mt-4">
      <v-img class="size" src="/cash.svg" />
   
      <v-card flat color="transparent">
    <v-card-title class="text-center"> Maximum Budget (KSH)</v-card-title>
    <v-card-text>
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
          </v-slider>  
    </v-card-text>

   
   
  </v-card>
    </v-flex>
  
    <v-flex xs12 md12>
      <v-card-actions>
        <v-btn color="yellow darken-4 white--text" class="btn" @click="next">next</v-btn>
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
      min: 0,
        max: 3000000,
        
      slider: ""
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
  position: relative;

  left: 2px;
  top: 300px;
}
.size {
  width: 300px;
}
</style>