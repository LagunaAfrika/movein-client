<template>
  <v-layout justify-center align-center column class="txt">
    
    <v-flex xs12 md12 class=" size mt-4">
      <v-card-title class="text-center">
      Any particular Neighbourhood ?
    </v-card-title>
      <v-img class="image" src="/hood.svg" />
    

      <v-autocomplete
        v-model="model"
        :items="towns"
        clearable
        class="mt-4"
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
        <v-btn class="btn" color="yellow darken-4 white--text" @click="next">next</v-btn>
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
.size{
  width: 400px;
  height: 250px;
}
</style>