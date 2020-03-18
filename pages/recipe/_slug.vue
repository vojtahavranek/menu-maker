<template>
  <div>
    <h2>Recipe detail</h2>
    {{ $route.params.slug }}
  </div>
</template>

<script>
export default {
  name: 'RecipeDetail'
}
</script>

<style scoped></style>
