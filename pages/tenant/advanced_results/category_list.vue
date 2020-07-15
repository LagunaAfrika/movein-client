<template>
  <v-row
    :align="center"
    :justify="center"
  >
    <v-card
      :loading="loading"
      class="ma-2"
      max-width="auto"
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
          <div class="cyan--text ml-4">
            Verified
          </div>
        </v-row>
      </v-card-text>

      <v-divider class="mx-4" />

      <v-card-title>Facilities</v-card-title>

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
          text
          @click="reserve"
        >
          Request tour
        </v-btn>
        <v-btn
          color="cyan darken-2"
          text
          @click="reserve"
        >
          Message
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card
      :loading="loading"
      class="ma-2"
      max-width="auto"
    >
      <v-img
        height="250"
        src="https://picsum.photos/id/23/200"
      />

      <v-card-title>White House</v-card-title>

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
          <div class="cyan--text ml-4">
            Verified
          </div>
        </v-row>
      </v-card-text>

      <v-divider class="mx-4" />

      <v-card-title>Facilities</v-card-title>

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
          text
          @click="reserve"
        >
          Request tour
        </v-btn>
        <v-btn
          color="cyan darken-2"
          text
          @click="reserve"
        >
          Message
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card
      :loading="loading"
      class="ma-2"
      max-width="auto"
    >
      <v-img
        height="250"
        src="https://picsum.photos/id/34/200"
      />

      <v-card-title>Sand City </v-card-title>

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
          <div>Available nogw</div>
          <div class="cyan--text ml-4">
            Verified
          </div>
        </v-row>
      </v-card-text>

      <v-divider class="mx-4" />

      <v-card-title>Facilities</v-card-title>

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
          text
          @click="reserve"
        >
          Request tour
        </v-btn>
        <v-btn
          color="cyan darken-2"
          text
          @click="reserve"
        >
          Message
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-col />
  </v-row>
</template>

<script>
export default {
  data: () => ({})
}
</script>
