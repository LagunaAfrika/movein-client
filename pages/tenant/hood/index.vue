<template>
  <v-layout justify-center align-center column class="txt">
         <v-card-title class="text-center">Any Specific Neighbourhood?</v-card-title>
        <v-flex xs12 md12 class="size mt-4 "><v-img src="/hood.svg"></v-img></v-flex>

    <v-flex 12 xs md12 class="mt-4">

      <v-autocomplete
        v-model="model"
        :items="towns"
        clearable
        
        prepend-inner-icon="mdi-map-marker"
        label="Example.. Mwiki"
        solo
        item-text="name"
        :filter="customFilter"
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
      {name:'Mwiki'},
      {name:'Woodley'},
      {name:'Kenol'},
      {name:'Kenyatta'}
      ],
    model: '',
    search: null,
    tab: null
    }
  },
  methods: {
    next(){
       this.$store.commit("SET_HOOD", this.model);
      this.$router.push("/tenant/price");
    }
  }
  
}
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
.size{
  width: 400px;
}
</style>