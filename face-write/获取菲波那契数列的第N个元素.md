
菲波那契数列：a(n) = a(n-1) + a(n-2)，类似于1, 1, 2, 3, 5, 8, 13 ...

#### 1.递归
```
        var a = function(n) {
            if (n === 1 || n === 2) {
                return 1
            } else {
                return a(n - 1) + a(n - 2)
            }
        }
        console.time('a（44）')
        console.log(a(44))
        console.timeEnd('a（44）')        
```
以上输出： 701408733，
用时：4827.8251953125ms

#### 2.闭包+缓存
```
        var b = (function() {
            var cache = {
                1: 1,
                2: 1
            }
            return function(n) {
                if (cache[n]) {
                    return cache[n]
                } else {
                    cache[n - 1] = b(n - 1)
                    cache[n - 2] = b(n - 2)
                    return cache[n - 1] + cache[n - 2]
                }
            }
        })()
        
        console.time('b（44）')
        console.log(b(44))
        console.timeEnd('b（44）')
```
以上输出： 701408733，
用时：0.4130859375ms

#### 3.直接计算出该数列的值得数组，然后再从数组中取值
```
        var c = function(n) {
            var arr = [1, 1]
            if (n === 1 || n === 2) {
                return 1
            }
            for (var i = 2; i < n; i ++) {
                arr[i] = arr[i - 1] + arr[i - 2]
            }
            return arr[n - 1]
        }

        console.time('c（44）')
        console.log(c(44))
        console.timeEnd('c（44）')
```
以上输出： 701408733，
用时：0.25927734375ms

#### 4.直接使用数学表达式
```
        var d = function(n) {
            return (1/(Math.pow(5, 1/2))) * (Math.pow((1 + Math.pow(5, 1/2))/2, n) - Math.pow((1 - Math.pow(5, 1/2))/2, n))
        }

        console.time('d（1200）')
        console.log(d(1200))
        console.timeEnd('d（1200）')
```
以上输出： 701408733，
用时：0.251953125ms
