<template>
  <v-layout justify-center align-center column fill-height>
    <v-flex xs12 md12>
      <v-card class="mx-auto" >
        <v-card-title  class=" text-center txt"> Kitchen Details</v-card-title>

        <v-img
      height="250"
      width="600"
      src="/kitchen.jpeg"
    ></v-img>
    
      </v-card>
    </v-flex>
    <v-flex xs12 md12>
      <v-card class="mx-auto mt-4" width="600">
     <v-card-subtitle class="txt black--text"> What items does your kitchen have ?  </v-card-subtitle>
        <v-card-text >
         <v-checkbox v-model="wall_tiles" :label="` Wall Tiles`"></v-checkbox>
         <v-checkbox v-model="wall_cabinets" :label="` Wall Cabinets`"></v-checkbox>
         <v-checkbox v-model="wall_shelves" :label="` Wall Shelves`"></v-checkbox>
         <v-checkbox v-model="cooker_sockets" :label="` Cooker Sockets`"></v-checkbox>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex md12 xs12></v-flex>

    <v-flex md12>
      <v-card class="mx-auto mt-4">
      <v-card-actions>
        <v-btn  color="ec7d10" >
          <v-icon >mdi-camera</v-icon>
        </v-btn>
        <v-btn @click="next" class="yellow--text text--darken-4" text>Next</v-btn>
      </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data: () =>{
    return {
      wall_tiles: false,
      wall_cabinates: false,
      wall_shelves: false,
      cooker_sockets: false,
    }
  },
  methods: {
    next(){
            this.$store.commit('SET_KITCHEN_DETAILS', {cooker_sockets: this.cooker_sockets , wall_cabinates: this.wall_cabinates, wall_shelves:this.wall_shelves,wall_tiles:this.wall_tiles })
      this.$router.push("/landlord/my_apartments/sitting_room_details")
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
