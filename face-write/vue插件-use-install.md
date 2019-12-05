### vue插件功能：
 - 1.添加全局方法或者属性
 - 2.添加全局资源：指令/过滤器/过渡等
 - 3.通过全局混入来添加一些组件选项
 - 4.添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现
 - 5.一个库，提供自己的 API，同时提供上面提到的一个或多个功能
 
 ### 插件开发：
 
 Vue.js 的插件需对外暴露一个 install 方法，参数一： Vue 构造器，参数二：可选的选项对象
 
 见项目 code-name-A 中 date-utils.js 文件
 
 ```
export default {
  install(Vue) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {

    }
    // 2. 添加全局资源
    Vue.directive('my-directive', {
      bind(el, binding, vnode, oldVnode) {

      }
    })

    // 3. 注入组件选项
    Vue.mixin({
      created: function () {

      }
    })

    // 4. 添加实例方法
    Vue.prototype.$dateUtil = {
      /**
       * 将字符串解析成日期
       * @param str 输入的日期字符串，如'2014-09-13'
       * @param fmt 字符串格式，默认'yyyy-MM-dd'，支持如下：y、M、d、H、m、s、S，不支持w和q
       * @returns 解析后的Date类型日期
       */
      parseDate: function (str, fmt) {
        fmt = fmt || 'yyyy-MM-dd';
        var obj = {
          y: 0,
          M: 1,
          d: 0,
          H: 0,
          h: 0,
          m: 0,
          s: 0,
          S: 0
        };
        fmt.replace(/([^yMdHmsS]*?)(([yMdHmsS])3*)([^yMdHmsS]*?)/g, function (m, $1, $2, $3, $4, idx, old) {
          str = str.replace(new RegExp($1 + '(\d{' + $2.length + '})' + $4), function (_m, _$1) {
            obj[$3] = parseInt(_$1);
            return '';
          });
          return '';
        });
        obj.M--; // 月份是从0开始的，所以要减去1
        var date = new Date(obj.y, obj.M, obj.d, obj.H, obj.m, obj.s);
        if (obj.S !== 0) date.setMilliseconds(obj.S); // 如果设置了毫秒
        return date;
      }
    }
  }
}
 ```
 
 ### 插件使用：
 
在调用 new Vue() 启动应用之前使用全局方法 Vue.use()

见项目 code-name-A 中 main.js 文件

```
//插件DateUtils如果是对象必须提供install方法，如果是函数会被直接当作install函数执行。
import DateUtils from './utils/date-utils';
Vue.use(DateUtils);


//Vue.js 官方提供的一些插件在检测到 Vue 是可访问的全局变量时会自动调用 Vue.use()，就不用调用use方法。
import VueRouter from 'vue-router';


//但是在 CommonJS 这样的模块环境中则必须调用 Vue.use()：
var VueRouter = require('vue-router')
Vue.use(VueRouter)
```

### 原理

```
export function initUse(Vue) {
  Vue.use = function (plugin) {
    // 限制了自定义组件的类型
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    //保存注册组件的数组，不存在及创建
    if (installedPlugins.indexOf(plugin) > -1) {
      //判断该组件是否注册过，存在return Vue对象
      return this
    }
    //调用`toArray`方法
    const args = toArray(arguments, 1)
    args.unshift(this)
    //将Vue对象拼接到数组头部
    if (typeof plugin.install === 'function') {
      //如果组件是对象，且提供install方法，调用install方法将参数数组传入，改变`this`指针为该组件
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      //如果传入组件是函数，则直接调用，但是此时的`this`指针为`null`
      plugin.apply(null, args)
    }
    //在保存注册组件的数组中添加
    installedPlugins.push(plugin)
    return this
  }
  
  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray (list, start) {
    start = start || 0;
    //将存放参数的数组转为数组，并除去第一个参数（该组件）
    let i = list.length - start;
    const ret = new Array(i);
    //循环拿出数组
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret
  }
}
```
