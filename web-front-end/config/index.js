import { createProxyMiddleware } from 'http-proxy-middleware'

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4400',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}