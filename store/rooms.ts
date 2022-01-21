import apiFilters from '../../api/filters';

export default {
  namespaced: true,
  state: {
    rooms: [],
    checkedRooms: {},
  },
  getters: {
    getRooms: (state: { rooms: any; }) => state.rooms,
  },
  actions: {
    async getRoomsFilterList({ commit }: Record<any, any>) {
      return await apiFilters
        .getRoomsFilter()
        .then((response: any) => {
          commit('SET_ROOMS_LIST', response);
          return response;
        })
        .catch((error: any) => {
          console.log(error);
          throw new Error('Внутреняя ошибка сервера, сообщите администратору');
        });
    },
  },
  mutations: {
    SET_ROOMS_LIST(state: { rooms: any; }, rooms: any) {
      state.rooms = rooms;
    },
  },
};
