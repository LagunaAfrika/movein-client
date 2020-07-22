<template>
  <v-container fluid>
    <v-layout justify-center align-center column class="txt">
      <v-flex>
        <v-card color="#ffffff">
          <v-card-title>Select the Available Houses</v-card-title>

          <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="yellow darken-4 white--text"
              column
              multiple
            >
              <v-chip>Bed Sitter</v-chip>

              <v-chip>Single Room</v-chip>
            </v-chip-group>
          </v-card-text>
                    <v-card-title>Bedrooms</v-card-title>

          <v-card-actions>
            <v-layout>
              <v-flex xs6 md6>
                <v-btn  tile @click="minusBedroom" >-</v-btn>
              </v-flex>
              <v-flex xs6 md6>
                <v-btn tile >{{ bedrooms }}</v-btn>
              </v-flex>
              <v-flex xs6 md6>
                <v-btn tile @click="addBedroom" >+</v-btn>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 md12>
        <v-card color="#ffffff" class="mt-4" min-width="200">
          
        </v-card>
      </v-flex>

      <v-flex xs12 text-xs-right>
        <v-btn
          to="/landlord/my_apartments/bedroom_details"
          class="mt-6 white--text "
          color="#ec7d10"
          
        >
        next
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    bedrooms: 0
  }),

  methods: {
    set() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    minusBedroom(){
      this.bedrooms--;
    },
    addBedroom(){
      this.bedrooms++;
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
.card {
  border: 1px solid #d64eb4;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: "Comfortaa", cursive;
  position: absolute;
  width: 142px;
  height: 141px;
  left: 100px;
  top: 300px;
}

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
