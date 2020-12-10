# **1. 阅读须知** 

- 本文章是本人研读 Vue 源码的学习过程笔记，如有错误，请大佬们指出，代码中过滤了一些不必要的代码，方便阅读~~

- 注意点：看源码不要看到哪一行就去看它的具体执行函数，我们先了解它的整个运行体系

# 2. initGlobalAPI 初始化全局方法

```javascript
源码位置：core/global-api/index.js 
- 对外暴露一些全局API 
function globalAPI(Vue){  
    // 创建一个 configDef 对象 找个对象要设置 get set方法并绑定再 Vue.config 上  
	let configDef = {};  
    configDef.get = () => config;  
    Object.defineProperty(Vue, 'config', configDef);  
    // 对外暴露 extend mergeOptions defineReactive 核心方法 官方建议开发中不要使用这三个方法 除非你了解原理  
    Vue.util = {    
        extend,    
        mergeOptions,    
        defineReactive  
    }  
    // set  
    Vue.set = set;  
    // delete  
    Vue.delete = delete;  
    // nextTick  
    Vue.nextTick = nextTick;  
    // observervebel  
    Vue.observerbel = (obj) => {    
        observe(obj)  // defineReactive    
        return obj  
    }  
    // 创建一个空配置  
    Vue.options = Object.create(null);  
    // 注册 components filters directives 方法到Vue.options上 并创建空对象在之后我们会用到 用来存储        
    ASSETS_TYPES.forEach(type=>{    
        Vue.options[type+'s'] = Object.create(null);  
    })  
    Vue.options._base = Vue;  
    // 合并 keep-alive 组件  
    extend(Vue.options.components, builtInComponent);  
    // 挂载 use 方法  
    initUse(Vue);  
    // 混合  
    initMixin(Vue);  
    // 挂载 extend 方法  
    initExtend(Vue);  
    initAsstRegister(Vue); 
}
```

## 2-1 Vue.use 原理

```javascript
源码位置：core/global-api/use.js
- Vue.use 原理 调用实例的 install 方法
1. 判断当前Vue的_installedPlugins是否已经存在传入的找个插件plugin，如果存在，就返回Vue实例，做了一个缓存功能
2. 如果不存在，判断plugin的install方法是否为一个函数，如果是就执行，如果传入的plugin就是一个函数，就执行这个函数
3. 将当前这个plugin存入缓存，然后返回这个Vue实例
function initUse(Vue){
  Vue.use = function(plugin){
    const _installedPlugins = this._installedPlugins || ( this._installedPlugins = [] );
    if( typeof plugin.install === 'function' ){
      plugin.install.apply(plugin, args)
    }else if( typeof plugin === 'function' ){
      plugin.apply(null, args)
    }
    _installedPlugins.push(plugin)
    return this
  }
}
```

## 2-2 Vue.mixin 原理

```
源码位置：core/global-api/mixin.js
内部就是调用了 mergeOptions 合并配置
function initMixin(Vue){
  Vue.mixin = function(mixin){
    this.options = mergeOptions(this.options, mixin);
    return this
  }
}
```

## 2-3 Vue.extends 原理

```javascript
源码位置：core/global-api/extend.js
内部就是创建了一个子类并继承父类并返回这个子类
1. 判断是否已存在这个组件，内部做了一个缓存机制，缓存组件
2. 如果不存在就创建一个子类，并初始化，继承父类
3. 添加唯一标识，将父类的配置和自己的属性做一个合并
4. 判断子类中的options是否有 props computed 属性，如果有的话就循环两个属性对象中的key value，挂载到当前子类上
5. 配置子类的 extend mixin use components filters 
6. 设置子类的 name 这里就可以解决做递归组件获取到指定子组件的问题
7. 缓存当前组件
function initExtend(Vue){
  Vue.cid = 0;
  let cid = 1;
  Vue.extend = function(extendOptions){
    extendOptions = extendOptions || {};
    const Super = this;
    const SuperId = Super.cid;
    const cacheCotors = extendOptions._Ctor || ( extendOptions._Ctor = {} );
    if( cachedCotors[SuperId] ){
      return cachedCotors[SuperId]
    }
    const name = extendOptions.name || Super.options.name;
    const Sub = function VueComponent(options){
      this._init(options)
    }
    // 继承父类
    Sub.prototye = Object.create(Super.ptototype);
    Sub.prototype.consctructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    )
    Sub['Super'] = Super;
    if( Sub.options.props ){
      initProps(Sub)
    }
    if( Sub.options.computed ){
      initComputed(Sub)
    }
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;
    ASSETS_TYPES.forEach(type=>{
      Sub[type] = Super[type]
    })
    if(name){
      Sub.options.components[name] = Sub
    }
    cacheCotors[SuperId] = Sub;
    return Sub
  }
}
```

## 2-4 mergeOptions 原理

```javascript
源码位置：core/util/options.js
内部采用了策略模式 合并配置 
function mergeOptions(parent, child, vm){
  if( typeof child === 'function' ){
    child = child.options
  }
  // 处理操作
  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  if( !child._base ){
    if( child.extends ){
      parent = mergeOptions(parent, child.extend, vm)
    }
    if( child.mixins ){
      for( let i = 0; i < child.mixins.length; i++ ){
        parent = mergeOptions(parent. child.mixinx[i], vm)
      }
    }
  }
  const options = {};
  let key;
  for( key in parent ){
    mergeFieId(key)
  }
  for( key in child ){
    if( !hasOwn(parent. key) ){
      mergeFieId(key)
    }
  }
  function mergeFieId(key){
    const strat = strats[key] || defaultStrat
    options[key] = strat(parent[key], child[key], vm, key)
  }
  return options
}
```

## 2-5 defineReactive 原理

```javascript
源码位置：core/observer/index.js
将数据设置为响应式
1. 在当前对象上创建一个dep实例
2. 判断当前传入的属性是否可以重新设值
3. 获取getter setter属性
4. 判断val是否有值 没有值的话就设置为 obj[key]
5. 使用 Object.defineProperty 方法将 obj key 传入
6. 在get方法中，收集依赖，判断当前这个属性是否在当前对象上存在，如果存在就直接返回对应得内容，如果不存在就返回设置传入得val值
7. 在set方法中，断当前这个属性是否在当前对象上存在，如果存在就直接返回对应得内容，如果不存在就返回设置传入得val值，判断值是否一致，获取到佬得值，然后在判断根据这个key是否可以在当前对象上取值
8. 拿到新值后 对新值进行响应式处理 调用observe方法
9. 通知视图更新
function defineReactive(obj, key, val){
  const dep = new Dep();
  // 获取这个对象属性的描述
  const property = Object.getOwnPropertyDescriptor(obj, key);
  const getter = property && property.get;
  const setter = property && property.set;
  if( (!getter || setter) && arguments.length == 2 ){
    val = obj[key]
  }
  let childOb = observe(val);
  Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function(){
            const value = getter ? getter.call(obj) : val;
            if( Dep.target ){
                if( childVal ){
                    childVal.dep.depend();
                    if (Array.isArray(value)) {
                        dependArray(value)
                    }
                }
            }
            return value
        },
        set: function(newval){
            if (setter) {
                setter.call(obj, newVal)
            } else {
                val = newVal
            }
            childOb = !shallow && observe(newVal)
            dep.notify()
        }
    })
}
```

## 2-6 Vue.$set 原理

```javascript
源码位置：core/observer/index.js
将数据设置成响应式 内部就是调用了 defineReactive方法然后通知视图更新
1. 判断target是否为数组，并且修改的是否为索引
2. 如果是，就获取当前数组的最大值
3. 内部就是调用了数组的 splice 方法。返回最新的数组
4. 判断当前这个属性是否在target对象中，如果本身就存在就直接返回这个值
5. 判断这个数据是否为响应式数据，如果不是响应式的数据，直接返回这个值就好了
6. 设置这个 obj[key] 为响应式
7. 通知视图更新返回val
function set(obj, key, val){
  if( Array.isArray(target) && isNumber(key) ){
    // 说明 key 是索引
    target.length = Math.max(target.length, key);
    // 核心方法
    target.splice(key, 1, val)
    return val
  }
  if( key in target && !(key in Object.property) ){
    target[key] = val
    return val
  }
  // 判断当前这个数据是否为响应式数据
  const ob = target.__ob__;
  if(!ob){
    target[key] = val
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}
```

## 2-7 Vue.$nextTick 原理

```javascript
源码地址：core/util/next-tick
内部会创建一个数组来接收用户传递的回调函数，然后返回一个promise，然后对数组中的方法遍历执行
这里涉及的重要是知识点eventLoop 宏任务微任务执行顺序
1. 当用户多次调用该方法，内部会将传入的回调函数存入到 callbacks 数组中
2. 内部会创建一个pending用来判断当前这个数组中是否已经执行完毕
3. 如果当前 pending 是false，那就说明callbacks未执行，将pending设置为true，调用timerFunc方法
4. timerFunc 内部会做一个兼容性处理，首先判断当前是否支持Promise，如果支持就创建一个Promise，然后调用了 reolsve 方法，将 flashCallbacks 方法执行
5. flashCallbacks 就是将pending设置为false，然后依次执行 callbacks 中的函数，执行完毕，清空数组
let callbacks = [];
let pending = false;
function nextTick(cb, ctx){
  callbacks.push(()=>{
    cb.call(ctx)
  })
  if( !pending ){
    pending = true;
    timerFunc()
  }
}
let timerFunc;
// 我们这里默认先默认支持 promise
const p = Promise.resolve()
timerFunc = () => {
  p.then(flushCallbacks)
}
function flushCallbacks(){
  pending = false;
  // 浅拷贝
  const copies = callbacks.slice(0);
  callbacks.length = 0
  for (let i = 0; i < copies.length; i++) {
    copies[i]()
  }
}
// 兼容性处理的顺序 
promise > MutationObserver(h5API) > setImmediate > setTimeout
```

# 3. 开始实例阶段

```javascript
源码位置：core/instance/index.js
这个就是主入口文件
1. 通过插件的形式再实例上挂载方法
2. initMixin 挂载 _init 方法
3. stateMixin 挂载 $watch $set $delete $props $data方法
4. eventsMixin 挂载事件处理方式 $on $once $off $emit
5. lifecycleMixin 挂载 _update $forceUpdate $destory
6. renderMixin 挂载渲染方法 _render $nextiTick
function Vue(options){
  this._init(options)
}
initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);
```

## 3.1 _init 初始化

```javascript
源码位置：core/instance/init.js
核心就是将 _init 方法挂载到 Vue 实例上
1. 给当前实例添加 _uid 唯一标识
2. _isVue 判断是否为 Vue 实例 标记是Vue实例
3. 判断是否为组件，如果是组件，就初始化组件，做一些属性事件的合并，如果不是组件就合并Vue的实例上的方法和用户的 options
4. _self 指向当前实例
5. 扩展属性，建立父子关系（组件的生命周期 $parent $children）
6. 定义 _c _createElement 作用域插槽 响应式设置 $listener $attrs
7. 初始化一个注入器
8. 初始化状态
9. 挂载 _provider 属性
10. 开始挂载
let uid = 0;
function initMixin(Vue){
  Vue.prototype._init = function(options){
    const vm = this;
    vm._uid = uid++;
    vm._isVue = true;
    if( options && options._isComponent ){
      initInternalComponent(vm, options)
    }else {
      vm.$options = mergeOptions(
        resolveConsctructorOptions(vm.consctructor).
        options || {},
        vm
      )
    }
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm);
    initState(vm);
    initProvider(vm);
    callHook(vm, 'created')
    if( vm.$options.el ){
      vm.$options.$mount(vm.$options.el)
    }
  }
}
```

### 3-1-1 initLifecycle 初始化组件生命周期( $children $parent )

```javascript
源码位置：core/instance/lifecycle.js
处理 $parent $children 得关系
1. 获取父组件，判断是否存在父组件，并且当前组件不是抽象组件，将自己放入到children数组中
2. 标记自己得$parent指向父组件
3. 判断是否为根组件
4. 初始化一些属性 在vm上生成 $parent $children $root $ref _watcher _inactive _direactInactive _isDestoryed _isBeingDestoryed
function initLifecycle(vm){
  const options = vm.$options;
  let parent = options.parent;
  if( parent && !options.abstract ){
    // 判断是否存在父组件并且当前组件不是抽象组件
    while( parent.$options.abstract ){
      parent = parent.$parent
    }
    parent.children.push(vm)
  }
  vm.$parent = parent;
  vm.$root = parent ? paent.$root : vm;  // 根实例
  vm.$children = [];  // 子组件数组
  vm.$ref = {} // 已注册过ref的所有子组件
  vm._watcher = null;  // 组件实例相应的 watcher 实例对象 
  vm._inactive = null; // keep-alive 中的组件状态 如被激活 就为 false
  vm._direactInactive = false;  // 表示keep-alive组件状态的属性
  vm._isDestroyed = false;  // 当前组件是否已经销毁
  vm._isBeingDestoryed = false;  // 当前组件是否正在被销毁，还没有销毁完成
}
```

### 3-1-2 initEvents 生成 _events _hasHookEvent

```javascript
源码位置：core/instance/event.js
1. 创建 _events 用来存放父组件在当前组件上绑定的事件
2. 默认当前父组件没有通过 @hook 把钩子函数绑定在当前组件上
3. 获取父组件绑定在子组件上的事件方法，如果存在就添加更新
function initEvents(vm){
  vm._events = Object.create(null);  // 存放事件对象 存放的是父组件绑定当前组件的事件
  vm._hasHookEvent = false;  // 表示父组件是否通过 @hook 把钩子函数绑定在当前组件上
  var listeners = vm.options._parentListeners;  // 获取父组件绑定在子组件上的事件方法
  if( listeners ){
    // 如果存在 则更新这些方法
    updateComponentListeners(vm, listeners)
  }
}
```

### 3-1-3 initRender  处理组件插槽 _c $createElement 对$listeners $attrs 进行响应式监听

```javascript
源码地址：core/instance/render.js
1. 获取父节点和执行节点
2. 处理组件的插槽，包含匿名插槽和命名插槽，区别在于是否有name，返回插槽对象
3. 定义 _c $createElement 方法
4. 对 $attrs $listeners 进行监听
function initRender(vm){
  vm._node = null;
  vm._staticTrees = null;
  const options = vm.$options;
  // 获取父组件的 vnode
  const parentVnode = vm.$vnode = options._parentVnode;
  // 获取父组件的节点内容
  const renderContext = parentVnode && parentVnode.context;
  // 处理组件的插槽 来看看它内部是怎么做的
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // 这两个方法的区别在于 
  // _c 用于模板中内部编译的render 拿到render和context
  vm._c = (a,b,c,d) => createELement(vm, a, b, c, d, false);
  // $createElement 用于用户编写的render函数
  vm.$createElement = (a,b,c,d) => createELement(vm, a, b, c, d, true);
  // 监听事件
  defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true)
  defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true)
}
源码位置：core/instance/render-helpers/resolve-slots.js
1. 判断子节点是否为空，如果为空直接返回一个空对象
2. 如果组件子节点存在，则先移除 slot 属性，接着匿名slot设置一个默认default作为key值，存储到 this.$slots 对象中，具名slot则按照定义的name进行存储
3. 当定义 slot 的标签为template时，则获取它的子节点，进行渲染
4. 最后删除只包含空白字符的 slot
function resolveSlots(children, context){
  // 判断子节点是否为空
  if( !children || !children.length ){
    return {}
  }
  const slots = {};
  for( let i = 0, l = children.length; i < l ; i++  ){
    const child = children[i];
    const data = child.data;
    // 移除 slot 属性
    /**
      * <span slot="a"></span>
      * 编译成Vnode节点为 data = { attrs: {slot:'a'}, slot:'a' }
      * 删除 attrs 中的 slot
    **/
    if( data && data.attrs && data.attrs.slot ){
      delete data.attrs.slot
    }
    // 判断是否为具名插槽 如果是具名插槽 还需要子组件/函数子组件渲染上下文一致，主要作用是当需要向子组件的子组件传递具名插槽时，不会保持插槽的名字
    if( (child.context === context || child.functionalContext === context) && data && data.slot != null ){
      // 对具名插槽的处理
      // 获取 slot 的名称
      const name = chuld.data.slot;
      // 如果不存在 就初始化一个空数组
      const slot = (slots[name] ||(slots[name] = []));
      // 如果父组件采用 template 形式的插槽
      // 则要吧template的children添加到数组中
      if( child.tag === 'template' ){
        slot.push.apply(slot, child.children)
      }else{
        slot.push(children)
      }
    }else{
      // 返回匿名插槽的 VNode 数组
      slot.default.push(child)
    }
  }
   // 忽略仅仅包含 whitespace 的插槽
   // 指的是不包含具体内容的 slot
  for (const name in slots) {
    if (slots[name].every(isWhitespace)) {
      delete slots[name]
    }
  }
  return slots
}
```

### 3-1-4 initInjections 初始化vue实例的 inject，然后对数据进行响应式监听

```javascript
源码位置：core/instance/inject.js
1. 查找到组件中存在的 inject 数据
export function initInjections(vm){
  const result = resolveInject(vm.$oprions.inject, vm);
  if( result ){
    toggleObserving(flase); // 避免defineReactive函数把数据转换为响应式
    Object.keys(resul).forEach(key=>{
      defineReactive(vm, key, result[key])
    })
    // 再改回来
    toggleObserving(true)
  }
}
// 这段代码就是不停的查找provider inject 对应的属性，直到跟组件为止，并返回查找到的内容
function resolveInject(inject, vm){
  if( inject ){
    // 用来存储获取到的数据
    const result = Object.create(null);
    // 由于 provider 可以传 symbol 数据 我们需要对symbol类型和普通类型的数据进行处理
    const keys = hasSymbol ? Refelct.ownKeys(inject):Object.keys(inject);
    for( let i = 0; i < keys.length; i++ ){
      const key = keys[i];
      const provideKey = inject[key].from;
      let source = vm;
      while(source){
        if( source._provided && hasOwn(source._provided, provideKey) ){
          result[key] = source._provided[provideKey]
          break;
        }
        source = source.$parent
      }
    }
  }
  return result
}
```

### 3-1-5 initState 初始化状态 响应式核心

```javascript
源码位置：core/instance/state.js
1. 初始化 props
2. 初始化 methods
3. 初始化 data
4. 初始化 computed
5. 初始化 watch
export function initState(vm){
  vm._watchers = [];
  const options = vm.$options;
  options.props && initProps(vm, options.props);
  options.methods && initMethods(vm, options.methods);
  if( options.data ){
    initData(vm)
  }else{
    // 创建根数据
    observe(vm._data = {}, true)
  }
  options.computed && options.initComputed(vm, options.computed);
  options.watch && options.watch !== undefined && inirWatch(vm, options.watch)
}
```

#### 3-1-5-1 initProps 初始化 props 

```javascript
// 初始化 props 其实就做了三件事情
// 将当前组件中的 props 绑定到实例的 _props 上 并设置成响应式
// 将当前组件中的 props 数据绑定到 $options._propsData 上
// 将 props 的数据 key 存入到 用户配置 $options 的 _propsKeys 中
function initProps(vm, propsOptions){
  var propsData = vm.$options._propsData || {};
  var props = vm._props = {};
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  if( !isRoot ){
    toggleObserving(false);
  }
  var loop = function(key){
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    defineReactive$$1(props, key, value);
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  }
  for( var key in propsOptions ) loop(key);
  toggleObserving(true);
}
执行完这一段之后，我们debugger demo看到的结果是这样的
demo:
const app = new Vue({
  components: {
    child
  },
  data() {
    return {
      a: '你的名字',
      name: '我传递过去的'
    }
  },
  render() {
    return (
      <keep-alive include="App">
        <h1>
          {this.a}
          <child name={this.name}></child>
          <App></App>
        </h1>
      </keep-alive>
    )
  }
})
app.$mount('#app')
// debugger 之后的组件实例(只针对props) 也就是整个initProps做的事情：
// keep-alive 组件默认三个参数 exclude include max
// 它的原理我们后续会讲
vm: Component {
  include: 'App',
  max: undefined,
  exclude: undefined,
  props: {  // 这里设置了响应式
    include: 'App',
    max: undefined,
    exclude: undefined
  },
  $props: { // 这里设置了响应式
    include: 'App',
    max: undefined,
    exclude: undefine
  },
  $options: {
    propsData: {
      include: 'App'
    },
    _componentTag: 'keep-alive',
    _propKeys: {
      'include',
      'exclude',
      'max'
    }
  }
}
```

#### 3-1-5-2 initMethods 初始化函数方法

```javascript
// 初始化函数方法 讲用户传入的 methods 对象中的函数 添加到当前实例上
// 内部对methods中的函数名 与 props 以及 实例 的明明重复做了报错提示 然后就是讲对象中的函数方法 绑定在实例上 
// 这个过于简单 没必要多说 先看看源码吧
function initMethods(vm, methods){
  const props = vm.$options.props;
  for( const key in methods ){
    if( typeof methods[key] !== 'function' ){
      error
    }
    if( props && hasOwn(props, key) ){
      error
    }
    // 不规则命名的key
    if( (key in vm) && isReserved(key) ){
      error
    }
    vm[key] = methods[key].apply(vm, arguments)
  }
} 
```

#### 3-1-5-3 initData 初始化数据 响应式核心

```javascript

```



# End: Vue源码面试题

## **1. 说说什么是MVVM**

## 2. **v-for 中为什么要使用 key**

## 3.**模板编译渲染流程**

## 4.**v-model 原理**

## 5. **v-for v-if 为何不能同时使用**

## 6.**组件渲染流程**

## 7.**keep-alive 原理**

## 8.**什么是插槽 作用域插槽 插槽原理**

## 9.**响应式原理**

## 10.**v-if 与 v-show 的区别**

## 11.**组件传参的方式有哪些**

## 12.Vue**为什么采用异步渲染**

## 13.**如何监听数组变化**

## 14.**nextTick实现原理**

## 15.**computed与watch的区别**

## 16.**watch中的deep：true是如何实现的**

## 17.**什么是 vnode**

## 18.**简述Vue domdiff的优先级**

## 19.**vue事件绑定的原理**

## 20.**vue.extend 与 vue.mixin 的区别**

## 21.**vue中的data为什么是一个函数**

## 22.**vue中的 v-html 会引发什么问题**

## 23.**vue 父子组件生命周期调用顺序**

## 24.**为什么要使用异步组件**

## 25.**简述Vue domdiff**