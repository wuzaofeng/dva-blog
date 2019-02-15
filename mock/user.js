// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  'GET /api/user': {
    authorSrc: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1401422158,2435265343&fm=26&gp=0.jpg',
    username: 'WEIC`S BLOG',
    location: 'shenzhen China',
    email: '673908452@qq.com',
    count: {
      tags: 105,
      article: 100,
    },
    tags: [{
      text: 'javascript',
    }, {
      text: 'scss'
    }, {
      text: 'sass'
    }],
    barIcon: [{
      type: 'github',
      link: 'https://github.com/wuzaofeng'
    },{
      type: 'github',
      link: 'https://github.com/wuzaofeng'
    },{
      type: 'github',
      link: 'https://github.com/wuzaofeng'
    }],
    categories: [{
      name: '使用经验',
      count: 72
    }, {
      name: '我的项目',
      count: 5
    }, {
      name: '资源分享',
      count: 3
    }, {
      name: '项目分享',
      count: 6
    }, {
      name: '学习笔记',
      count: 8
    }],
  },
  'POST /api/register': (req, res) => {
    res.send({ status: 'ok', currentAuthority: 'user' });
  },
  'GET /api/500': (req, res) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/table',
    });
  },
  'GET /api/404': (req, res) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/table/2121212',
    });
  },
  'GET /api/403': (req, res) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/table',
    });
  },
  'GET /api/401': (req, res) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/table',
    });
  },
};
