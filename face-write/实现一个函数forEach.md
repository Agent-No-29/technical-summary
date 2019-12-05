
1.调用方式 forEach(arr, fn);  
``` javascript 
  let forEach = function(arr, fn) {
    for(var i = 0; i < arr.length; i++) {
      fn.call(arr, arr[i], i);
    }
  };
  forEach([1,2,3], (item, index) => console.log(item,index))
```

2.调用方式 arr.forEach(fn);
``` javascript 
  Array.prototype._forEach = function(fn) {
    for(var i = 0; i < this.length; i++) {
      fn.call(this, this[i], i);
    }
  };
  [1,2,3]._forEach((item, index) => console.log(item,index))
```
