<template >
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Agreement Draft Date</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Apartment Type</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">Land Ref. No.</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 4" step="4">Drafted By</v-stepper-step>

      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 5" step="5">House Details</v-stepper-step>

      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 6" step="6">Signing Date</v-stepper-step>

      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 7" step="7">Landlord Details</v-stepper-step>

      <v-divider></v-divider>
      
      <v-stepper-step :complete="e1 > 8" step="8">Tenant Name</v-stepper-step>

      
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
            <HouseDetails />
          </v-card>

          <v-btn color="#ec7d10" class="white--text" @click="e1 = 6">Continue</v-btn>

          <v-btn text color="#ec7d10">Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-content step="6">
          <v-card class="mb-12" height="400px">
            <SignDate />
          </v-card>

          <v-btn color="#ec7d10" class="white--text" @click="e1 = 7">Continue</v-btn>

          <v-btn text color="#ec7d10">Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-content step="7">
          <v-card class="mb-12" height="400px">
            <LandlordDetails />
          </v-card>

          <v-btn color="#ec7d10" class="white--text" @click="e1 = 8">Continue</v-btn>

          <v-btn text color="#ec7d10">Cancel</v-btn>
        </v-stepper-content>
        
      <v-stepper-content step="8">
        <v-card class="mb-12" height="400px">
          <TenantDetails />
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
import HouseDetails from "~/components/HouseDetails";
import SignDate from "~/components/SignDate";
import LandlordDetails from "~/components/LandlordDetails";
import TenantDetails from "~/components/TenantDetails";
export default {
  components: {
    AgreementDate,
    PropertyType,
    LandRef,
    DraftedBy,
    HouseDetails,
    SignDate,
    LandlordDetails,
    TenantDetails,
  },
  data() {
    return {
      e1: 1
    };
  }
};
</script>


