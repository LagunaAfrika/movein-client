<template>
 <v-container fluid>
  <v-layout justify-center align-center row class>
    <v-flex 12 xs md12>
     
      <v-flex xs12 md12>
        <v-card class="mx-auto my-12" max-width="374">
          <v-img
      height="250"
      src="/apartment.jpg"
    ></v-img>

          <v-card-title class="txt pink--text">Baraka Apartments</v-card-title>

          <v-card-text class="txt ">
            <v-row align="center" class="mx-0">9 Units · 2 Vacant</v-row>

            <div class="my-4 subtitle-1">
              <v-icon color="pink">mdi-map-marker</v-icon>Kasarani County, Kenya
            </div>

            <div class="cyan--text text--darken-3">One-bedroom apartment​ located in the heart of Kasarani on Thika Super Highway. Close to three major malls with easy access to Nairobi.</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn color="pink" text to="/landlord/my_apartments/details_list">Edit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-flex>
    
  </v-layout>
 </v-container>
</template>
<script>
export default {
  data() {
    return {
      interval: {},
      value: 0,
      cards: [{ src: "@/assets/images/apartment.jpg" }]
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
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
.v-progress-circular {
  margin: 1rem;
}
.card {
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: "Comfortaa", cursive;
}
.top {
  background: #0091ad;
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
</style>
