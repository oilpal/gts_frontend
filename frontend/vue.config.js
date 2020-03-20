module.exports = {  
    outputDir: "../dist",  
    indexPath: "../static/index.html",  
    devServer: {  
      port:"8300",
      proxy: "http://localhost:8282"  
    },  
    chainWebpack: config => {  
      const svgRule = config.module.rule("svg");    
      svgRule.uses.clear();    
      svgRule.use("vue-svg-loader").loader("vue-svg-loader");  
    }  
};