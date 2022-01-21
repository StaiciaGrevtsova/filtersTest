export const state = () => ({
  priceRange: [],
})

export const getters = {
  getPriceRange(state: Record<any, any>) {
    return state.priceRange;
  },
}

export const mutations = {
  SET_PRICE_RANGE(state: { priceRange: any; }, priceRange: any) {
    state.priceRange = priceRange;
  },
}
