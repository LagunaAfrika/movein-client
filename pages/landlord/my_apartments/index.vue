<template>
    <v-layout justify-center align-center row>
      <v-flex xs 12 md12>
        <v-flex xs12 md12>
          <v-card
            color="#ffffff"
            min-height="120"
            class="ma-4"
          >
            <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-2 cyan--text text--darken-3">Nile House</v-list-item-title>
        <v-list-item-subtitle class="mb-2 cyan--text text--darken-2">Apartment</v-list-item-subtitle>
        <v-list-item-subtitle mb-2 class="cyan--text text--darken-2"> 9 Houses</v-list-item-subtitle>
        

      </v-list-item-content>

      <v-list-item-icon>
        
        <v-btn to="/landlord/my_apartments/details_list" x-large icon><v-icon class="ma-4 "> mdi-menu-right</v-icon> </v-btn>
      </v-list-item-icon>
    </v-list-item>
          </v-card>
        </v-flex>
        <v-flex xs12 md12>
        <v-card
            color="#ffffff"
            min-height="120"
            class="ma-4"
          >
            <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-2 cyan--text text--darken-3">Nile House</v-list-item-title>
        <v-list-item-subtitle class="mb-2 cyan--text text--darken-2">Apartment</v-list-item-subtitle>
        <v-list-item-subtitle mb-2 class="cyan--text text--darken-2"> 9 Houses</v-list-item-subtitle>
        

      </v-list-item-content>

      <v-list-item-icon>
        <v-btn to="/landlord/my_apartments/details_list" x-large icon><v-icon class="ma-4 "> mdi-menu-right</v-icon> </v-btn>
      </v-list-item-icon>
    </v-list-item>
          </v-card>
        </v-flex>
      </v-flex>
    </v-layout>
</template>
<script>
export default {
  data() {
    return {
      interval: {},
      value: 0
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
