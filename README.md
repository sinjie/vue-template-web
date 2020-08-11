# template-web

web端统一开发框架

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve                     #开发环境
```

### Compiles and minifies for production

```
npm run build                     #测试环境
npm run build:pre                 #预生产环境
npm run build:prod                #生产环境
```

### 静态文件

pulic/env/  为了方便一些配置修改且不需要发包的情况，将部分文件题取出来
option/* 为不同环境的配置文件
lang/*   为语言配置文件

### 字体图标使用

1 下载阿里字体图标的svg格式（没有特殊情况尺寸64就够了）https://www.iconfont.cn/
2 将下载的图标名改为英文，放入 src/icons/svg 文件夹
3 页面使用

```
// icon-class 为文件名，不带后缀
<svg-icon icon-class="arrow-down"></svg-icon> 
```

> 部分svg可能发现无法修改颜色， 打开svg文件， 删除fill属性

### 接入项目修改配置

1 登录接口需要自定义，可以再src/api 下自定义接口，再login.vue页面使用

2 修改用户信息字段名，匹配接口

3 nav.vue手动登出时需要调用后台登出接口，再执行本地登出

4 多个主题时可以再src/style/var.scss配置多个主题对象，内部字段需要同步

5 路由权限控制：需要登录才能访问的页面需要再src/router.js中添加meta.login为true

6 默认登录失效code为41001，可再src/utils/request.js中修改
