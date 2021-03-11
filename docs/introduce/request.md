## 简介
使用umi-request作为请求库。
umi-request 与 fetch, axios 异同
| 特性       | umi-request    | fetch          | axios          |
| :--------- | :------------- | :------------- | :------------- |
| 实现       | 浏览器原生支持 | 浏览器原生支持 | XMLHttpRequest |
| 大小       | 9k             | 4k (polyfill)  | 14k            |
| query 简化 | ✅             | ❌             | ✅             |
| post 简化  | ✅             | ❌             | ❌             |
| 超时       | ✅             | ❌             | ✅             |
| 缓存       | ✅             | ❌             | ❌             |
| 错误检查   | ✅             | ❌             | ❌             |
| 错误处理   | ✅             | ❌             | ✅             |
| 拦截器     | ✅             | ❌             | ✅             |
| 前缀       | ✅             | ❌             | ❌             |
| 后缀       | ✅             | ❌             | ❌             |
| 处理 gbk   | ✅             | ❌             | ❌             |
| 中间件     | ✅             | ❌             | ❌             |
| 取消请求   | ✅             | ❌             | ✅             |


## Get
```
import request from 'umi-request';

request
  .get('/api/v1/xxx?id=1')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });

// use options.params
request
  .get('/api/v1/xxx', {
    params: {
      id: 1,
    },
  })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
```

## Post
```
request
  .post('/api/v1/user', {
    data: {
      name: 'Mike',
    },
  })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
```

## ErrorHandle
```
// 对umi-request的扩展
import { extend } from 'umi-request';
import { notification } from 'antd';

const TIME_DELAY = 3000; // 超时时间
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
const COMMON_ERROR = '系统异常，请稍后再试';

/**
 * 异常处理程序
 */
const errorHandler = (error) => {
  const { response = {} } = error;
  const errorText = response.errorMsg || codeMessage[response.status] || COMMON_ERROR;
  const { status, url } = response;

  notification.error({
    message: `请求错误 ${status}: ${url}`,
    description: errorText,
  });
};

const extendRequest = extend({ errorHandler, credentials: 'include', timeout: TIME_DELAY });

export default extendRequest;
```