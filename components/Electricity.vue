<template>
  <v-combobox
    v-model="select"
    :items="items"
    label="Electricity Availability? "
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
      select: ['KPLC'],
      items: [
        'Backup Generator',
        'Backup Solar'
      ]
    }
  }
}
</script>
