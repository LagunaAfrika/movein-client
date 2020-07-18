<template>
  <v-container fluid>
    <v-layout row class="top"></v-layout>
    <v-layout justify-center align-center column>
      <v-flex xs12 md8>
        <div class="text-md-center mb-4">Select Universities in the vicinity</div>
      </v-flex>
      <v-flex xs12 md8>
        <v-combobox
          v-model="select"
          :items="items"
          color="#0091ad"
          multiple
          outlined
          chips
        >
          <template v-slot:selection="data">
            <v-chip
              :key="JSON.stringify(data.item)"
              v-bind="data.attrs"
              :input-value="data.selected"
              :disabled="data.disabled"
              @click:close="data.parent.selectItem(data.item)"
            >
              <v-avatar
                class="accent white--text"
                left
                v-text="data.item.slice(0, 1).toUpperCase()"
              />
              {{ data.item }}
            </v-chip>
          </template>
        </v-combobox>
      </v-flex>
      <v-flex xs12 text-xs-right>
          <v-btn
            to="/landlord/hostel_features/hostel_details"
            class="mt-4 white--text"
            large
            rounded
            color="#ec0868"
          >
            Next
          </v-btn>
        </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      select: ['JKUAT'],
      items: [
        'KCA',
        'UON',
        'KU'
      ]
    }
  }
}
</script>