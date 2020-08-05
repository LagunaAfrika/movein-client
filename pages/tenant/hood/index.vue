<template>
  <v-layout justify-center align-center column class="txt">
         <v-card-title class="text-center">Any Specific Neighbourhood?</v-card-title>

    <v-flex 12 xs md12>

      <v-autocomplete
        v-model="model"
        :items="towns"
        multiple
        clearable
        small-chips
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
    model: null,
    search: null,
    tab: null
    }
  },
  methods: {
    next(){
      this.$router.push("/tenant/price")
    }
  }
  
}
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
</style>