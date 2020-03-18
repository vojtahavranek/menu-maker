<template>
  <div>
    <v-bottom-navigation fixed>
      <v-btn icon left>
        <nuxt-link to="/">
          <v-icon large>mdi-bullseye-arrow</v-icon>
        </nuxt-link>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon right>
        <nuxt-link to="/recipe/test">
          <v-icon large>mdi-plus-circle</v-icon>
        </nuxt-link>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: 'BottomMenu'
}
</script>

<style scoped></style>
