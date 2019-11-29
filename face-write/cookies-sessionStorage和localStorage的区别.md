
1）相同点是都是保存在浏览器端、且同源的  
2）cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递，而sessionStorage和localStorage不会自动把数据发送给服务器，仅在本地保存。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下  
3）存储大小限制不同，cookie数据不能超过4K，同时因为每次http请求都会携带cookie、所以cookie只适合保存很小的数据 而sessionStorage和localStorage可以达到5M或更大；  
4）数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭之前有效；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie：只在设置的cookie过期时间之前有效，即使窗口关闭或浏览器关闭  
5）作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；localstorage与cookie是在所有同源窗口中共享的；
6）web Storage支持事件通知机制，可以将数据更新的通知发送给监听者  





