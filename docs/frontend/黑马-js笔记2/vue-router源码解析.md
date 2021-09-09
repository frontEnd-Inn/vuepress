# 阅读须知
# **2. 阅读须知** 

* 本文章是本人研读 vue-router 源码的学习过程笔记，如有错误，请大佬们指出，代码中过滤了一些不必要的方法，简述主要流程，方便阅读~~ 写了个简版的 vue-router 原理 

## 1. vue-router 基本使用

```javascript
import Router from 'vue-router';
const router = new Router({
  mode: 'hash',  // 模式
  route: [  // 用户传入得路由数组
    {
      path: '/',
      component: import('')
    }
  ]
})
Vue.use(router)
new Vue({
  el: '#app',
  router,
  render(){
    return <app></app>
  }
})
```

## 2. vue-router 钩子函数以及运行流程

```javascript
/**
 * 路由钩子流程
 * 导航被触发
 * 在失活的组件里调用 beforeRouteLeave 守卫
 * 调用全局得 beforeEach 守卫
 * 在重用得组件理调用 beforeRouterUpdate 守卫
 * 在路由配置理调用 beforeEnter
 * 解析异步路由组件
 * 在被激活得组件理调用 beforeRouterEnter
 * 调用全局得 beforeResolve 守卫
 * 导航被确认
 * 调用全局得 afterEach 钩子
 * 触发DOM更新
 * 调用 beforeRouteEnter 守卫中传给next得回调函数，创建好了得组件实例会回调函数得参数传入
*/
```

## 3. vue-router 源码目录

```javascript
源码目录：
- components
  - link.js
  - view.js
- history
  - base.js
  - histroy.js
  - hash.js
  - abstract.js
- util
- create-matcher.js
- create-router-map.js
- index.js
- install.js
```

## 4. vue-router install

```javascript
源码位置：./install.js
export let _Vue;
// Vue 插件的通用注入写法
export default function install(Vue){
  // 判断是否已经注入
  if(install.installed && _Vue == Vue) return
  install.installed = true;
  _Vue = Vue;
  Vue.mixin({
    beforeCreate(){
      if( this.$options.router ){
        // 根实例
        this._routeRoot = this;
        this.router = this.$options.router;
        // 初始化 
        this.router._init(this);
        // 对 映射的 current 进行响应式监听
        Vue.util.defineReactive(this, '_route', this.router.history.current)
      }else{
        // 子实例
        this._routeRoot = ( this.$parent && this.$parent._routeRoot ) || this
      }
    }
  })
  // 注册 link view 组件
  Vue.component('router-link', Link);
  Vue.component('router-view', View);
  // 对 $route $router 绑定在this实例上
  Object.defineProperty(this, '$route', {
    // 返回映射对象
    get(){
      return this._routerRoot._route
    }
  })
  Object.defineProperty(this, '$router', {
    // 返回路由实例
    get(){
     return this.routerRoot._router
    }
  })
}

总结：install 方法就是将路由实例注册到 Vue 上，区分根实例，注册router-link router-view 组件，在Vue实例上绑定 $route $router 两个对象，方便用户访问使用，$route 返回的是 current 映射，$router 返回的是路由实例
备注：源码中还有一次缓存scroll的功能，由于这个不是啥重点，就暂且不说了
```

## 5. vue-router 实例初始化

```javascript
源码位置：./index.js
import install from './install.js'
class VueRouter {
  consctructor(options){
    this.app = null; // 用来记录vue实例
    this.apps = []; 
    this.options = options;
    this.mode = options.mode || 'hash';
    // 返回 addRoute match 方法
    this.match = createMatcher(options.routes, this);
    // mode 其实有三种模式 常用的是 history hash 另外一种是 abstract
    // 判断哪种模式对应生成哪种类
    switch(this.mode){
      case 'hash':
         this.history = new HashHistory(this);
         default;
      case 'histroy':
         this.history = new HTML5History(this);  
         default; 
      case 'abstract':
         this.history = new AbstractHistory(this);
         default;
      default:
         throw new Error('********************')
         default;
    }
  }
  // 初始化
  _init(vm){
    this.apps.push(vm);
    if( this.app ){
      return
    }
    this.app = app;
    const history = this.history;
    // 判断当前history是否是在 history hash 模式下
    if( history instanceof HashHistory || history instanceof HTML5History ){
      const setupListeners = () => {
        history.setupListeners();  // 监听路由变化
      }
      // 路由跳转
      history.transitionTo(
        history.getCurrentLocation(),  // 获取当前路径位置
        setupListeners 
      )
    }
    // 监听 _route 变化
    history.listen(route=>{
      this.app._route = route
    })
  }
}
VueRouter.install = install;
export default VueRouter

总结: vueRouter实例在初始化的时候，会创建matcher，并对外暴露 addRoute match 方法，然后会针对模式创建对应的类，保存到实例的 history 属性上，_init 方法，初始化，判断当前类中是否已经存在了 Vue 实例，如果已经存在了，就中断，源码中会对这个传进来的Vue进行针对的匹配获取，我们这里不进行处理，默认是没有的先，判断当前模式是否是 hash histroy 模式，如果是的话，就对当前默认的 / 路径进行跳转，内部调用了 transitionTo 方法对路由进行跳转，history.setupListeners 就是我们常说的 hash 模式下对 hash 的监听 hashchange，history 模式下对 history 的监听 popState 方法
```

## 6. addRoute match 方法实现

```javascript
源码位置：./create-matcher.js
export default function createMacther(routes, router){
  // 先拿到路由映射 也就是将 routes 扁平化
  let { pathMap } = createRouteMap(routes)
  // 添加动态路由 将老的映射表传入 生成新得映射表
  function addRoute(routes){
    createRouteMap(routes, pathMap)
  }
  // 匹配路径
  function match(loaction){
    // 可能一个路径存在多个记录
    let record = pathMap[loaction];
    if( record ){
      return createRoot(location, {
        path: location
      })
    }
    return createRoot(null, {
      path: location
    })
  }
  return {
    match,
    addRoute
  }
}
总结：先创建路由映射，获取到映射表，addRoute 就是将添加得路由加入到映射表中，match 方法匹配路径，返回一个对象，包含匹配得matched数组，以及loaction 路径信息等
```

## 7. HashHistory 实例实现

```javascript
源码位置：./history/hash.js
function ensuerflash(){
  if( window.location.hash ){
    return
  }
  window.location.hash = '/'
}
// 截取 # 后得 hash 值
function getHash(){
  return window.location.hash.splice(0)
}
class HashHistory extend History{
  constructor(router){
    super(router);
    this.router = router;
    // 确保 hash 模式下有一个 /
    ensureflash()
  }
  // 获取当前 hash 路径
  getCurrentLocation(){
    return getHash()
  }
  setupListeners(){
    // 监听 hashchange 事件 
    window.addEventListeners('hashchange', function(){
      // 跳转
      this.transitionTo(this.getCurrentLocation())
    })
  }
}
总结：添加了一个事件监听，对 hashchange 事件进行监听变化，进行路由跳转
```

## 8. 创建路由映射表 createRouteMap 实现

```javascript
源码位置：./create-router-map.js
function createRouteMap(routes, pathMap){
  let pathMap = pathMap || Object.create(null);
  routes.forEach(route=>{
    addRouteRecord(route, pathMap)
  })
  return {
    pathMap
  }
}
// 扁平化操作 先序深度遍历
function addRouteRecord(route, pathMap, parent){
  let path = parent ? parent.path + '/' + route.path ? route.path;
  // 生成记录
  let record = {
    path, 
    props: route.props,
    components: route.component,
    parent
  }
  // 不能重复定义路由
  if( !pathMap[path] ){
    pathMap[path] = record;
  }
  // 递归
  if( route.children ){
      route.children.forEach(childRoute=>{
          // 再遍历子路径时候 将父路径得记录传进去
          addRouteRecord(childRoute, pathMap, record)
      })
  }
}
总结：主要作用就是扁平化routes，对children进行递归建立父子关系
```

## 9. History.js 实现 HashHistroy HTML5History 的父类

```javascript
源码位置：./history/base.js
export function createRoot(record, location) {
    let res = [];  // 先父后子
    if (record) {
        while (record) {
            res.unshift(record);
            record = record.parent;
        }
    }
    return {
        ...location,
        matched: res  // 存放路由状态
    }
}
// 运行队列
function runQueue(queue, iterator, cb){
    // 异步迭代
    function step(index){ // 实现中间件得逻辑
        if( index >= queue.length ){
            return cb()
        }
        let hook = queue[index];
        // 默认先执行第一个 然后将第二个hook执行得逻辑当作参数传入
        iterator(hook, ()=>{
            step[index+1]
        })
    }
    step(0)
}
class History {
    constructor(router) {
        this.router = router;
        // 当我们创建完路由后 现有一个默认值 路径和匹配到得记录做成一个映射表
        // 默认当创建 history 时，路径默认是 / 匹配到得记录是空数组
        this.current = createRoot(null, {
            path: '/'
        })
    }
    transitionTo(location, onComplete) {
        // 路径变化 视图刷新
        // 获取当前最新得匹配结果 
        let route = this.router.match(location)
        // 如果跳转得是同一路径 那就不刷新
        // 并且匹配得个数跟当前初始化得映射matched个数一样
        if (location == this.current.path && route.matched.length == this.current.matched.length) {
            return
        }
        // 更新之前 先调用注册好得钩子守卫
        let queue = [].concat(this.router.beforeHooks);
        const iterator = (hook, next) => {
            hook(this.current, route, () => {
                next();
            })
        }
        runQueue(queue, iterator, () => {
            // 更新 current
            this.updateRoute(route);
            // 根据路径加载不同得组件 this.router.matcher.match(location)
            // 渲染组件
            onComplete && onComplete();
        });
    }
    updateRoute(route) {
        this.current = route;  // 每次路由切换 都会更改current
        // 视图重新渲染 有几个要求
        // 1. 模板中调用 2. current 得是响应式得
        this.cb && this.cb()
    }
    listen(cb) {
        this.cb = cb;
    }
    push(to, resolve, reject) {
        this.transitionTo(to, () => { // 去更新hash
            window.location.hash = location
        })
    }
}

export {
    History
}

/**
 * 灵魂发问：为什么matched会匹配多个结果
 * 因为 Vue 中是先父后子渲染得，先匹配父再匹配子
*/
```

## End: vue-router 面试题

### 1. **vue-router 的导航守卫有哪些？**

### 2. **vue-router 中一共有几种模式 分别是什么**

### 3. **简述一下 history hash 模式的区别**

### 4.**vue-router 是如何实现跳转的**