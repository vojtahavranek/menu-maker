<template>
  <div>
    <h2>Choose recipe</h2>
    <recipe-list :recipes="recipes"></recipe-list>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import RecipeList from '../../components/recipe/list/index'
import MAKE_MENU from '~/graphql/query/makeMenu.gql'

export default {
  name: 'MakeMenu',
  components: { RecipeList },
  data() {
    return {
      recipes: []
    }
  },
  apollo: {
    recipes: {
      query: gql`
        ${MAKE_MENU}
      `,
      update: (data) => data.makemenu
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      /* api.query()
            .then((response) => {
            vm.recipes = response.data.makemenu;
        }); */
    })
  }
}
</script>

<style lang="scss" scoped></style>
