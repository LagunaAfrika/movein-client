<template>
  <v-layout
    justify-center
    align-center
    column
    fill-height
  >
    <v-layout
      row
      class="top"
    />
    <v-select
      outlined
      :items="items"
      type="student_per_room"
      label="Students Per Room"
      :rules="studentRules"
      required
      color="#0091ad"
    />
    <v-text-field
      label="Monthly Rent"
      outlined
    />
    <v-flex xs12 text-xs-right>
      <v-btn
        to="/landlord/basic_details/add_photos"
        class="mx-0 white--text"
        large
        rounded
        color="#ec0868"
      >
        Next
      </v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data () {
    return {
      items: ['1', '2', '4', '6']
    }
  },
  rules: {
    required: value => !!value || 'Required.',
    min: v => v.length >= 8 || 'Min 10 characters'
  },
  studentRules: [
    v => !!v || 'Number is required',
    v => v.length <= 10 || 'Number must be less than 10 characters'
  ]

}
</script>
<style scoped>
.top{
  height: 200px;
}#border {
  border: 2px solid red;
  border-radius: 25px;
}

</style>
