<template>
  <v-combobox
    v-model="select"
    :items="items"
    color="#0091ad"
    label="What Meals do you provide?"
    multiple
    outlined
    chips
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
      select: ['Breakfast'],
      items: [
        'Lunch',
        'Supper',
        'We have a Cafeteria',
        'None'
      ]
    }
  }
}
</script>
