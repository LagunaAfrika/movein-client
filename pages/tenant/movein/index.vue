<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      Request contract
      <small>Receive contract via email</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <img src="@/assets/images/undraw_personal_email_t7nw.png" width="250" height="250">

      <v-btn color="primary" @click="e6 = 2">
        Request
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">
      Sign contract
      <small>Sign contract using your digital signature</small>
    </v-stepper-step>

    <v-stepper-content step="2">
      <img src="@/assets/images/undraw_contract_uy56.png" width="250" height="250">
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
      <v-col>
        <v-date-picker
          v-model="picker"
        />
        <v-btn color="primary" @click="e6 = 4">
          Continue
        </v-btn>
        <v-btn text>
          Cancel
        </v-btn>
      </v-col>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 4" step="4">
      Pay deposit
    </v-stepper-step>

    <v-stepper-content step="4">
      <v-flex xs12 md12>
        KES 1200
      </v-flex>
      <v-overflow-btn
        class="my-2"
        :items="dropdown_font"
        label="Payment option"
        target="#dropdown-example"
      />

      <v-btn color="primary" @click="e6 = 5">
        make payment
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
      e6: 1,
      dropdown_font: ['Master card', 'Visa', 'Mpesa']
    }
  }
}
</script>
