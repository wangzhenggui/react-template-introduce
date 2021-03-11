## 什么是Selene
`Selene`是一款中台单页面框架，旨在统一中台开发规范，封装业务相关能力，降低开发、维护成本

## 快速开始
```bash
# clone item
npm i -g selene-cli

pro init
请选择需要下载的模版名称:react
项目名称: myapp

# serve with hot reload at localhost:3000
npm run start

# build for production with minification
npm run build

## 解决问题
- 基于react + react-router + Recoil,来源社区，回归社区
- 统一代码结构，eslint+prettier+stylelint+husky 统一代码风格，团队交接的时候，达到相同的开发体验
- 接入anymock,使mock能力更突出，不至于后续项目交接时无法运行
- 支持按需加载，目前webpack已支持的能力
- 后续接入埋点、错误监控等能力
- 常用问题使用框架解决，不花同样的时间解决已经解决过的问题


## 项目结构
- `src` 项目源代码
- `src/common` 存放常用工具类相关代码
- `src/components` 可复用的组件代码
- `src/layout` 页面布局
- `src/pages` 页面级别代码，一般一个page对应一个Url
- `src/services` 服务代码，调用服务端接口
- `src/router` react-router-config 配置化路由渲染组件，后面迁出一个单独的包
- `config` 配置文件
- `config/craco.config.js` 自定义框架配置、框架基于cra脚手架，需要对原功能拓展可在这里配置
