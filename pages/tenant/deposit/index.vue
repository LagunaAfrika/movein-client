<template>
  <v-container fluid>
    <v-layout justify-center align-center column class="txt">
      <v-flex xs12 md12>
        <v-card width="430" class="mx-auto">
          <v-layout wrap>
            <v-flex xs6 md6>
              <v-card-text class="grey--text">Name :</v-card-text>
            </v-flex>
            <v-flex xs6 md6>
              <v-card-text class="font-weight-grey">Kimani Olingo</v-card-text>
            </v-flex>
          </v-layout>
          <v-layout class="mr-4">
            <v-flex xs6 md6>
              <v-card-text class="grey--text">Phone :</v-card-text>
            </v-flex>
             <v-flex xs6 md6>
              <v-card-text class="font-weight-grey">+254732845983</v-card-text>
            </v-flex>
          </v-layout>
          <v-layout class="mr-4">
            <v-flex xs6 md6>
              <v-card-text class="grey--text">Deposit (Ksh.) :</v-card-text>
              
            </v-flex>
             <v-flex xs6 md6>
              <v-card-text class="font-weight-grey">3000</v-card-text>
            </v-flex>
          </v-layout>
          
        </v-card>
      </v-flex>
      <v-radio-group v-model="selected" >
                
      <v-flex xs12 md12>
        <v-card width="430" class="mx-auto mt-6">
          <template>
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <v-card-actions>
                    <v-radio  label="MPESA" value="mpesa"></v-radio>
                  </v-card-actions>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-layout row>
                      
                    <v-flex xs3 md3 class="ml-6">
                      <v-text-field label="+254" readonly></v-text-field>
                    </v-flex>
                    <v-flex xs6 md6 class="ml-2 ">
                      <v-text-field label="phonenumber" ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </template>
        </v-card>
      </v-flex>
      <v-flex xs12 md12>
        <v-card width="430" class="mx-auto mt-6">
          <template>
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header>
                 <v-card-actions>
                    <v-radio label="BANK" value="bank"></v-radio>
                  </v-card-actions>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-layout>
                    <v-flex xs6 md6 class="ml-2 mr-4">
                      <v-text-field v-model="number" label="Card No." required></v-text-field>
                    </v-flex>
                    <v-flex xs6 md6 class="ml-2 mr-4">
                      <v-card-actions class="ml-12 mt-6" >
                      <v-img max-width="25" src="/master.png" />
                      <v-img max-width="25" src="/visa.svg" />
                    </v-card-actions>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex xs4 md4 class="ml-2 mr-4">
                      <v-text-field v-model="month" label="MM" required></v-text-field>
                    </v-flex>
                    <v-flex xs4 md4 class="ml-2 mr-4">
                      <v-text-field v-model="year" label="YY" required></v-text-field>
                    </v-flex>

                    <v-flex xs4 md4 class="ml-2 mr-4">
                      <v-text-field v-model="cvc" label="cvc" name="cvc" required></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </template>
          
        </v-card>
        </v-flex>
        
        </v-radio-group>
        
        <v-btn color="#ec710d" class="mt-4 white--text" @click="pay" >PAY 3000</v-btn>
      

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