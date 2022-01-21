export const state = () => ({
  rooms: [],
  checkedRooms: [],
})

export const getters = {
  getRooms(state: Record<any, any>) {
    return state.rooms;
  },
  getChecked(state: Record<any, any>) {
    return state.checkedRooms;
  }
}

export const actions = {
  async getRoomsFilterList({ commit }: Record<any, any>) {
    await (this as any).$axios.$get('/rooms')
      .then((response: any) => {
        commit('SET_ROOMS_LIST', response);
        return response;
      })
      .catch((error: any) => {
        console.log(error);
        throw new Error('Внутреняя ошибка сервера, сообщите администратору');
      });
  },
}

export const mutations = {
  SET_ROOMS_LIST(state: { rooms: any; }, rooms: any) {
    state.rooms = rooms;
  },
  SET_CHECKED_ROOMS(state: { checkedRooms: any; }, checkedRooms: any) {
    state.checkedRooms = checkedRooms;
  },
}
