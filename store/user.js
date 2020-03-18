export const state = { status: '', profile: {} }

export const getters = {
  getProfile: (state) => state.profile,
  isProfileLoaded: (state) => !!state.profile.name
}

export const actions = {
  me: ({ commit, dispatch }) => {
    this.$route.push('/')
    /* apiCall({ url: api_routes.user.me })
            .then(resp => {
                commit(USER_SUCCESS, resp);
            })
            .catch(err => {
                console.log(err);
                commit(USER_ERROR);
                // if resp is unauthorized, logout, too
                dispatch(AUTH_LOGOUT);
            }); */
  }
}

export const mutations = {
  /* [USER_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [USER_SUCCESS]: (state, resp) => {
    state.status = 'success'
    state.profile = resp
  },
  [USER_ERROR]: (state) => {
    state.status = 'error'
  },
  [AUTH_LOGOUT]: (state) => {
    state.profile = {}
  } */
}
