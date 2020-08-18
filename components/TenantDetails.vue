<template>
  <v-container fluid class="txt">
    <v-layout >
      <v-flex xs12 sm12 md12 class="ml-6">
        <v-card-subtitle class="black--text">Tenant Name </v-card-subtitle>

        <v-text-field label="Name" solo placeholder="Example Sally and Advocates Co."></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 md4 class="ml-4">
        <v-card-subtitle class="black--text">Please enter Postal Code</v-card-subtitle>

        <v-text-field label="Example... 50100" solo></v-text-field>
      </v-flex>
      <v-flex xs12 md4 class="ml-4">
        <v-card-subtitle class="black--text">Please enter Postal Address</v-card-subtitle>

        <v-text-field label="Example... 1231" solo></v-text-field>
      </v-flex>
    
      <v-flex xs12 md4 class="ml-4">
        <v-card-subtitle class="black--text">Please enter City/Town</v-card-subtitle>

        <v-text-field label="Example... Nairobi" solo></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: vm => ({
    selected: ""
  })
};
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