<template>
  <v-container fluid>
    <v-layout justify-center align-center column class="txt">
      <v-flex xs12 md12>
        <v-flex xs12 md12 class="size mt-4">
          <v-img src="/preference.svg"></v-img>
        </v-flex>

        <v-flex xs12 md12>
          <v-card-title>Preferred Amenities</v-card-title>

          <v-chip-group
            active-class="yellow darken-4 white--text"
            v-model="tenantData.picked"
            column
            multiple
          >
            <v-chip
              v-for="amenity in tenantData.amenities"
              :key="amenity"
              :value="amenity"
            >{{ amenity }}</v-chip>
          </v-chip-group>
          
        </v-flex>
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
      
      this.$store.commit("SET_AMENITIES", this.tenantData.picked);
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
.size{
  width: 400px;
}
</style>