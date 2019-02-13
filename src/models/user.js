import { getUser } from '../services/user'
export default {
  namespace: 'user',
  state: '',
  effects: {
    *fetchUser({ payload }, { call, put }) {  // eslint-disable-line
      const response = yield call(getUser)
      const { data } = response
      yield put({ type: 'save', payload: data });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
