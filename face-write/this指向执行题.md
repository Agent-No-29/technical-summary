``` javascript
  function foo() {
    console.log(this.bar);
  }
  var bar = 'global';
  
  var obj1 = {
    bar: 'obj1',
    foo: foo
  }

  var obj2 = {
    bar: 'obj2'
  }
  foo();
  obj1.foo();
  foo.call(obj2);
  new foo()

  // global
  // obj1
  // obj2
  // undefined

````