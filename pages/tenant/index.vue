<template>
  <v-flex xs12 md12>
    Full Name
    <v-text-field
      id="full_name"
      v-model="userData.full_name"
      outlined
      label="FullName"
      :rules="nameRules"
      required
      color="#0091ad"
    />
  </v-flex>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>

</style>
