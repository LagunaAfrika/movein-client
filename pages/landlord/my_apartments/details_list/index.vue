<template>
  <v-container fluid>
    <v-layout justify-center align-center column>
      <v-flex>
        <v-flex xs12 md12>
          <v-card class="mx-auto my-12" max-width="374">
            <v-card-title class="txt cyan--text text--darken-3">
              Basic Details
            </v-card-title>

            <v-card-text class="txt ">
              <v-card-actions>
                <v-btn color="pink" text to="/landlord/my_apartments/bedroom_details">
                  Edit
                </v-btn>
              </v-card-actions>
            </v-card-text>

            <v-divider class="mx-4" />
            <v-card-title class="txt cyan--text text--darken-3">
              House Features
            </v-card-title>

            <v-card-text class="txt ">
              <v-card-actions>
                <v-btn color="pink" text to="/landlord/my_apartments/details_list">
                  Add More Details
                </v-btn>
              </v-card-actions>
            </v-card-text>

            <v-divider class="mx-4" />
            <v-card-title class="txt cyan--text text--darken-3">
              Basic Amenities
            </v-card-title>

            <v-card-text class="txt ">
              <v-card-actions>
                <v-btn color="pink" text to="/landlord/my_apartments/details_list">
                  Add More Details
                </v-btn>
              </v-card-actions>
            </v-card-text>

            <v-divider class="mx-4" />
            <v-card-title class="txt cyan--text text--darken-3">
              Extra Amenities
            </v-card-title>

            <v-divider class="mx-4" />
          </v-card>
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
      value: 0
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
  border-radius: 5px;
  font-family: "Comfortaa", cursive;
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
