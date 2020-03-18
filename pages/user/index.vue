<template>
  <v-container>
    <v-row>
      <h2>{{ user.userName }}</h2>
      <v-col cols="12" sm="6">
        <v-btn primary large block @click="logout">Odhlásit</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'Detail',
  data() {
    return {
      user: {
        userName: 'Vojtěch Havránek',
        email: 'test@gmai.com'
      }
    }
  },
  apollo: {
    user: gql`
      query {
        user: me {
          roles
          userName
        }
      }
    `
  },
  methods: {
    logout() {
      this.$auth.logout()
      // this.$refs.loadingButton.startLoading();
      // this.$store.dispatch(AUTH_LOGOUT)
    }
  }
}
</script>

<style scoped></style>
