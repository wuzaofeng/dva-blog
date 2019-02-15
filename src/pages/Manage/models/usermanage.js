import { getUser } from '../../../services/user'
export default {
  namespace: 'usermanage',
  state: {
    users: []
  },
  effects: {
    *fetchUsers({ payload }, { call, put }) {  // eslint-disable-line
      const response = yield call(getUser)
      const { data } = response
      yield put({ type: 'setUsers', payload: data });
    },
  },

  reducers: {
    setUsers(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
