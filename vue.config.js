let path = require("path");
const { defineConfig } = require('@vue/cli-service')
module.exports = {
  //代理
	devServer: {
	  proxy: {
	    '/api': {
	      target: "http://localhost:3000",//请求到 /api/xxx 现在会被代理到请求 http://localhost:3000/api/xxx, 
		  //例如 /api/user 现在会被代理到请求 http://localhost:3000/api/user
	      changeOrigin: true, //解决跨域原理，changeOrigin参数, 是一个布尔值, 设置为true, 
		  //本地就会虚拟一个服务器接收你的请求并代你发送该请求
	      pathRewrite: {
	        '^/api': '/api'
	      }
	    }
	  },
	},
	lintOnSave: false,
	configureWebpack: (config) => {
    	config.resolve = { 
      		extensions: ['.js', '.json', '.vue'],
      		alias: {
       	 		'@': path.resolve(__dirname, './src'),
      		}
    	}
  	}
}