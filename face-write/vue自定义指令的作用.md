
自定义指令：对普通 DOM 元素进行底层操作

```
//自定义当前dom是否显示的命令
Vue.directive('permission', {
  inserted:function(el, binding) {
    var perms = store.getters.perms;
    if (!perms['"' + binding.value + '"']) {
      el.parentNode.removeChild(el);
    }
  }
});

```

### 钩子函数
指令定义对象可以提供如下几个钩子函数 (均为可选)：

 - bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
 - inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
 - update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。
 - componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
 - unbind：只调用一次，指令与元素解绑时调用。

### 钩子函数参数

  - el：指令所绑定的元素，可以用来直接操作 DOM 。
  - binding：（只读）对象包含属性：
    - name：指令名，不包括 v- 前缀。
    - value：指令的绑定值，例如：```v-permission="1 + 1"``` 中，绑定值为 2。
    - oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
    - expression：字符串形式的指令表达式。例如：```v-permission="1 + 1"``` 中，表达式为 "1 + 1"。
    - arg：传给指令的参数，可选。例如：```v-permission:foo``` 中，参数为 "foo"。
    - modifiers：一个包含修饰符的对象。例如：```v-permission.foo.bar``` 中，修饰符对象为 ```{ foo: true, bar: true }```。
  - vnode：（只读）Vue 编译生成的虚拟节点。
  - oldVnode：（只读）上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
