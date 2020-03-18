<template>
  <v-card>
    <v-card-title>{{ recipe.name }}</v-card-title>
    <v-img :src="recipe.image"></v-img>
    <v-card-subtitle>{{ recipe.description }}</v-card-subtitle>
    <v-card-actions>{{ recipe.rating }}</v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'RecipeListItem',
  props: {
    recipe: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.v-card {
  padding-bottom: 10px;
}
</style>
