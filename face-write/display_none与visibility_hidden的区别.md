
visibility: hidden和display: none的区别   

**仅仅在于display: none隐藏后的元素不占据任何空间，而visibility: hidden隐藏后的元素空间依旧保留？**   

1、visibility具有继承性，给父元素设置visibility:hidden;子元素也会继承这个属性。但是如果重新给子元素设置visibility: visible，则子元素又会显示出来。这和display: none有着质的区别；  
2、visibility: hidden不会影响计数器的计数，如图所示，visibility: hidden虽然让一个元素不见了，但是其计数器仍在运行。这和display: none完全不一样  
3、CSS3的transition支持visibility属性，但是并不支持display，由于transition可以延迟执行，因此可以配合visibility使用纯css实现hover延时显示效果。提高用户体验。






