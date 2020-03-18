<template>
  <div class="recipe__list">
    <recipe-list-item
      v-for="(recipe, index) in recipes"
      :key="index"
      :recipe="recipe"
    ></recipe-list-item>
  </div>
</template>

<script>
import RecipeListItem from '../list/item/index'

export default {
  name: 'RecipeList',
  components: { RecipeListItem },
  props: {
    recipes: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped></style>
