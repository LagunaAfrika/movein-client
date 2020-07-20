<template>
  <v-container fluid>
    <v-layout justify-center align-center column >
        <v-flex xs12 md12>
        <v-card class="mx-auto my-12" max-width="374">

          <v-card-title class="txt pink--text">Hello Maina!!</v-card-title>

          <v-card-text class="txt ">
            <v-row align="center" class="mx-0 cyan--text text--darken-3">Welcome to MoveIn Kenya</v-row>

            <div class="my-4  txt cyan--text text--darken-3">
              We make finding and managing rental homes in Kenya simple and convenient.
            </div>

            <div class="cyan--text text--darken-3"></div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn color="pink" text to="/landlord/add_property">START</v-btn>
          </v-card-actions>
        </v-card>
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
