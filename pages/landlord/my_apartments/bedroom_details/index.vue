<template>
  <v-layout justify-center align-center column fill-height>
    <v-flex xs12 md12>
      <v-card class="mx-auto" >
        <v-img
      height="250"
      src="/bedroom.jpeg"
    ></v-img>
     <v-card-subtitle class="txt pink--text"> What items does your bedroom have ?  </v-card-subtitle>
        <v-card-text >
          <v-checkbox class="txt" v-model="selected" label="Wardrobe" value="Wardrobe"></v-checkbox>
          <v-checkbox class="txt" v-model="selected" label="Dressing Mirror" value="Dressing Mirror"></v-checkbox>
          <v-checkbox class="txt" v-model="selected" label="Ensuite" value="Ensuite"></v-checkbox>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex md12 xs12></v-flex>

    <v-flex md12>
      <v-card-actions>
        <v-btn class="pink" text>
          <v-icon>mdi-camera</v-icon>
        </v-btn>
        <v-btn to="/landlord/my_apartments/kitchen_details" class text>Next</v-btn>
      </v-card-actions>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data: () =>{
    return {
      selected: [],
    }
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
