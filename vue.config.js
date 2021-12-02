module.exports = {
  //路径前缀
  publicPath: "/",
  lintOnSave: true,
  productionSourceMap: false,
  //开发模式反向代理配置，生产模式请使用Nginx部署并配置反向代理
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        //本地服务接口地址
        target: 'http://localhost',
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
};
