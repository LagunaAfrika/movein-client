<template>
  <v-combobox
    v-model="select"
    :items="items"
    label="What do you offer in the individual rooms? "
    multiple
    chips
    outlined
    color="#0091ad"
  >
    <template v-slot:selection="data">
      <v-chip
        :key="JSON.stringify(data.item)"
        v-bind="data.attrs"
        :input-value="data.selected"
        :disabled="data.disabled"
        @click:close="data.parent.selectItem(data.item)"
      >
        <v-avatar class="accent white--text" left v-text="data.item.slice(0, 1).toUpperCase()" />
        {{ data.item }}
      </v-chip>
    </template>
  </v-combobox>
</template>
<script>
export default {
  data () {
    return {
      select: ['Self Contained Room'],
      items: [
        'Bed',
        'Study desk and chair',
        'Shared Washrooms',
        'Shared Washrooms'
      ]
    }
  }
}
</script>
