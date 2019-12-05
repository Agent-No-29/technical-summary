### meta标签
<meta> 元素提供有关页面的元信息，标签的属性定义了与文档相关联的名称/值对

 - name 属性元信息-名称，content 属性元信息-值
 ```
     <meta name="renderer" content="webkit">
 ```
 - Keywords 网页关键字
  ```
      <meta name="keywords" content="嘻嘻">
  ``` 
  - description 网站内容描述
  ```
      <meta name="description" content="我是嘻嘻">
  ``` 
   - author 作者
  ```
      <meta name="author" content="小马">
  ```
 - charset 属性，描述了 HTML 文档自身的编码形式，无 content
 ```
     <meta charset="utf-8">
  ```
 - http-equiv 属性，相当于http的文件头作用，它可以向浏览器传回一些有用的信息，content 为信息值
    - expires 设定网页到期时间。一旦网页过期，必须到服务器上重新传输
        ```
            <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT">
        ```
     - pragmacache模式，禁止浏览器从本地计算机的缓存中访问页面内容。 
        ```
            <meta http-equiv="pragma" content="no-cache">
        ```
     - Refresh 如：指停留2秒钟后自动刷新到URL网址
        ```
        <meta http-equiv="Refresh" content="2;URL=http://www.myy.net">
        ```
     - Set-Cookie 如果网页过期，那么存盘的cookie将被删除。
        ```
        <meta http-equiv="Set-Cookie" content="cookievalue=xxx;expires=Wed, 21 Oct 2015 07:28:00 GMT;path=/">
        ```
     - Window-target 强制页面在当前窗口以独立页面显示
        ```
        <meta http-equiv="Window-target" content="_top"> 
        ```
     - content-Type 设定页面使用的字符集
        ```
        <meta http-equiv="content-Type" content="text/html;charset=gb2312">
        ```
     - content-Language 显示语言的设定
        ```
        <meta http-equiv="Content-Language" content="zh-cn"/> 
        ```
     - Cache-Control 指定请求和响应遵循的缓存机制
        ```
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        ```
          - no-cache 指示请求或响应消息不能缓存
          - no-store用于防止重要的信息被无意的发布。在请求消息中发送将使得请求和响应消息都不使用缓存
          - Public 指示响应可被任何缓存区缓存
          - max-age 指示客户机可以接收生存期不大于指定时间（以秒为单位）的响应
          - min-fresh 指示客户机可以接收响应时间小于当前时间加上指定时间的响应
     - viewport 属性，窗口
        ```
        <meta name="viewport" content="width=device-width,
                                       initial-scale=1,
                                       minimum-scale=1,
                                       maximum-scale=1,
                                       user-scalable=no">
        ```

   
 ### SEO（Search Engine Optimization）
 目的：通过总结搜索引擎的排名规律，对网站进行合理的优化，使得网站在搜索引擎的排名提高，从而利用搜索引擎给自己带来客户。
 
