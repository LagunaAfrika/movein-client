<template>
  <v-container fluid>
    <v-layout justify-center align-center column class="txt">
     
    </v-layout>
  </v-container>
</template>
    
  
<script>
export default {
  name: "CheckoutForm",
  data() {
    return {
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      selected: "",
    };
  },
  methods:  {
      pay(){
          this.$router.push("/tenant/movein");
      }
  }
};
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
</style>