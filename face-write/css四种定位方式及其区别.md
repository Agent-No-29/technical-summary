 
 - 1、static （静态定位）默认值，元素框正常生成的，top left bottom right这几个偏移属性还有z-index不会影响其静态定位的正常显示  
 - 2、relative是保留原来位置，不脱离文档流，相对于原位置定位，经常与z-index属性进行层次分级  
 - 3、absolute脱离文档流，是整个元素的左上角（含margin）相对于最近的、非static定位的父元素的padding外边界或者说border内边界定位的;如果没有非static定位的父元素，则相对于“浏览器可视窗口”定位（不是body也不是html元素，而是屏幕的可视区的左上角（不含工具条）），经常与z-index属性进行层次分级  
 - 4、fixed脱离文档流，是相对于“浏览器的可视窗口”来定位的而不是html也不是body也不是屏幕！经常与z-index属性进行层次分级
***对于元素本身特性的影响：position:fixed和absolute，将使元素变为block元素，并脱离文档流  
