import { getArticles } from '../services/articles'
export default {
  namespace: 'articles',
  state: '',
  effects: {
    *fetchArticles({ payload }, { call, put }) {  // eslint-disable-line
      const response = yield call(getArticles)
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
