export const state = () => ({
  recipe: {
    choosed: 'nvm'
  }
})

export const mutations = {
  setRecipe(state, { recipe }) {
    state.recipe = recipe
  }
}

export const getters = {
  getRecipe(state) {
    return Object.keys(state.recipe).length
  }
}
