<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      Review contract
      <small>Our digital contracts are standardised and protect both the tenant & landlord without partiality</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <img src="@/assets/images/undraw_contract_uy56.png" width="250" height="250">

      <v-btn color="primary" @click="e6 = 2">
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">
      Sign contract from the comfort of your home
      <small>Our digital contracts are standardised and protect both the tenant & landlord without partiality</small>
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-12" height="200px" />
      <v-btn color="primary" @click="e6 = 3">
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">
      Schedule move in date
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-12" height="200px" />
      <v-btn color="primary" @click="e6 = 4">
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

      <v-stepper-step :complete="e6 > 4" step="4">
      Pay deposit
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-12" height="200px" />
      <v-btn color="primary" @click="e6 = 5">
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>
     <v-stepper-step :complete="e6 > 5" step="5">
      Check-in
    </v-stepper-step>
    <v-stepper-content step="5">
      <v-card color="grey lighten-1" class="mb-12" height="200px" />
      <v-btn color="primary" @click="e6 = 6">
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>
   <v-stepper-step :complete="e6 > 6" step="6">
      Congratulations
    </v-stepper-step>
    <v-stepper-content step="6">
      <v-card color="grey lighten-1" class="mb-12" height="200px" />
      <v-btn color="primary" @click="e6 = 1">
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
export default {
  data () {
    return {
      e6: 1
    }
  }
}
</script>
