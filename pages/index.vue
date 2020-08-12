<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <v-img
          class="white--text align-end"
          height="200px"
          src="/movein.jpeg"
        />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to Move In
        </v-card-title>
        <v-card-text>
          <p>
            Move in is an agent free platform where landlords and tenants interact directly
          </p>
        </v-card-text>
      </v-card>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="yellow--text text--darken-4 txt"
          nuxt
          class="landlord"
          to="/landlord"
        >
          Landlords
        </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="yellow--text text--darken-4 txt"
          class="tenants"
          nuxt
          to="/tenant"
        >
          Tenants
        </v-btn>
      </v-card-actions>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  components: {
  }
}
</script>
<style scoped>
.tenants{
  position: absolute;
  left:20%;
  top:75%;
}
.landlord{
  position: absolute;
  right:20%;
  top:75%;
}
</style>
