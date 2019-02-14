export default  {
  "extraBabelPlugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }]
  ],
  "proxy": {
    "/api": {
      "target": "http://localhost:2222/blog/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    },
  }
}
