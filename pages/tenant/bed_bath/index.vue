<template>
  <v-container fluid>
    <v-layout justify-center align-center column class="txt">
      <v-flex xs12 md12>
        <v-card color="#ffffff" width="600">
          <v-card-title > Select the Type of  Houses</v-card-title>

         <v-overflow-btn
          class="my-2"
          :items="houseTypes"
          label="Select house type"
          editable
          item-value="text"
          v-model="selected"
        ></v-overflow-btn>
          

          <v-card-actions>
            <v-layout justify-center align-center>
                <v-flex xs12 md12>
                <v-flex xs12 md12>
                <v-card-title>Bathrooms</v-card-title>
                </v-flex>
              <v-flex xs12 md12 class="ml-12">
                <v-btn  tile @click="minusBathroom">-</v-btn>

                <v-btn tile>{{ bathrooms }}</v-btn>

                <v-btn tile @click="addBathroom">+</v-btn>
              </v-flex>
                </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 md12>
        <v-card color="#ffffff" class="mt-4" min-width="200"></v-card>
      </v-flex>

      <v-flex xs12 text-xs-right>
        <v-btn
          @click="next"
          class="mt-6 white--text"
          color="#ec7d10"
        >next</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    selected: "",
    bathrooms: 0,
    description:"",
    houseTypes: ['Bedsitter', 'One bedroom']
  }),
  

  methods: {
    next(){
      this.$store.commit('SET_HOUSE_DESCRIPTION', {bathrooms: this.bathrooms , description: this.description, house_type:this.selected})
      this.$router.push("/tenant/category_list")
    },
    set() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    minusBathroom() {
      this.bathrooms--;
    },
    addBathroom() {
      this.bathrooms++;
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
