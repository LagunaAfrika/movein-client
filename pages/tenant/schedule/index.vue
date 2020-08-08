<template>
  <v-layout justify-center align-center column class="txt">
    <v-flex xs12 md12 class="size mt-4"></v-flex>
    <v-layout column justify-center>
      <v-card flat max-width="350" color="#f7f4ef">
        <v-card-actions></v-card-actions>
        <v-flex xs12 md12>
          <v-flex xs12 md12>
            <v-card-title class="black--text">Select A Day and Time</v-card-title>

            <v-date-picker
              v-model="picker"
              :landscape="landscape"
              :reactive="reactive"
              :flat="flat"
              :full-width="fullWidth"
              :show-current="showCurrent"
              :type="month ? 'month' : 'date'"
              :multiple="multiple"
              :readonly="readonly"
              :disabled="disabled"
              :events="enableEvents ? functionEvents : null"
              color="#0091ad"
            ></v-date-picker>
          </v-flex>
          <v-flex xs12 md12>
            <v-card-text>
              <v-card-title class="black--text">Time</v-card-title>

              <v-chip-group multiple active-class="yellow darken-4 white--text" column>
                <v-chip v-for="tag in tags" :key="tag">{{ tag }}</v-chip>
              </v-chip-group>
            </v-card-text>
          </v-flex>

          <v-flex>
            <v-card-actions align="center" class="mx-4 my-4">
              <v-snackbar v-model="snackbar">
                {{ text }}
                <template v-slot:action="{ attrs }">
                  <v-btn color="0091ad" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
                </template>
              </v-snackbar>
              <v-btn @click="snackbar = true" class="white--text" color="#ec7d10">Schedule</v-btn>
              <v-btn text @click="book" color="#ec7d10">Book House</v-btn>
            </v-card-actions>
          </v-flex>
        </v-flex>
      </v-card>
    </v-layout>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      dialog1: false,
      picker: new Date().toISOString().substr(0, 10),
      landscape: false,
      reactive: false,
      fullWidth: false,
      flat: false,
      showCurrent: true,
      month: false,
      multiple: false,
      readonly: false,
      disabled: false,
      enableEvents: false,
      loading: false,
      snackbar: false,
      text: "Booking confirmed",
      tags: ["09.30 A.M", "11.30 A.M", "1.30 A.M", "3.00 P.M", "4.00 P.M"]
    };
    
  },
  methods: {
       book() {
      
     // this.$store.commit("SET_AMENITIES", this.tenantData.picked);
      this.$router.push("/tenant/movein");
    },
      
  }
};
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
</style>