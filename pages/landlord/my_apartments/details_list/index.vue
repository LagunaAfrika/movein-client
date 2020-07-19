<template>
  <v-container fluid class="top">
    <v-layout justify-center align-center column>
      <v-flex>
        <v-flex xs12 md12>
          <v-card
            color="#ffffff"
            max-width
            height="100"
            :elevation="10"
            class="mb-4 card pink--text"
          >
            <v-list-item class="grow">
              <v-list-item-content>
                <nuxt-link tag="li" to="/landlord/basic_details/hostel_name_area">
                  <v-card-title class="txt">Basic</v-card-title>
                </nuxt-link>
              </v-list-item-content>
              <v-list-item-content>
                <v-progress-circular
                  :rotate="180"
                  :size="40"
                  :width="20"
                  :value="value"
                  color="pink"
                >{{ value }}</v-progress-circular>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-flex>
        <v-flex xs12 md12>
          <v-card
            color="#ffffff"
            width="800"
            height="100"
            :elevation="10"
            class="mb-4 card pink--text"
          >
            <v-list-item class="grow">
              <v-list-item-content>
                <nuxt-link tag="li" to="/landlord/house_features">
                  <v-card-title class="txt">Hse Dets</v-card-title>
                </nuxt-link>
              </v-list-item-content>
              <v-list-item-content>
                <v-progress-circular
                  :rotate="180"
                  :size="40"
                  :width="20"
                  :value="value"
                  color="pink"
                >{{ value }}</v-progress-circular>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-flex>
        <v-flex xs12 md12>
          <v-card
            color="#ffffff"
            width="800"
            height="100"
            :elevation="10"
            class="mb-4 card pink--text"
          >
            <nuxt-link tag="li" to="/">
              <v-card-title class="txt">Basic Amenities</v-card-title>
            </nuxt-link>
          </v-card>
        </v-flex>
        <v-flex xs12 md12>
          <v-card
            color="#ffffff"
            width="800"
            height="100"
            :elevation="10"
            class="mb-4 card pink--text"
          >
            <nuxt-link tag="li" to="/">
              <v-card-title class="txt">Extra Amenities</v-card-title>
            </nuxt-link>
          </v-card>
        </v-flex>
        <v-flex xs12 md12>
          <v-card
            color="#ffffff"
            width="800"
            height="100"
            :elevation="10"
            class="mb-4 card pink--text"
          >
            <nuxt-link tag="li" to="/">
              <v-card-title class="txt">Legal Documents</v-card-title>
            </nuxt-link>
          </v-card>
        </v-flex>
        <v-flex xs12 md12>
          <v-card
            color="#ffffff"
            width="800"
            height="100"
            :elevation="10"
            class="mb-4 card pink--text"
          >
            <nuxt-link tag="li" to="/">
              <v-card-title class="txt">Payment Details</v-card-title>
            </nuxt-link>
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
  border-radius: 5px;
  font-family: "Comfortaa", cursive;
}
.top {
  background: #edeff1;
}
.next {
  position: absolute;
  width: 414px;
  height: 634px;
  left: -1px;
  top: 289px;

  background: #ffffff;
  border-radius: 20px 20px 0px 0px;
}
.txt {
  font-family: "Comfortaa", cursive;
}
</style>
