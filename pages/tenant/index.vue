<template>
  <v-layout justify-center align-center column class="txt">
    
    <v-flex xs12 md12 class="size mt-4">
      <v-card-title class="text-center">
      Where would you like to stay
    </v-card-title>
      <v-img class="image" src="/location.svg" />
    </v-flex>

    <v-flex 12 xs md12 class="mt-4">
      <v-autocomplete
        v-model="model"
        :items="towns"
        clearable
        prepend-inner-icon="mdi-map-marker"
        label="Example.. Kasarani"
        solo
        item-text="name"
        item-value="model"
        color="#ec7d10"
      />
    </v-flex>
    <v-flex xs12 md12>
      <v-card-actions>
        <v-btn class="btn" color="yellow darken-4 white--text" @click="next">
          next
        </v-btn>
      </v-card-actions>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data: () => {
    return {
      isLoading: false,
      towns: [
        { name: 'Kahawa' },
        { name: 'Juja' },
        { name: 'Kasarani' },
        { name: 'Westlands' }
      ],
      model: '',
      search: null,
      tab: null
    }
  },
  methods: {
    next () {
      this.$store.commit('SET_LOCATION', this.model)
      this.$router.push('/tenant/hood')
    }
  }
}
</script>
<style scoped>
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
  width: 400px;
  height: 250px;
}
</style>
