<template>
  <v-container fill-height >
    <v-layout justify-center align-center column class="txt">
      <v-flex xs12 mb12>
        <v-flex xs12 mb12>
          <v-carousel>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            />
          </v-carousel>
        </v-flex>

        <v-layout column>
          <v-card-title>Nile House</v-card-title>
          <v-divider class="mx-0" />
          <v-flex xs12 mb12>
            <v-card-title>Summary</v-card-title>

            <v-card-subtitle>A 3 story multifamily apartment with 9 units and 3 bedrooms per unit. Perfect for young families with children between the ages of 0-12.</v-card-subtitle>

            <v-card-title>For your information</v-card-title>
            <v-card-actions>
              <v-btn class="ml-8" outlined @click.stop="dialog = true">
                <v-icon class="mx-4" color="#ec7d10">mdi-file-document-edit</v-icon>
              </v-btn>
              <v-dialog v-model="dialog" max-width="290">
                <v-card>
                  <v-card-title class="txt cyan--text text--darken-4">Contract Info</v-card-title>

                  <v-card-text
                    class="txt black--text"
                  >Contract becomes active upon reciept of deposit</v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="#ec7d10" outlined @click="dialog = false">Agree</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-btn class="ml-8" outlined @click.stop="dialog1 = true ">
                <v-icon class="mx-4" color="#ec7d10">mdi-cancel</v-icon>
              </v-btn>
              <v-dialog v-model="dialog1" max-width="290">
                <v-card>
                  <v-card-title class="txt cyan--text text--darken-4">Termination Info</v-card-title>

                  <v-card-text
                    class="txt black--text"
                  >Notice of termination is done a month in advance</v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="#ec7d10" outlined @click="dialog1 = false">Agree</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-actions>
            <v-divider class="mx-0" />
            
            <v-flex xs12 md12>
              <v-card-title>House Details</v-card-title>
              <v-expansion-panels accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header class="justify-self-start" disable-icon-rotate>
                    <div>
                      <span>3 Bed </span>
                    </div>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>Two of which are Master Ensuit</v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <v-expansion-panels accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header class="justify-self-start" disable-icon-rotate>
                    <div>
                      <span>1.5 Bath</span>
                    </div>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>One bathroom and toilet and one toilet</v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>

              <v-expansion-panels accordion>
                <v-expansion-panel>
                  <v-expansion-panel-header class="justify-self-start" disable-icon-rotate>
                    <div>
                      <span>1 Kitchen</span>
                    </div>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>Fully furnished kitchen</v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            
            <v-card-title>Amenities</v-card-title>
            
              <v-expansion-panels popout>
                <v-expansion-panel v-for="amenity in amenities" :key="amenity">
                  <v-expansion-panel-header class="white black--text">{{ amenity.title}}</v-expansion-panel-header>

                  <v-expansion-panel-content
                    class="white grey--text text--darken-3"
                  >{{ amenity.desc }}</v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-flex>
          </v-flex>
        </v-layout>

        <v-divider class="mx-4" />
        <v-divider class="mx-4" />

        <v-divider class="mx-4" />
        <v-layout column>
          <v-card-title>Landlord Reviews</v-card-title>
          <v-layout row>
            <div class="mx-4 subtitle-1">
              <v-avatar color="teal" size="48" class="mx-4">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
              </v-avatar>
            </div>
            <v-card-actions>
              <v-icon class color="#ec7d10">mdi-star</v-icon>
              <div class="subtitle-1">121 reviews</div>
              <div class="subtitle-1">
                <v-icon class="mx-2" color="#ec7d10">mdi-shield-check</v-icon>Verified
              </div>
            </v-card-actions>
            <v-flex xs12 md12>
              <v-flex xs12 md12>
                <v-card-title class="white--text">Schedule Visit</v-card-title>

                <v-date-picker
                  v-model="picker"
                  :landscape="landscape"
                  :reactive="reactive"
                  :flat="flat"
                  :full-width="fullWidth"
                  :show-current="showCurrent"
                  :type="month ? 'month' : 'date'"
                  :multiple="multiple"
                  :readonly="readonly"
                  :disabled="disabled"
                  :events="enableEvents ? functionEvents : null"
                  color="#0091ad"
                  class="ml-4"
                ></v-date-picker>
              </v-flex>
              <v-divider class="mx-4"></v-divider>
              <v-flex xs12 md12>
                <v-card-text>
                  <v-card-title class="black--text">Time</v-card-title>

                  <v-chip-group multiple active-class="yellow darken-4 white--text" column>
                    <v-chip v-for="tag in tags" :key="tag">{{ tag }}</v-chip>
                  </v-chip-group>
                </v-card-text>
              </v-flex>

              <v-flex>
                <v-card-actions align="center" class="mx-4 my-4">
                  <v-snackbar v-model="snackbar">
                    {{ text }}
                    <template v-slot:action="{ attrs }">
                      <v-btn color="0091ad" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
                    </template>
                  </v-snackbar>
                  <v-btn
                    @click="snackbar = true"
                    class="white--text"
                    color="#ec7d10"
                  >Schedule a viewing</v-btn>
                </v-card-actions>
              </v-flex>

              <v-divider class="mx-4" />

              <div class="mx-2 my-4 subtitle-1">
                <v-icon class="mx-4 yellow--text text--darken-4">mdi-flag</v-icon>
                <a href class="cyan--text">Report this listing</a>
              </div>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "/apartment.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ],
      amenities: [
        {
          title: "Internet",
          desc: "We have a Home Fibre connection"
        },
        {
          title: "Water",
          desc: "24/7 water from Borehole to complement Municipal Water"
        },
        {
          title: "Security",
          desc: "24 hour guard, CCTV Cameras and An Electic Fence"
        },
        {
          title: "Parking Lot",
          desc: "A spacious parking that can accommodate up to 3 cars"
        }
      ],
      dialog: false,
      dialog1: false,
      picker: new Date().toISOString().substr(0, 10),
      landscape: false,
      reactive: false,
      fullWidth: false,
      flat: false,
      showCurrent: true,
      month: false,
      multiple: false,
      readonly: false,
      disabled: false,
      enableEvents: false,
      loading: false,
      snackbar: false,
      text: "Booking confirmed",
      tags: ["09.30 A.M", "11.30 A.M", "1.30 A.M", "3.00 P.M", "4.00 P.M"]
    };
  }
};
</script>
<style scoped>
.txt {
  font-family: "Comfortaa", cursive;
}
</style>
