<template>
  <v-container fluid>
    <v-layout justify-center align-center column >

        <v-flex xs12 text-xs-right>
          <v-btn
            to="/landlord/add_property"
            class="mx-0 white--text btn"
            
            fab
            large
            
            color="#ec0868"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
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
.btn {
  position: relative;
  
  left: 2px;
  top: 300px;
}
</style>
