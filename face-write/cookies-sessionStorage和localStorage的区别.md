
#### sessionStorage和LocalStorage的区别：

 - cookie数据始终在同源的http请求中携带（即使不需要），cookie在浏览器和服务器间来回传递；sessionStorage和localStorage只存在于浏览器会话中；
 - 存储大小限制不同：cookie数据不能超过4K，sessionStorage和localStorage的存储空间是浏览器决定的，可达5M；
 - 数据有效期不同：sessionStorage 当前页面关闭即失效；localStorage：没有过期时间，直到手动去删除。
 - 作用域不同：sessionStorage不会跨标签页存储，而localStorage会跨标签页存储。
 - web Storage支持事件通知机制，可以将数据更新的通知发送给监听者  ```window.addEventListener('storage', function(e) {})```

