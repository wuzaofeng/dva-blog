import { getUser } from '../services/user'
export default {
  namespace: 'user',
  state: '',
  effects: {
    // 获取个人详情
    *fetchUser({ payload }, { call, put }) {  // eslint-disable-line
      const email = '673908452@qq.com'
      const response = yield call(getUser, {email})
      const { data } = response
      yield put({ type: 'setUser', payload: data });
    }
  },

  reducers: {
    setUser(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
