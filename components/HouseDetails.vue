<template>
  <v-container fluid>
    <v-layout row fill-height class="txt">
      <v-flex xs6 md6>
        <v-card-subtitle class="black--text"> Please enter House Name or Number?</v-card-subtitle>
      </v-flex>
      <v-flex xs6 md6 class="ml-4">
        <v-text-field
            label="House Name/No."
            solo
          ></v-text-field>
      </v-flex>
      <v-flex xs6 md6>
        <v-card-subtitle class="black--text">Please enter  Land Reference Number(LR. No.)</v-card-subtitle>
      </v-flex>
      <v-flex xs6 md6 class="ml-4">
        <v-text-field
            label="Enter LR No."
            solo
          ></v-text-field>
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