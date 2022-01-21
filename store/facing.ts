export const state = () => ({
  facingList: [],
  checkedFacing: [],
})

export const getters = {
  getFacingList(state: Record<any, any>) {
    return state.facingList;
  },
  getChecked(state: Record<any, any>) {
    return state.checkedFacing;
  }
}

export const actions = {
  async getFacingFilterList({ commit }: Record<any, any>) {
    await (this as any).$axios.$get('/facing')
      .then((response: any) => {
        commit('SET_FACING_LIST', response);
        return response;
      })
      .catch((error: any) => {
        console.log(error);
        throw new Error('Внутреняя ошибка сервера, сообщите администратору');
      });
  },
}

export const mutations = {
  SET_FACING_LIST(state: { facingList: any; }, facingList: any) {
    state.facingList = facingList;
  },
  SET_CHECKED_FACING(state: { checkedFacing: any; }, checkedFacing: any) {
    state.checkedFacing = checkedFacing;
  },
}
