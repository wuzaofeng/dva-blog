import dva from 'dva';
import './assets/global.scss';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
// app.model(require('./models/user').default);
// app.model(require('./models/articles').default);

require('./models').forEach(key => app.model(key.default))

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
