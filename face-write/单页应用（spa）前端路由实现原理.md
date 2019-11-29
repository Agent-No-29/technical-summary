通常 SPA 中前端路由有2种实现方式：

  > * window.history
  > * location.hash

-------------------

#### 一.window.history
###### 1.history基本介绍  

window.history对象包含浏览器的历史，window.history对象在编写时不使用window这个前缀。history是实现SPA前端路由一种主流方法，
包含几个原始方法  
  * history.back() - 与浏览器点击后退按钮相同  
  * history.forward() - 与在浏览器中点击按钮向前相同  
  * history.go(n) - 接受一个整数作为参数，移动到该整数指定的页面，比如go(1)相当于forward()，go(-1)相当于back()，go(0)相当于刷新当前页面  
  * 如果移动的位置超出了访问历史的边界，以上三个方法并不报错，而是静默失败  

在HTML5，history对象提出了 pushState() 方法和 replaceState() 方法，这两个方法可以用来向历史栈中添加数据，就好像 url 变化了一样（过去只有 url 变化历史栈才会变化），这样就可以很好的模拟浏览历史和前进后退了，现在的前端路由也是基于这个原理实现的。

###### 2.history.pushState
pushState(stateObj, title, url) 方法向历史栈中写入数据，其第一个参数是要写入的数据对象（不大于640kB)，第二个参数是页面的 title, 第三个参数是 url (相对路径)。

###### 3.history.replaceState
replaceState(stateObj, title, url) 和pushState的区别就在于它不是写入而是替换修改浏览历史中当前纪录，其余和 pushState一模一样

###### 4.popstate事件
定义：每当同一个文档的浏览历史（即history对象）出现变化时，就会触发popstate事件。

注意：仅仅调用pushState方法或replaceState方法 ，并不会触发该事件，只有用户点击浏览器倒退按钮和前进按钮，或者使用JavaScript调用back、forward、go方法时才会触发。另外，该事件只针对同一个文档，如果浏览历史的切换，导致加载不同的文档，该事件也不会触发。

用法：使用的时候，可以为popstate事件指定回调函数。这个回调函数的参数是一个event事件对象，它的state属性指向pushState和replaceState方法为当前URL所提供的状态对象（即这两个方法的第一个参数）。

###### 5.history实现spa前端路由代码
```
  <a class="api a">a.html</a>
  <a class="api b">b.html</a>
```

```
  // 注册路由
    document.querySelectorAll('.api').forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        let link = item.textContent;
        if (!!(window.history && history.pushState)) {
          // 支持History API
          window.history.pushState({name: 'api'}, link, link);
        } else {
          // 不支持,可使用一些Polyfill库来实现
        }
      }, false)
    });

    // 监听路由
    window.addEventListener('popstate', e => {
      console.log({
        location: location.href,
        state: e.state
      })
    }, false)
```

---------
#### 一.location.hash

###### 1.Hash基本介绍
url 中可以带有一个 hash http://localhost:9000/#/a.html

window 对象中有一个事件是 onhashchange，以下几种情况都会触发这个事件：  
* 直接更改浏览器地址，在最后面增加或改变#hash；  
* 通过改变location.href或location.hash的值；  
* 通过触发点击带锚点的链接；  
* 浏览器前进后退可能导致hash的变化，前提是两个网页地址中的hash值不同。  

######  2.Hash实现spa前端路由代码

```
    // 注册路由
    document.querySelectorAll('.api').forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        let link = item.textContent;
        location.hash = link;
      }, false)
    });

    // 监听路由
    window.addEventListener('hashchange', e => {
      console.log({
        location: location.href,
        hash: location.hash
      })
    }, false)
```



























