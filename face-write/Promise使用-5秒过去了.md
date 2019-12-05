``` javascript
        function wait(n) {
          return new Promise((resolve,reject) => {
            setTimeout(() => {
              resolve()
            }, 5000)
          })
        }
    
        wait(5).then(() => {
          console.log('5s过去了')
        });

```
