<template>
  <v-layout justify-center align-center column fill-height class="txt">
    <v-flex xs12 md12 class="size ">
      <v-img src="/house.svg"></v-img>
    </v-flex>

    <v-flex md12>
      <v-btn
        to="/landlord/basic_details/house_name_area"
        class="position white--text"
        color="#ec7d10"
      >Apartment</v-btn>
    </v-flex>
    <v-flex md12>
      <v-btn disabled class="mt-8 position white--text">Hostel</v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
export default {};
</script>
<style scoped>
.position {
  position: relative;

  left: 2px;
  top: 200px;
}
.txt {
  font-family: "Comfortaa", cursive;
}
.size{
  width: 400px;

}
</style>
