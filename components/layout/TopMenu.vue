<template>
  <div>
    <v-app-bar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>
        <nuxt-link to="/">MenuMaker</nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <nuxt-link v-if="!this.$auth.loggedIn" to="/login">
        <v-btn icon>
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </nuxt-link>
      <nuxt-link v-if="this.$auth.loggedIn" to="/user">
        <v-btn icon>
          <v-icon>mdi-account-box</v-icon>
        </v-btn>
      </nuxt-link>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'TopMenu'
}
</script>

<style scoped></style>
