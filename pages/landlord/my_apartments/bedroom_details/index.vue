<template>
  <v-layout justify-center align-center column fill-height>
    <v-flex xs12 md12>
      <v-card class="mx-auto">
        <v-card-title class="text-center txt">Bedroom Details</v-card-title>

        <v-img height="250" width="600" src="/bedroom.jpeg"></v-img>
      </v-card>
    </v-flex>

    <v-flex xs12 md12>
      <v-card class="mx-auto mt-4" width="600">
        <v-card-subtitle class="txt black--text">What items does your bedroom have ?</v-card-subtitle>
        <v-card-text>
                    <v-checkbox v-model="mirror" :label="`Dressing Mirror `"></v-checkbox>
          <v-checkbox v-model="ensuite" :label="`Ensuite `"></v-checkbox>
          <v-checkbox v-model="balcony" :label="` Balcony`"></v-checkbox>
        </v-card-text>
        
      </v-card>
    </v-flex>
    <v-flex md12 xs12></v-flex>

    <v-flex md12>
      <v-card class="mx-auto mt-4">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#ec7d10">
            <v-icon>mdi-camera</v-icon>
          </v-btn>
          <v-btn @click="next" class="yellow--text text--darken-4" text>Next</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data: () => {
    return {
      mirror: false,
      balcony: false,
      ensuite: false
    };
  },

  watch: {
    model(val, prev) {
      if (val.length === prev.length) return;

      this.model = val.map(v => {
        if (typeof v === "string") {
          v = {
            text: v,
            color: this.colors[this.nonce - 1]
          };

          this.items.push(v);

          this.nonce++;
        }

        return v;
      });
    }
  },

  methods: {
    next() {
            this.$store.commit('SET_BEDROOM_DETAILS', {mirror: this.mirror , ensuite: this.ensuite, balcony:this.balcony})

      this.$router.push("/landlord/my_apartments/kitchen_details");
    },
    edit(index, item) {
      if (!this.editing) {
        this.editing = item;
        this.index = index;
      } else {
        this.editing = null;
        this.index = -1;
      }
    },
    filter(item, queryText, itemText) {
      if (item.header) return false;

      const hasValue = val => (val != null ? val : "");

      const text = hasValue(itemText);
      const query = hasValue(queryText);

      return (
        text
          .toString()
          .toLowerCase()
          .indexOf(query.toString().toLowerCase()) > -1
      );
    }
  }
};
</script>
Foo
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
.position {
  position: relative;

  left: 2px;
  top: 300px;
}
</style>
