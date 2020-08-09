<template>
  <v-container fluid>
    <v-layout column justify-center align-center fill-height class="txt">
      <v-card-title>Your Matches !!</v-card-title>
      <v-card width="310" class="card"  >
        <v-card-title >Fits All</v-card-title>

        <v-card-subtitle>Price,Location, House type</v-card-subtitle>

        <v-card-actions>
        <v-btn @click="next" small  class=" btn mt-6 white--text" color="#ec7d10">10</v-btn>
        </v-card-actions>
      </v-card>
       <v-card class="mt-4 card" width="310"  >
        <v-card-title >Fits Budget & Area</v-card-title>

        <v-card-subtitle>Different House type</v-card-subtitle>


        <v-card-actions>
        <v-btn @click="next" small  class=" btn mt-6 white--text" color="#ec7d10">10</v-btn>
        </v-card-actions>
      </v-card>
       <v-card class="mt-4 card" width="310"  >
        <v-card-title >Fits Budget & House Type</v-card-title>

        <v-card-subtitle>Different Area</v-card-subtitle>


        <v-card-actions>
        <v-btn @click="next" small  class=" btn mt-6 white--text" color="#ec7d10">10</v-btn>
        </v-card-actions>
      </v-card>
       <v-card class="mt-4 card" width="310"  >
        <v-card-title >Fits House Type & Area</v-card-title>

        <v-card-subtitle>Different Price</v-card-subtitle>


        <v-card-actions>
        <v-btn @click="next" small  class=" btn mt-6 white--text" color="#ec7d10">10</v-btn>
        </v-card-actions>
      </v-card>
     

      <v-divider class="mx-4"></v-divider>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      loading: false
    };
  },
  methods:  {
      next(){
          this.$router.push("/auth/signup");
      }
  }
};
</script>
<style scoped>

.txt {
  font-family: "Comfortaa", cursive;
}
.card {
  border-radius: 18px 18px 18px 18px;

}
.btn {
  position: absolute;

  right: 2px;
  top: 45px;
  background: #ffffff;
  border-radius: 25px 0px 25px 0px;
}
</style>