<template>
  <v-container fill-height fluid>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <div class="text-md-center mb-4">
          Hostel Rules
        </div>
        <v-row align="center" justify="center">
          <v-img
            src="https://bad.src/not/valid"
            lazy-src="https://picsum.photos/id/11/100/60"
            aspect-ratio="1"
            class="grey lighten-2"
            max-width="500"
            max-height="300"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular indeterminate color="grey lighten-5" />
              </v-row>
            </template>
          </v-img>
        </v-row>
        <v-flex xs12 text-xs-right>
          <v-file-input chips multiple label="Upload Document" />
        </v-flex>
        <v-flex xs12 text-xs-right>
          <v-btn @click="snackbar = true">
            Complete
          </v-btn>
          <v-snackbar
            v-model="snackbar"
          >
            {{ text }}

            <template v-slot:action="{ attrs }">
              <v-btn
                color="#ec0868"
                text
                v-bind="attrs"
                @click="snackbar = false"
              >
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    snackbar: false,
    text: 'Your Property has been saved'
  })
}
</script>
