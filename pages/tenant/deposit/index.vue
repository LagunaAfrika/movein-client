<template>
  <v-container fluid>
    <v-layout justify-center align-center column class="txt">
      <v-flex xs12 md12
      >
      <v-card
    width="430"
    class="mx-auto"
  >
      <v-layout wrap>
      <v-flex xs6 md6>
      <v-card-text class="grey--text">Name : </v-card-text>
      </v-flex>
      <v-flex xs6 md6>
        <v-card-text class="font-weight-grey"> Kimani Olingo</v-card-text>
      </v-flex>
      
      
    </v-layout>
    <v-layout class="mr-4">
      <v-flex xs6 md6>
      <v-card-text class="grey--text">
            Phone  :
            
          </v-card-text>
      </v-flex>
      <v-flex xs6 md6>
        <v-text-field solo></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout class="mr-4">
      <v-flex xs6 md6>
      <v-card-text class="grey--text">
            Amount (Ksh.) :
            
          </v-card-text>
      </v-flex>
      <v-flex xs6 md6>
        <v-text-field solo></v-text-field>
      </v-flex>
    </v-layout>

    
  </v-card>
  </v-flex>
  <v-flex xs12 md12
      >
      <v-card
    width="430"
    class="mx-auto mt-6"
  >
  <v-card-title>Mobile Money</v-card-title>
    <v-card-actions>
      <v-radio label="Radio 1" value="radio-1"></v-radio>
    </v-card-actions>
  </v-card>
  </v-flex>
   <v-flex xs12 md12
      >
      <v-card
    width="430"
    class="mx-auto mt-6"
  >
  <v-card-title>Bank</v-card-title>
    
            <v-layout>
                <v-flex xs12 md12 class="ml-2 mr-4">
                    <v-text-field v-model="name"   label="Card Name" required></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout>
               <v-flex xs12 md12 class="ml-2 mr-4">
                    <v-text-field v-model="number"  label="Card Number" required>
                    </v-text-field>
                </v-flex>
            </v-layout>
            <v-layout>
                <v-flex xs4 md4 class="ml-2 mr-4">
                    <v-text-field v-model="month"  label="MM" required></v-text-field>
                </v-flex>
                <v-flex xs4 md4 class="ml-2 mr-4">
                    <v-text-field v-model="year" label="YY" required></v-text-field>
                </v-flex>

                <v-flex xs4 md4 class="ml-2 mr-4">
                    <v-text-field v-model="cvc"  label="cvc" name="cvc" required></v-text-field>
                </v-flex>
            </v-layout>
    
  </v-card>
  </v-flex>
  
    </v-layout>
  </v-container>
</template>
<script>
export default {
    name: 'CheckoutForm',
    data () {
    return {
        number : '',
        name : '',
        expiry : '',
        cvc : '',
      

    }
    }
}
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
</style>