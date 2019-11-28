infinite: 播放次数
ease: 运动方式
```
  <div></div>

  div {
    width: 100px;
    height: 100px;
    background-color: #000;
    position: absolute;
    left: 0;
    animation: mymove 1s infinite ease;
  }
  @keyframes mymove {
    from { top: 0px; }
    to { top: 100px; }
  }

```