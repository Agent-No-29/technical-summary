``` javascript
  setTimeout(() => console.log(1));

  new Promise((res, rej) => {
    console.log(2);
    res(3)
  }).then(val => console.log(val))
  
  console.log(4)
  // 2 4 3 1
```

``` javascript
  async function async1() {
    console.log(1);
    const result = await async2();
    console.log(3);
  }

  async function async2() {
    console.log(2);
  }

  Promise.resolve().then(() => {
    console.log(4);
  });

  setTimeout(() => {
    console.log(5);
  });

  async1();
  console.log(6);

  // 1 2 6 4 3 5

```