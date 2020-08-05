<template>
  <v-container fluid>
    <v-layout justify-center align-center column class="txt">
      <v-flex xs12 md12>
        <v-card color="#ffffff" width="600">
          <v-flex xs12 md12 class="txt"></v-flex>
        </v-card>
        <v-card class="mx-auto" max-width="400">
          <v-card-text>
            <h2 class="black--text mb-2">Your preferred house</h2>
          </v-card-text>

          <v-overflow-btn
            class="my-2"
            :items="house_types"
            label="Bedrooms"
            small-chips
            editable
            item-value="text"
            v-model="tenantData.selected"
          ></v-overflow-btn>
          <v-flex xs12 md12>
            <v-list-item>
              <v-list-item-title class="mb-8">Bathrooms</v-list-item-title>

              <v-card-actions class="mb-8">
                <v-layout justify-center align-center>
                  <v-btn tile @click="minusBathroom">-</v-btn>

                  <v-btn tile>{{ tenantData.bathrooms }}</v-btn>

                  <v-btn tile @click="addBathroom">+</v-btn>
                </v-layout>
              </v-card-actions>
            </v-list-item>
            <v-card-text>
              <h2 class="black--text mb-2">Your preferred amenities</h2>

              <v-chip-group active-class="yellow darken-4 white--text" v-model="tenantData.picked" column multiple>
                <v-chip v-for="amenity in tenantData.amenities" :key="amenity" :value="amenity">{{ amenity }}</v-chip>
              </v-chip-group>
            </v-card-text>
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
  name: "bedBath",
  data: () => ({
    tenantData: {
      rent_amount: "",
      selected: "",
      bathrooms: 0,
      
        picked: [],
        amenities: [
          "Borehole",
          "Generator",
          "Security",
          "Balcony",
          "Pet Friendly"
        ]
      
    },
    loading: false,
    house_types: ["Bedsitter", "One bedroom"]
  }),

  methods: {
    next() {
      this.$store.commit("SET_HOUSE_DESCRIPTION", {
        bathrooms: this.tenantData.bathrooms,
        house_type: this.tenantData.selected
      });
      this.$store.commit("SET_RENTAMOUNT_DETAILS", this.tenantData.rent_amount);
      this.$router.push("/tenant/category_list");
    },
    set() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    minusBathroom() {
      this.tenantData.bathrooms--;
    },
    addBathroom() {
      this.tenantData.bathrooms++;
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
