import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  categories: [
    {
      name: 'Community',
      slug: 'community',
      subCategories: [
        {
          name: 'Activities',
          slug: 'activities'
        },
        {
          name: 'Artists',
          slug: 'artist'
        }
      ]
    },
    {
      name: 'Housing',
      slug: 'housing',
      subCategories: [
        {
          name: 'Apts / Housing',
          slug: 'apts-housing'
        },
        {
          name: 'Housing Swap',
          slug: 'housing-swap'
        }
      ]
    }
  ]
}

const mutations = {}

const getters = {}

const actions = {}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
