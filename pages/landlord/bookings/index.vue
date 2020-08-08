<template>
  <v-card :loading="loading" class="mx-auto my-12 txt" max-width="374">
    <v-img height="250" src="/apartment.jpg" />

    <v-card-title class="black--text">
      Baraka Apartments
    </v-card-title>

    <v-card-text class="txt">
      <div> John Macharia </div>
      <div> +254718275658 </div>
      <div>
        Friday,
        June 27, 2020
        6pm
      </div>
    </v-card-text>
    <div class="ma-2">
      <v-card-actions>
        <v-btn color="#ec7d10" class="white--text" @click="snackbar = true">
          Confirm
        </v-btn>
        <v-btn color="yellow darken-4" outlined text @click="reserve">
          Chat
        </v-btn>
      </v-card-actions>
      <v-snackbar v-model="snackbar">
        {{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn color="0091ad" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>

    <v-divider class="mx-4" />

    <v-card-title class="black--text">
      Reschedule
    </v-card-title>

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
      class="ml-10"
    />
    <v-divider class="mx-4" />

    <v-card-text>
      <v-card-title class="black--text">
        Time
      </v-card-title>

      <v-chip-group v-model="selection" multiple active-class="yellow darken-4 white--text" column>
        <v-chip>9:30 AM</v-chip>

        <v-chip>11:30 AM</v-chip>

        <v-chip>1:00 PM</v-chip>

        <v-chip>2:30PM</v-chip>
        <v-chip>4:00PM</v-chip>
        <v-chip>5:30PM</v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => {
    return {
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
      selection: 1,
      snackbar: false,
      text: 'Booking confirmed'
    }
  },

  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
  }
}
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
</style>
