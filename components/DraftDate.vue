<template>
  <v-container fluid>
    <v-layout row  fill-height class="txt">
     <v-flex xs12 md12 > 
        <v-card-subtitle class="black--text">
        Select Date of Signing Agreement
      </v-card-subtitle>
     </v-flex>
         <v-flex xs12 md12 class="ml-4">
            <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateFormatted"
              label="Date"
              hint="MM/DD/YYYY format"
              persistent-hint
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
          
        </v-menu>
        {{ dateFormatted}}
          </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: vm => ({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted:'',
      menu1: false,
      menu2: false,
    }),

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
    },

    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
};
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
</style>