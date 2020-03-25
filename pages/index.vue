<template>
  <v-container>
    <v-row>
      <v-btn
        v-for="button in buttons"
        :key="button.route"
        :to="`/${button.route}`"
        nuxt
        block
        x-large
        >{{ button.title }}</v-btn
      >
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
