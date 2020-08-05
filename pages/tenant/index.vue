<template>
  <v-layout justify-center align-center column class="txt">
          <v-card-title class="text-center">Where would you like to stay</v-card-title>

    <v-flex 12 xs md12>

      <v-autocomplete
      
        v-model="model"
        :items="towns"
        small-chips
        clearable
        multiple
        prepend-inner-icon="mdi-map-marker"
        label="Example.. Kasarani"
        solo
        item-text="name"
        item-value="model"
        color="#ec7d10"
      ></v-autocomplete>
    </v-flex>
    <v-flex xs12 md12>
      <v-card-actions>
        <v-btn color="yellow darken-4 white--text"  @click="next">next</v-btn>
      </v-card-actions>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data: () => {
    return{
      isLoading: false,
    towns: [
      {name:'Kahawa'},
      {name:'Juja'},
      {name:'Kasarani'},
      {name:'Westlands'}
      ],
    model: ['Kahawa', 'Juja', 'Kasarani','Westlands'],
    search: null,
    tab: null
    }
  },
  methods: {
    next(){
      this.$router.push("/tenant/hood")
    }
  }
  
}
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
</style>