module.exports = {
    devServer: {
        port: 8001, //端口号，如果端口被占用，会自动提升1
        open: true, //启动服务器时，自动打开浏览器。有了这个，就不需要在pacakage.json的"script"选项中"serve"添加"--open"了
        https: false, //是否启用https协议
        host: "localhost", //主机名，也可以写127.0.0.1或做真机测试时候0.0.0.0
    },

    lintOnSave: false, //默认true,保存时是否关闭格式检查
    outputDir: "dist2", //指定打包目录。默认是dist，存放打包文件的目录,可以自定义
    assetsDir: "assets", //默认在根目录。存放生成的静态资源(js,css,img,fonts)的（相对于outputDir）目录。
    indexPath: "out/index.html", //默认index.html在根目录,指定生成的index.html的输出路径(相对于outputDir)
    productionSourceMap: false, //打包时，不生产.map文件，加快打包速度
}