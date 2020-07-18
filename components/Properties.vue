<template>
  <v-layout
    justify-center
    align-center
    column
    fill-height
  >
    

    <v-flex
      md12
    >
      <v-btn to="/landlord/basic_details/house_name_area" class="position pink">
        Apartment
      </v-btn>
    </v-flex>
    <v-flex
      md12
    >
      <v-btn disabled class="mt-8 position ">
        Hostel
      </v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
export default {

}
</script>
<style scoped>
.position{
  position: relative;
  
  left: 2px;
  top: 300px;
}


</style>
