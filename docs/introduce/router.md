## 简介
selene应用都是单页应用，页面地址的跳转都是在浏览器端完成的，不会重新请求服务端获取 html，html 只在应用初始化时加载一次。所有页面由不同的组件构成，页面的切换其实就是不同组件的切换，你只需要在配置中把不同的路由路径和对应的组件关联上。

## 路由配置
在`src/routers.js` 中配置我们的页面路由，配置参考如下：

```
import { lazy } from 'react';
import DefaultLayout from './layout/DefaultLayout';

const routerPrefix = '/user/shop'; // 路由前缀
const routes = [
  {
    path: '/add',
    exact: true,
    component: lazy(() => import('./pages/AddShop')),
    title: '增加门店',
  },
  {
    path: '/sub',
    exact: true,
    component: lazy(() => import('./pages/SubShop')),
    title: '删除门店',
  },
  {
    path: '/detail',
    exact: true,
    component: lazy(() => import('./pages/ShopDetail')),
    title: '门店详情',
  },
  {
    path: '/*',
    exact: true,
    redirect: '/detail',
  },
];

export default [
  {
    path: routerPrefix,
    component: DefaultLayout,
    routes,
  },
];

export const router = 'browserRouter';
```

## 路由方式
```
export const router = 'hashRouter';
```
browserRouter/hashRouter 这俩种常见路由方式；如果不设置导出，默认使用的是hashRouter
还支持其他react-router5中支持的路由方式


## 路由前缀
routerPrefix  设置之后，该路由下的其他子路由不用在添加前缀

## 路由模板
二级路由外面支持自定义Layout，例如登陆页面和注册页面可能是不需要导航栏的，而应用中的页面可能是需要导航的，可以通过路由模版来定义路由页面之间的区别

## 组件中使用跳转
建议参考[react-router5](https://reactrouter.com/web/guides/quick-start)