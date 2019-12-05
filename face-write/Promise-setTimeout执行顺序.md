``` javascript
  setTimeout(() => console.log(1));

  new Promise((res, rej) => {
    console.log(2);
    res(3)
  }).then(val => console.log(val))
  
  console.log(4)
  // 2 4 3 1
```