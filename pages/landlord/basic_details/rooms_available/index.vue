<template>
  <v-container fill-height fluid>
    <v-layout justify-center align-center column class="txt">
                <v-flex xs12 md12 class="size mt-4 "><v-img src="/count.svg"></v-img></v-flex>

      <v-flex xs12 md12>
        
        <v-text-field
          v-model="rooms.total"
          id="total_number_of_vacant_houses"
          label="Number of Apartments"
          solo
          color="#0091ad"
          type="number"
          class="mt-4"
        />
      </v-flex>
      <v-flex xs12 md12>
        
        <v-text-field
          v-model="rooms.vacant"
          id="vacant_houses"
          label=" Number of Vacant "
          solo
          color="#0091ad"
          type="number"
        />
      </v-flex>

      <v-flex xs12 md12 text-xs-right>
        <v-btn class=" white--text" large color="#ec7d10" @click="addRooms"
          >Save
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "rooms-available-page",
  data() {
    return {
      rooms: {
        total: "",
        vacant: ""
      }
    };
  },
  methods: {
    addRooms() {
      this.$store.commit("ADD_NUMBER_OF_ROOMS", this.rooms);
      this.$router.push({
        name: "landlord-basic_details-add_photos"
      });
    }
  }
  //   rules: {
  //     required: value => !!value || "Required.",
  //     min: v => v.length >= 8 || "Min 10 characters"
  //   },
  //   studentRules: [
  //     v => !!v || "Number is required",
  //     v => v.length <= 10 || "Number must be less than 10 characters"
  //   ]
  // };
};
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
.size{
    width: 400px;
}
</style>
