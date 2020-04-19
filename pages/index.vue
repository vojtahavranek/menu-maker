<template>
  <v-container>
    <v-row>
      <v-col
        v-for="button in buttons"
        :key="button.route"
        cols="12"
        sm="6"
        mb="1"
      >
        <v-btn :to="`/${button.route}`" nuxt block x-large>{{
          button.title
        }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data: () => {
    return {
      buttons: [
        {
          title: 'Co mám uvařit?',
          route: 'choose-menu'
        },
        {
          title: 'Uvařil jsem si ...',
          route: 'cook-recipe'
        },
        {
          title: 'Přidat recept',
          route: 'recipe/add'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
