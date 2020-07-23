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

    <v-flex xs12 text-xs-right>
      <v-btn
        to="/landlord/completed"
        class="mx-0 white--text"
        x-large
        rounded
        color="#ec0868"
      >
        Completed
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
  height: 200px;
  background-color: brown;
}#border {
  border: 2px solid red;
  border-radius: 25px;
}

</style>
