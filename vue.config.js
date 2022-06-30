let path = require("path");
const { defineConfig } = require('@vue/cli-service')
module.exports = {
  //代理
  /*
	devServer: {
	  proxy: {
	    '/api': {
	      target: "http://localhost:3000",
	      changeOrigin: true,
	      pathRewrite: {
	        '^/api': '/api'
	      }
	    }
	  },
	},*/
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