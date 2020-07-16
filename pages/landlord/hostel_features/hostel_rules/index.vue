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
        <div>
          <v-file-input chips multiple label="Upload Document" />
        </div>
      </v-flex>
      <v-layout justify-center wrap="">
        <v-flex xs12 text-xs-right>
          <v-btn
            to="/landlord/add_photos"
            class="mx-0 white--text"
            large
            rounded
            color="#ec0868"
          >
            Next
          </v-btn>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>
