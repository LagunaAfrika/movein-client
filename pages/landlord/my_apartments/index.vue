cr<template>
  <v-container fluid>
    <v-layout justify-center align-center row class>
      <v-flex 12 xs md12>
        <v-flex xs12 md12>
          <v-card class="mx-auto " max-width="600">
            <v-card-title class=" text-center txt">
              My Apartments
            </v-card-title>
            <v-img
              height="250"
              src="/apartment.jpg"
            />

            <v-card-title class=" txt">
              Baraka Apartments
            </v-card-title>

            <v-card-text class="txt ">
              <v-row align="center" class="mx-0">
                9 Units · 2 Vacant · KES 150 000 p/m 
              </v-row>

              <div class="txt my-4    black--text">
                <v-icon color="#ec7d10">
                  mdi-map-marker
                </v-icon> Kasarani County, Kenya
              </div>
            </v-card-text>

            <v-divider class="mx-4" />
            <v-card-actions>
              <v-btn class="yellow--text text--darken-4 txt" text to="/landlord/my_apartments/my_listing">
              View more
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-btn class="yellow--text text--darken-4 txt center-text" text to="/landlord/add_property">
            new property
          </v-btn>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      interval: {},
      value: 0,
      cards: [{ src: '@/assets/images/apartment.jpg' }]
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  mounted () {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0)
      }
      this.value += 10
    }, 1000)
  },
  head () {
    return {
      script: [
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Comfortaa&display=swap'
        }
      ]
    }
  }
}
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
