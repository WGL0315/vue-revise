module.exports = { //eslint配置
  root: true, //用来告诉eslint找当前配置文件
  env: { //指定你想启用的环境，下面的配置指定为node环境
    node: true
  },
  'extends': [
    'plugin:vue/essential', //格式化代码插件
    'eslint:recommended' //启用推荐规则
  ],
  parserOptions: {
    parser: 'babel-eslint', //用来指定eslint解析器的
  },
  rules: {  //新增自定义规则
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', //off或0表示关闭规则；warn或1表示打开规则，作为警告；error或2表示作为打开规则，错误
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "semi": [1, 'never'], //禁止用分号
    "indent": [2, 2], //缩进采用2个空格
  }
}
