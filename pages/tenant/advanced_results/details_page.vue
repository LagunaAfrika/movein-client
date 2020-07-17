<template>
  <v-col
    :align="center"
    :justify="center"
  >
    <v-img
      height="250"
      src=" https://picsum.photos/id/1/200"
    />

    <v-card-title>Nile House</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        />

        <div class="grey--text ml-4">
          4.5 (10)
        </div>
      </v-row>

      <div class="my-4 subtitle-1">
        KES 150 000
      </div>

      <v-row
        align="center"
        class="mx-0"
      >
        <div>Available now</div>
        <div
          class="cyan--text ml-4"
        >
          Verified 3 days ago
        </div>
      </v-row>
    </v-card-text>
      <v-divider class="mx-4" />
    <v-row>

   <v-card-text
        class="mx-4"
      >
        Facilities
   </v-card-text>
    </v-row>
    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip
          outlined
          color="#0091AD"
        >
          <v-icon left>
            mdi-bed
          </v-icon>
          1 Bed room
        </v-chip>

        <v-chip
          outlined
          color="#0091AD"
        >
          <v-icon left>
            mdi-shower
          </v-icon>
          1 Bathroom
        </v-chip>

        <v-chip
          outlined
          color="#0091AD"
        >
          <v-icon left>
            mdi-garage
          </v-icon>
          1 Garage
        </v-chip>

        <v-chip
          outlined
          color="#0091AD"
        >
          Kitchen
        </v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="cyan darken-2"
        text=""
        outlined=""
        @click="reserve"
      >
        <v-icon left>
          mdi-book
        </v-icon>
        Request tour
      </v-btn>
      <v-btn
        outlined=""
        color="cyan darken-2"
        text=""
        @click="reserve"
      >
        <v-icon left>
          mdi-chat
        </v-icon>
        Message
      </v-btn>
    </v-card-actions>
    <v-divider class="mx-4" />
    <v-card-title>Commute</v-card-title>
    <v-row>
      <div class="mx-4 subtitle-1">
        <v-icon class=" mx-4 my-4 " color="0091AD">
          mdi-car
        </v-icon>
        Vehicle
      </div>
      <div class="mx-4  mx-4 my-4 subtitle-1">
        30 min drive to your workplace
      </div>
    </v-row>
    <v-divider class="mx-4" />
    <v-card-title>Reviews</v-card-title>
    <v-row>
      <div class="mx-4 subtitle-1">
        <v-avatar color="teal" size="48" class="mx-4">
          <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          >
        </v-avatar>
      </div>
      <div class="mx-4 my-4 subtitle-1">
        30 min drive to your workplace
      </div>
    </v-row>

    <v-col />
  </v-col>
  </v-col>
</template>

<script>
export default {
  data: () => ({})
}
</script>
