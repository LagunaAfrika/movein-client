<template >
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Agreement Draft Date</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Apartment Type</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">Land Ref. No.</v-stepper-step>

      <v-divider></v-divider>
      
      <v-stepper-step :complete="e1 > 5" step="4">Drafted By</v-stepper-step>

      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 4" step="4">Address</v-stepper-step>

      <v-divider></v-divider>
      
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-12" height="400">
          <AgreementDate />
        </v-card>

        <v-btn color="#ec7d10" class="white--text" @click="e1 = 2">Continue</v-btn>

        <v-btn text color="#ec7d10">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" height="400px">
          <PropertyType />
        </v-card>

        <v-btn color="#ec7d10" class="white--text" @click="e1 = 3">Continue</v-btn>

        <v-btn text color="#ec7d10">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" height="400px">
          <LandRef />
        </v-card>

        <v-btn color="#ec7d10" class="white--text" @click="e1 = 4">Continue</v-btn>

        <v-btn text color="#ec7d10">Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="4">
        <v-card class="mb-12" height="400px">
          <DraftedBy />
        </v-card>

        <v-btn color="#ec7d10" class="white--text" @click="e1 = 5">Continue</v-btn>

        <v-btn text color="#ec7d10">Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="5">
        <v-card class="mb-12" height="400px">
          <Address />
        </v-card>

        <v-btn color="#ec7d10" class="white--text" @click="e1 = 1">Continue</v-btn>

        <v-btn text color="#ec7d10">Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import AgreementDate from "~/components/AgreementDate";
import PropertyType from "~/components/PropertyType";
import LandRef from "~/components/LandRef";
import DraftedBy from "~/components/DraftedBy";
import Address from "~/components/Address";
export default {
  components: {
    AgreementDate,
    PropertyType,
    LandRef,
    DraftedBy,
    Address
  },
  data() {
    return {
      e1: 1
    };
  }
};
</script>


