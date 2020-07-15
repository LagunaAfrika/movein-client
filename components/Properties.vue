<template>
  <v-layout
    justify-center
    align-center
    column
    fill-height
  >
    <v-layout
      row
      class="top"
    />

    <v-flex
      md12
      class="center"
    >
      <v-btn to="/landlord/hostel_name_area">
        Hostel
      </v-btn>
    </v-flex>
    <v-flex
      md12
      class="center"
    >
      <v-btn disabled class="mt-8">
        Apartment
      </v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
export default {

}
</script>
<style scoped>
.top{
  height: 300px;
}

</style>
