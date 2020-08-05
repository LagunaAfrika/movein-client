<template>
<v-container fluid>
  <v-layout column justify-center align-center  fill-height class="txt">
    <v-card-title>Results</v-card-title>
    <v-card :loading="loading" flat outlined class="mx-auto txt" max-width="374" to="/auth/signup">
      <v-img height="250"  src="/apartment.jpg" class="white--text align-end">
            <v-card-title class="white--text ">BARAKA Apt</v-card-title>
</v-img>

    <v-layout row >
      <v-flex xs6 md6>
        <v-card-subtitle class="ml-4">KSH 20000</v-card-subtitle>
      </v-flex>
      <v-flex xs6 md6>
        <v-card-subtitle class="ml-12">Best Fit</v-card-subtitle>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs4 md4>
         <div class="txt mb-2 ml-8 black--text">
              <v-icon color="#ec7d10" >mdi-map-marker</v-icon> Thika
            </div>
      </v-flex>
      <v-flex xs4 md4>
 
        <div  class=" ml-4 "> <v-icon class="yellow--text text--darken-4">mdi-bed</v-icon>   1 Bed </div>
      </v-flex>
      <v-flex xs4 md4>
        <div class="text--darken-4 ml-4"><v-icon class="yellow--text text--darken-4">mdi-shower</v-icon> 1 Bath</div>
      </v-flex>
    </v-layout>
    </v-card>
    <v-card :loading="loading" flat outlined class="mx-auto mt-4 txt" max-width="374" to="/auth/signup">
      <v-img height="250" src="/apartment.jpg" class="white--text align-end">
            <v-card-title class="white--text ">BARAKA Apt</v-card-title>
</v-img>

    <v-layout row >
      <v-flex xs6 md6>
        <v-card-subtitle class="ml-4">KSH 20000</v-card-subtitle>
      </v-flex>
      <v-flex xs6 md6>
        <v-card-subtitle class="ml-12">Best Fit</v-card-subtitle>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs4 md4>
         <div class="txt mb-2 ml-8 black--text">
              <v-icon color="#ec7d10" >mdi-map-marker</v-icon> Thika
            </div>
      </v-flex>
      <v-flex xs4 md4>
 
        <div  class=" ml-4 "> <v-icon class="yellow--text text--darken-4 ">mdi-bed</v-icon>   1 Bed </div>
      </v-flex>
      <v-flex xs4 md4>
        <div class="text--darken-4 ml-4 "><v-icon class="yellow--text text--darken-4">mdi-shower</v-icon> 1 Bath</div>
      </v-flex>
    </v-layout>
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
  }
};
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
</style>