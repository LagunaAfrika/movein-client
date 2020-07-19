<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center align-center wrap>
      <v-flex xs12 md8>
            
            <v-flex xs12 md12>
              Rent Amount
              <v-text-field
                id="rent"
                v-model="houseData.house_rent"
                outlined
                label="Location"
                required
                color="#0091ad"
              />
            </v-flex>
            <v-flex xs12 md12>
              <v-btn
                to="/landlord/basic_details/pin"
                class="mx-0 white--text "
                large
                rounded
                color="#ec0868"
              >
                Next
              </v-btn>
            </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      houseData: {
        house_rent: '',
      }
    }
  }
}
</script>
<style scoped>
.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.position{
  position: relative;
  
  left: 2px;
  top: 200px;

}
</style>
