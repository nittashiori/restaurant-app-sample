/**
 * 使用してない。練習。
 */

export const state = () => ({
  shopInfo: [],
})

export const getters = {
  shopInfo(state) {
    return state.shopInfo
  },
}

export const mutations = {
  setShop(state, shopInfo) {
    state.shopInfo = shopInfo
  },
}

export const actions = {
  setShop({ commit }, shopInfo) {
    commit('setShop', shopInfo)
  },
}
