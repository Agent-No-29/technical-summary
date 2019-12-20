新特性：
1. 拖拽释放(Drag and drop) API
2. 语义化更好的内容标签（header,nav,footer,aside,article,section）
3. 音频、视频API(audio,video)
4. 画布(Canvas) API
5. 地理(Geolocation) API
6. 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；
7. sessionStorage 的数据在浏览器关闭后自动删除
8. 表单控件，calendar、date、time、email、url、search  
9. 新的技术webworker, websocket, Geolocation

移除的元素：
1. 纯表现的元素：basefont，big，center，font, s，strike，tt，u；
2. 对可用性产生负面影响的元素：frame，frameset，noframes；

支持HTML5新标签：
1. IE8/IE7/IE6支持通过 document.createElement 方法产生的标签，可以利用这一特性让这些浏览器支持 HTML5 新标签，浏览器支持新标签后，还需要添加标签默认的样式（当然最好的方式是直接使用成熟的框架、使用最多的是html5shim框架）：
```
  <!--[if lt IE 9]>
  
  <script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
  
  <![endif]-->
```

如何区分：
1. DOCTYPE声明
2. 新增的结构元素
3. 功能元素

#------------------------------------------
（Continue writing by mayingying）

### 1.拖放
```html
<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8">
  <style type="text/css">
    #div1 {
      width: 198px;
      height: 66px;
      border: 1px solid #aaaaaa;
    }
    #drag1 {
      width: 30px;
      height: 30px;
      border: 1px solid #aaaaaa;
    }
  </style>
  <script type="text/javascript">
    function allowDrop(ev) {
      /*默认无法将数据/元素放置到其他元素中，阻止对元素的默认处理*/
      ev.preventDefault();
    }

    function drag(ev) {
      /*dataTransfer.setData() 方法设置被拖数据的数据类型和值：*/
      ev.dataTransfer.setData("Text", ev.target.id);
    }

    function drop(ev) {
      /*避免浏览器对数据的默认处理（drop 事件的默认行为是以链接形式打开）*/
      ev.preventDefault();
      /*获得被拖的数据，该方法将返回在 setData() 中相同类型的任何数据。*/
      var data = ev.dataTransfer.getData("Text");
      /*把被拖元素追加到放置元素（目标元素）中*/
      ev.target.appendChild(document.getElementById(data));
    }

  </script>
</head>
<body>
<p>把小的拖到大的里面</p>

<!--设置元素为可拖放：draggable="true"-->
<!--开始拖拽：ondragstart-->
<div id="drag1" draggable="true" ondragstart="drag(event)"></div>

<!--ondragover 事件规定在何处放置被拖动的数据。-->
<!--ondrop 事件被拖数据时触发。-->
<div id="div1" ondragover="allowDrop(event)" ondrop="drop(event)"></div>
</body>
</html>

```
