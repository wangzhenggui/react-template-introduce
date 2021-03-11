## 问题记录
- Q: 修改了eslint等配置文件必须重启之后才能生效
  - A: 通过nodemon监听配置文件变化重新启动服务器
- router的渲染逻辑routerRouter单独抽离一个包，后期自己维护
- 将React.renderDom这个渲染想隐藏起来。怎么实现？使用者只要配置routes之后就可以进入开发流程
- Q: 在使用npm install安装依赖包之后，出现[issues](https://github.com/DocSpring/craco-less/issues/30);
  - A: 使用yarn install安装依赖包


##  待处理问题
- autoprefixer设置了未生效
- 开发环境打包、生产环境打包优化待完善