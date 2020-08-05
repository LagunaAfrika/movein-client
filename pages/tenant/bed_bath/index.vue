<template>
  <v-container fluid>
    <v-layout justify-center align-center column class="txt">
      <v-flex xs12 md12>
        <v-card color="#ffffff" width="600">
          <v-overflow-btn
            class="my-2"
            :items="house_types"
            label="Select house type"
            editable
            item-value="text"
            v-model="houseData.selected"
          ></v-overflow-btn>
          <v-flex xs12 md12 >
            <v-list-item >
              <v-list-item-title class="mb-8">Bathrooms</v-list-item-title>

              <v-card-actions class="mb-8">
                <v-layout justify-center align-center>
                  <v-btn tile @click="minusBathroom">-</v-btn>

                  <v-btn tile>{{ houseData.bathrooms }}</v-btn>

                  <v-btn tile @click="addBathroom">+</v-btn>
                </v-layout>
              </v-card-actions>
            </v-list-item>
          </v-flex>
          <v-flex xs12 md12 class="txt">
        
          </v-flex>
        </v-card>
      </v-flex>

      <v-flex xs12 md12>
        <v-card color="#ffffff" class="mt-4" min-width="200"></v-card>
      </v-flex>

      <v-flex xs12 text-xs-right>
        <v-btn @click="next" class="mt-6 white--text" color="#ec7d10">next</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "houseType",
  data: () => ({
    houseData: {
      rent_amount: "",
      selected: "",
      bathrooms: 0,
      
    },
    loading: false,
    house_types: ["Bedsitter", "One bedroom"]
  }),

  methods: {
    next() {
      this.$store.commit("SET_HOUSE_DESCRIPTION", {
        bathrooms: this.houseData.bathrooms,
        description: this.houseData.description,
        house_type: this.houseData.selected
      });
      this.$store.commit("SET_RENTAMOUNT_DETAILS", this.houseData.rent_amount);
      this.$router.push("/landlord/my_apartments/bedroom_details");
    },
    set() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    minusBathroom() {
      this.houseData.bathrooms--;
    },
    addBathroom() {
      this.houseData.bathrooms++;
    }
  },
  head() {
    return {
      script: [
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Comfortaa&display=swap"
        }
      ]
    };
  }
};
</script>
    <style scoped>

.next {
  position: absolute;
  width: 414px;
  height: 634px;
  left: -1px;
  top: 289px;

  background: #ffffff;
  border-radius: 25px 25px 0px 0px;
}
.txt {
  font-family: "Comfortaa", cursive;
}
.btn {
  position: relative;

  left: 2px;
  top: 300px;
}
</style>
