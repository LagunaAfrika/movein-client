<template>
  <v-container fill-height fluid >
    <v-layout justify-center align-center column>
            <v-flex xs12 md12 class="txt">
              Rent Amount
              <v-text-field
              class="mt-4"
                id="rent_amount"
                v-model="houseData.rent_amount"
                solo
                label="Rent Amount"
                :rules="nameRules"
                required
                color="#0091ad"
              />
            </v-flex>
            
            <v-flex xs12 md12 text-xs-right>
              <v-btn
                @click="next"
                class="mx-0 white--text txt "
                
                color="#ec7d10"
              >
                Next
              </v-btn>
            </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      houseData: {
        rent_amount: ''
      },
      nameRules: [
        v => !!v || 'Rent is required',
        v => v.length <= 25 || 'Name must be less than 25 characters'
      ]
    }
  },
  methods: {
     next(){
      this.$store.commit('SET_RENTAMOUNT_DETAILS', this.houseData.rent_amount)
      this.$router.push("/landlord/my_apartments/my_listing")
    }
  }
}
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
</style>
