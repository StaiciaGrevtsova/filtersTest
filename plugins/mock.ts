import MockAdapter from 'axios-mock-adapter';
import RoomsList from '~/mocks/rooms';
import FacingList from '~/mocks/facing';

export default ({ $axios }: Record<any, any>) => {
  const mock = new MockAdapter($axios, { delayResponse: 500 });
  mock.onGet('/rooms').reply(200, RoomsList);
  mock.onGet('/facing').reply(200, FacingList);
};
