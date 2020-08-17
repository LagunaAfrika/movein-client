<template>
  <v-layout justify-center align-center column class="txt">
    <v-stepper v-model="e6" vertical>
      <v-stepper-step color="#ec710d" :complete="e6 > 1" step="1">
        Request tenancy agreement
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-form>
          <v-textarea v-model="movein.agreement" label="Message" />
        </v-form>

        <v-btn color="#ec7d10" class="white--text">
          Request
        </v-btn>

        <v-btn text color="#ec7d10" @click="e6 = 2">
          Continue
        </v-btn>
      </v-stepper-content>

      <v-stepper-step color="#ec710d" :complete="e6 > 2" step="2">
        Submit
        <small>Upload a digital copy of your signed contract</small>
      </v-stepper-step>

      <v-stepper-content step="2">
        <img src="@/assets/images/undraw_contract_uy56.png" width="250" height="250">

        <v-btn color="#ec7d10" class="white--text">
          Upload
        </v-btn>
        <v-btn color="#ec7d10" text @click="e6 = 3">
          Submit
        </v-btn>
      </v-stepper-content>

      <v-stepper-step color="#ec710d" :complete="e6 > 3" step="3">
        Schedule move in date
      </v-stepper-step>

      <v-stepper-content step="3">
        <v-date-picker
          v-model="movein.day"
          year-icon="mdi-calendar-blank"
          prev-icon="mdi-skip-previous"
          next-icon="mdi-skip-next"
        />

        <v-btn color="#ec7d10" class="white--text">
          set
        </v-btn>
        <v-btn color="#ec7d10" text @click="e6 = 4">
          Continue
        </v-btn>
      </v-stepper-content>

      <v-stepper-step color="#ec710d" :complete="e6 > 4" step="4">
        Pay deposit
      </v-stepper-step>

      <v-stepper-content step="4">
        <v-flex xs12 md12>
          <v-card width="430" class="mx-auto">
            <v-layout wrap>
              <v-flex xs6 md6>
                <v-card-text class="grey--text">
                  Name :
                </v-card-text>
              </v-flex>
              <v-flex xs6 md6>
                <v-card-text class="font-weight-grey">
                  Kimani Olingo
                </v-card-text>
              </v-flex>
            </v-layout>
            <v-layout class="mr-4">
              <v-flex xs6 md6>
                <v-card-text class="grey--text">
                  Phone :
                </v-card-text>
              </v-flex>
              <v-flex xs6 md6>
                <v-card-text class="font-weight-grey">
                  +254732845983
                </v-card-text>
              </v-flex>
            </v-layout>
            <v-layout class="mr-4">
              <v-flex xs6 md6>
                <v-card-text class="grey--text">
                  Deposit (Ksh.) :
                </v-card-text>
              </v-flex>
              <v-flex xs6 md6>
                <v-card-text class="font-weight-grey">
                  3000
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <v-radio-group v-model="selected">
          <v-flex xs12 md12>
            <v-card width="430" class="mx-auto mt-6">
              <template>
                <v-expansion-panels focusable>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      <v-card-actions>
                        <v-radio label="MPESA" value="mpesa" />
                      </v-card-actions>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-card-text class="font-weight-grey">
                 Input landlords phonenumber
                      </v-card-text>
                      <v-layout row>
                        <v-flex xs3 md3 class="ml-6">
                          <v-text-field label="+254" readonly />
                        </v-flex>
                        <v-flex xs6 md6 class="ml-2 ">
                          <v-text-field label="phonenumber" />
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
                        <v-radio label="BANK" value="bank" />
                      </v-card-actions>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-layout>
                        <v-flex xs6 md6 class="ml-2 mr-4">
                          <v-text-field v-model="number" label="Card No." required />
                        </v-flex>
                        <v-flex xs6 md6 class="ml-2 mr-4">
                          <v-card-actions class="ml-12 mt-6">
                            <v-img max-width="25" src="/master.png" />
                            <v-img max-width="25" src="/visa.svg" />
                          </v-card-actions>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex xs4 md4 class="ml-2 mr-4">
                          <v-text-field v-model="month" label="MM" required />
                        </v-flex>
                        <v-flex xs4 md4 class="ml-2 mr-4">
                          <v-text-field v-model="year" label="YY" required />
                        </v-flex>

                        <v-flex xs4 md4 class="ml-2 mr-4">
                          <v-text-field v-model="cvc" label="cvc" name="cvc" required />
                        </v-flex>
                      </v-layout>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </template>
            </v-card>
          </v-flex>
        </v-radio-group>

        <v-btn color="#ec710d" class="mt-4 white--text">
          Make payment
        </v-btn>
        <v-btn text color="#ec710d" @click="e6 = 5">
          continue
        </v-btn>
      </v-stepper-content>
      <v-stepper-step color="#ec710d" :complete="e6 > 5" step="5">
        Check-in
      </v-stepper-step>
      <v-stepper-content step="5">
        <v-card-text class="font-weight-black">
          Please confirm moving details
        </v-card-text>

        <v-layout wrap>
          <v-flex xs6 md6>
            <v-card-text class="font-weight-grey">
              Date :
            </v-card-text>
          </v-flex>
          <v-flex xs6 md6>
            <v-card-text class="font-weight-grey">
              {{ movein.day }}
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-layout wrap>
          <v-flex xs6 md6>
            <v-card-text class="font-weight-grey">
              Hse Name/No. :
            </v-card-text>
          </v-flex>
          <v-flex xs6 md6>
            <v-text-field v-model="movein.house_name" solo />
          </v-flex>
        </v-layout>

        <v-btn color="#ec710d" class="white--text" @click="e6 = 6">
          Continue
        </v-btn>
        <v-btn color="#ec710d" text>
          Cancel
        </v-btn>
      </v-stepper-content>
      <v-stepper-step color="#ec710d" :complete="e6 > 6" step="6">
        Congratulations!!
      </v-stepper-step>
      <v-stepper-content step="6">
        <v-card class="mb-12" height="200px">
          <v-img width="300" src="/congratulations.svg" />
        </v-card>
        <v-btn color="#ec710d" class="white--text" @click="e6 = 1">
          Continue
        </v-btn>
        <v-btn text color="#ec710d" @click="snackbar = true">
          Cancel
        </v-btn>
        <v-snackbar v-model="snackbar" :multi-line="multiLine">
          {{ text }}
          <template v-slot:action="{ attrs }">
            <v-btn color="red" text1 v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </v-stepper-content>
    </v-stepper>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      e6: 1,
      movein: {
        day: '',
        house_name: '',
        agreement:
          'Hi,\nMy name is Anila Kimathi. I visited your property on 25/08/2020  and I am interested in moving into one your properties in Juja. \nI would like to have a copy of your tenancy agreement so that I can go through it and sign.\nThank You'
      },
      dropdown_font: ['Master card', 'Visa', 'Mpesa'],
      snackbar: false,
      text:
        "Your request has been received successfully.You'll receive a notification once the landlord uploads your agreement form"
    }
  },
  methods: {
    pay () {
      this.$store.commit('SET_LOCATION', this.model)
      this.$router.push('/tenant/deposit')
    }
  }
}
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
</style>
