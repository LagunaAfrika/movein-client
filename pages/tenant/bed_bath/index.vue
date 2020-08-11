<template>
  <v-layout justify-center align-center column  class="txt">
    <v-flex xs12 md12 class=" size mt-4">
          <v-card-title class="text-center"> What type of house  do you want</v-card-title>

      <v-img class="image" src="/house.svg"></v-img>
    </v-flex>

      
        <v-flex xs12 md12>
          <v-card-title class="mb-2">Your preferred house</v-card-title>
          <v-divider class="mx-2"></v-divider>
                   <v-chip-group
            active-class="yellow darken-4 white--text"
            v-model="tenantData.picked"
            column
            
          >
            <v-chip
              v-for="bedroom in tenantData.bedrooms"
              :key="bedroom"
              :value="bedroom"
            >{{ bedroom }}</v-chip>
          </v-chip-group>
        </v-flex>
        <v-divider class="mx-4"></v-divider>

        <v-divider class="mx-2"></v-divider>

    
      <v-flex xs12 text-xs-right>
        <v-btn @click="next" class=" white--text btn" color="#ec7d10">next</v-btn>
      </v-flex>
    </v-layout>
</template>
<script>
export default {
  name: "bedBath",
  data: () => ({
    tenantData: {
      picked: [],
      bathrooms: 0,
      bedrooms: ["Bedsitter", "One bedroom"]
    },
  }),

  methods: {
    next() {
      this.$store.commit("SET_BEDROOM_AND_BATHROOM", {
        bathrooms: this.tenantData.bathrooms,
        house_type: this.tenantData.picked
      });
  
      this.$router.push("/tenant/amenities");
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
  position: fixed;
  z-index: 100;

  left: 44%;
  top: 85%;
  bottom: 50px;
}
.image {
  z-index: 1;
}
.size {
  width: 385px;
  height: 250px;
}
</style>
