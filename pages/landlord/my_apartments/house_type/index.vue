<template>
  <v-container fluid>
    <v-layout justify-center align-center column>
      <v-flex xs12 md12>
        <v-card-title>Available House types</v-card-title>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">Add</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">House Types in your Apartment</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-layout column>
                  <v-flex xs6 md12>
                    <v-combobox
                      :items="items"
                      v-model="select"
                      label="Number of Bedrooms"
                      hint="example of helper text only on focus"
                      multiple
                      chips
                    ></v-combobox>
                    <p> {{ select }}</p>
                  </v-flex>
                  
                </v-layout>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close" >Close</v-btn>
              <v-btn color="blue darken-1" text @click="save" >Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
      <v-flex xs12 md12></v-flex>

      <v-flex xs12 text-xs-right></v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
    data () {
    return {
        dialog: false,
        loading: false,
        dialog: false,
        editedIndex: -1,
        select: [],
        items: ['Single', 'Bedsitter','1 Bedroom', '2 bedroom', '3 Bedroom', '4 Bedroom', '5+ Bedrooms']
    }
  },

  methods: {
    set() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.select[this.editedIndex], this.editedItem)
        } else {
          this.select.push(this.select)
        }
        this.close()
      },
  },
  watch: {
      dialog (val) {
        val || this.close()
      },
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
.card {
  border: 1px solid #d64eb4;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: "Comfortaa", cursive;
  position: absolute;
  width: 142px;
  height: 141px;
  left: 100px;
  top: 300px;
}

.next {
  position: relative;
  width: 414px;
  height: 634px;
  left: 1px;
  top: 28px;

  background: #ffffff;
  border-radius: 25px 25px 0px 0px;
}
.txt {
  font-family: "Comfortaa", cursive;
}
.btn {
  position: relative;

  left: 2px;
  top: 300px;
}
</style>
