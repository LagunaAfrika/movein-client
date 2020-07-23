<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
     Schedule move date
      <small>Our digital contracts are standardised and protect both the tenant & landlord without partiality</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card color="grey lighten-1" class="mb-12" height="200px" />
      <v-btn color="primary" @click="e6 = 2">
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">
    Claim your security deposit
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
     Checkout and earn 300 points
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
