> &lt;!DOCTYPE&gt; 声明位于文档中的最前面，处于 &lt;html&gt; 标签之前。告知浏览器的解析器， 用什么文档类型 规范来解析这个文档；  

> 严格模式的排版和 JS 运作模式是 以该浏览器支持的最高标准运行；  

> 在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作；  

> DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现


# ------------------------------------------
（Continue writing by mayingying）
### DOCTYPE
文档类型声明，告诉浏览器使用什么样的文档类型定义来解析文档。

### document.compatMode
文档类型检测：
- CSS1Compat：标准模式（严格模式），开启标准模式，浏览器按照W3C标准解析渲染页面；
- BackCompat：混杂模式（怪异模式），文档类型默认值，浏览器按照自己的方式解析渲染页面，在不同的浏览器就会显示不同的样式。

### note
- <!DOCTYPE>设置不同模式主要影响CSS内容的呈现，但在某些情况下也会影响到JavaScript的解释执行；
- 这种模式指的是浏览器解析html的规则，与js解析的严格模式、非严格模式不是一回事；
- HTML5没有严格和混杂之分，只有一种声明方式<!DOCTYPE html>，浏览器以严格模式规则解析。

