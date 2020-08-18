<template>
  <v-container fluid>
    <v-layout row fill-height class="txt">
      <v-flex xs12 md12>
        <v-card-subtitle class="black--text">What type is the residential Property?</v-card-subtitle>
      </v-flex>
      <v-flex xs12 md12 class="ml-4">
        <v-radio-group v-model="selected" >
          <v-radio label="Apartment" value="apartment" />
          <v-radio label="Detached house" value="detachedHouse" />
          <v-radio  label="Other(Specify)" value="other" > <v-text-field solo class="hidden"></v-text-field></v-radio>
        </v-radio-group>
      </v-flex>
     
    </v-layout>
  </v-container>
</template>
<script>
export default {

  data: vm => ({
      selected: '',
    })
    
    
}
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
.reveal-if-active {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}
</style>