# vue-ssr node服务端渲染工作流

## 解决问题
- 【手机端首屏渲染问题】
- 【SEO解决搜索引擎抓取问题】
- 【提高页面渲染性能】

### 统一的文件系统结构

### 统一的职责划分

- views文件夹下分模块文件，模块文件下下又分模块本身的.vue文件（模版文件），index.js文件（后台数据交互文件），mock.js（本模块的mock假数据），conf.js（配置本模块一些参数，请求路径，模块名称等信息）
- components 公共组件文件夹
- router 主要存放前端路由配置文件，写法规范按照vue-router官方例子即可。
- store 主要是存放共享状态文件，里面包含action.js,getter.js,mutationtype.js等，后期会根据模块再细分这些。
- public 主要存放公共组件代码和项目使用的公共文件代码，例如后期我们将axios封装成公共的api库文件等等
- static文件夹代表静态文件，不会被webpack打包的
- pmlog.json 集成了pm2监控命令
- app.js 是项目入口文件
- App.vue 是项目入口文件
- entry-client和entry-server分别是客户端入口文件和服务端的入口文件
- index.template.html是整个项目的模版文件
- server.js 服务端启动服务的入口文件

### 开发自动化

- 自动化搭建本地研发环境，快速响应文件更改并自动刷新浏览器。
- 自动化编译ES6或CommonJS标准的JS代码，自动化生成source map便于浏览器端调试。
- 自动化编译SASS/LESS => CSS文件，自动化添加CSS3的各种浏览器前缀。
- 服务端使用express，前端使用webpack自动化构建打包。

## 安装使用

#### 安装 Node 和 NPM

- 详细过程参考官网 https://nodejs.org (中文网站 http://nodejs.cn/)
- 支持所有Node的发行版本，建议使用最新稳定版 6.x 。
- Ubuntu 用户使用 `apt-get` 安装 node 后，安装的程序名叫 `nodejs`，需要软链成 `node`
- Windows 用户安装完成后需要在 CMD 下确认是否能执行 node 和 npm

#### 全局安装 webpack最新版本

```bash
npm install webpack -g
```

### 运行 Demo 示例项目

#### 安装 NPM 包

- 进入项目 目录执行以下命令

```bash
npm install
```

#### 运行 Demo 示例

- 在项目目录下执行

```bash
// 打包命令
npm run build
```
```bash
// production模式下启动服务
npm run start
```
```bash
// dev模式下启动服务
npm run dev
```

npm run dev 启动服务路径http://localhost:6180

### 添加mock假数据测试

```javascript
// /views/index/mock.js
GET: {
    "code": 200,
    "data": [
        {
        name: '推荐',
        type: 0
        },
        {
        name: '居家',
        type: 1
        },
        {
        name: '餐厨',
        type: 2
        },
        {
        name: '服装',
        type: 3
        },
        {
        name: '电器',
        type: 4
        },
        {
        name: '洗护',
        type: 5
        },
        {
        name: '杂货',
        type: 6
        }
    ]
    },
    GETBOTTOM: {
    "code": 200,
    "data": [
        {
        href: '/',
        value: '首页',
        type: 'index'
        },
        {
        href: '/',
        value: '识物',
        type: 'topic'
        },
        {
        href: '/',
        value: '分类',
        type: 'cate'
        },
        {
        href: '/',
        value: '购物车',
        type: 'cart'
        },
        {
        href: '/',
        value: '个人',
        type: 'ucenter'
        }
    ]
    }
```

```javascript
// views/index.vue
serviceGet() {
    Service.get().then((data) => {
        this.headNavData = data;
    })
    Service.getBottom().then((data) => {
        this.botNavData = data;
    })
}
```

### service workers配置

```javascript
// webpack.cliemt.config.js
if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    // auto generate service worker
    new SWPrecachePlugin({
      cacheId: 'ga-vue',
      filename: 'service-worker.js',
      minify: true,
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/]
    })
  )
}
```

```javascript
// entry-client.js
if ('serviceWorker' in navigator) {
  console.log("SW present !!! ");
  navigator.serviceWorker.register('/service-worker.js', {
      //scope: '/toto/'
    }).then(function (registration) {
      console.log('Service worker registered : ', registration.scope);
    })
    .catch(function (err) {
      console.log("Service worker registration failed : ", err);
    });

}
```
### 发布部署

node服务器通过express/koa搭建环境，通过pm2启动端口服务，一般会在项目目录新建bin文件夹，然后新建相应的sh脚本命令来启动node服务。


