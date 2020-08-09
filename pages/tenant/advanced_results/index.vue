<template>
  <v-container fluid>
    <v-layout column justify-center >
      <v-tabs
      v-model="tab"
      background-color="#0091ad"
      class="elevation-2"
      dark
      :centered="centered"
      :grow="grow"
      :vertical="vertical"
      :right="right"
      :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
      :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
      :icons-and-text="icons"
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab>
        Results
      </v-tab>

      <v-tab-item
        
      >
        <v-layout column justify-center align-center fill-height class="txt">
      <v-card-title>Your Matches !!</v-card-title>
      <v-card width="310"  class="card"  >
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
      </v-tab-item>
       <v-tab>
        Short List
      </v-tab>

      <v-tab-item
        
      ></v-tab-item>
      <v-tab>
        Sheduled Visits
      </v-tab>

      <v-tab-item
        
      ></v-tab-item>
    </v-tabs>
    </v-layout>
    
  </v-container>
</template>

<script>
export default {
  layout: 'advanced',
  data: () => {
    return {
      tab: null,
        icons: false,
        centered: true,
        grow: false,
        vertical: false,
        prevIcon: false,
        nextIcon: false,
        right: false,
        tabs: 3,
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