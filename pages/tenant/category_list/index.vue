<template>
  <v-container fluid>
    <v-layout column justify-center align-center fill-height class="txt">
      <v-card-title>Your Matches !!</v-card-title>
      <v-card width="310" class="card">
        <v-card-title>Matches Everything You Want</v-card-title>

        <v-card-subtitle>Price,Location, House type</v-card-subtitle>

        <v-card-actions>
          <v-btn small class=" btn mt-6 white--text" color="#ec7d10" @click="next">
            5
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mt-4 card" width="310">
        <v-card-title>Matches Your Budget & Desired location</v-card-title>

        <v-card-subtitle>Compromise on house preferred</v-card-subtitle>

        <v-card-actions>
          <v-btn small class=" btn mt-6 white--text" color="#ec7d10" @click="next">
            7
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mt-4 card" width="310">
        <v-card-title>Matches Your Budget & House Preference</v-card-title>

        <v-card-subtitle>Comprtomise on location</v-card-subtitle>

        <v-card-actions>
          <v-btn small class=" btn mt-6 white--text" color="#ec7d10" @click="next">
            10
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mt-4 card" width="310">
        <v-card-title>Matches Your desired location & House Preference</v-card-title>

        <v-card-subtitle>Increase Your Budget</v-card-subtitle>

        <v-card-actions>
          <v-btn small class=" btn mt-6 white--text" color="#ec7d10" @click="next">
            14
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-divider class="mx-4" />
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      loading: false
    }
  },
  methods: {
    next () {
      this.$router.push('/auth/signup')
    }
  }
}
</script>
<style scoped>

.txt {
  font-family: "Comfortaa", cursive;
}
.card {
  border-radius: 18px 18px 18px 18px;

}
.btn {
  position: absolute;

  right: 2px;
  top: 45px;
  background: #ffffff;
  border-radius: 25px 0px 25px 0px;
}
</style>
