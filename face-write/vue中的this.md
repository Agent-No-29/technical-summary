源码位于code-name-A中的路由：/one/vue-this
```
export default {
    data() {
      return {
        a: "你好！"
      }
    },
    created: function() {
      console.log('created中取值-' + this.a); //created中取值-你好！
      this.f1();    //function中取值-你好！
      this.f2();    //箭头函数中取值-undefined
      this.f3();    //function中的function取值-undefined
      this.f4();    //function中的箭头函数取值-你好！
    },
    methods:{
      f1: function () {
        console.log('function中取值-' + this.a);
        //vue组件或者实例中，不管是生命周期钩子函数created还是自定义函数f1，他们中的this都是指当前vue实例，使用了箭头函数，则 this 不会指向这个组件的实例。
      },
      f2: () => {
        console.log('箭头函数中取值-' + this.a);
        //箭头函数没有自己的this, 它的this是继承而来; 默认指向在定义它时所处的对象(宿主对象),而不是执行时的对象, 定义它的时候,可能环境是window;
      },
      f3:function(){
        setTimeout(function() {
          console.log('function中的function取值-' + this.a);
        }, 10)
      },
      f4:function() {
        setTimeout(() => {
          console.log('function中的箭头函数取值-' + this.a);
        }, 10)
      }
    }
  }
```

