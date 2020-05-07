//读取文件内容

//fs、path：nodejs原生模块
const fs = require('fs')
const path = require('path')



// 1、callback 方式获取一个文件的内容
/*function getFileContent(fileName, callback) {
    const fullFileName = path.resolve(__dirname, 'files', fileName)
    fs.readFile(fullFileName, (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        callback(
            JSON.parse(data.toString())
        )
    })
}
getFileContent('a.json', aData => {
    console.log('a data', aData)
    getFileContent(aData.next, bData => {
        console.log('b data', bData)
        getFileContent(bData.next, cData => {
            console.log('c data', cData)
        })
    })
})*/



// 2、用 promise 获取文件内容，异步获取
/*function getFileContent(fileName) {
  const promise = new Promise((resolve, reject) => {
    const fullFileName = path.resolve(__dirname, 'files', fileName)
    fs.readFile(fullFileName, (err, data) => {
      if (err) {
        reject(err)
        return
      }
      resolve(
        JSON.parse(data.toString())
      )
    })
  })
  return promise
}
getFileContent('a.json').then(aData => {
    console.log('a data', aData)
    return getFileContent(aData.next)
}).then(bData => {
    console.log('b data', bData)
    return getFileContent(bData.next)
}).then(cData => {
    console.log('c data', cData)
})*/



// 3、用 promise 获取文件内容，同步获取
function getFileContent(fileName) {
  const promise = new Promise((resolve, reject) => {
    //参数一__dirname：全局变量直接使用，为当前目录，参数二'files'：要读取的文件所在文件夹名称，参数三：文件名称 ===》找到文件的绝对路径
    const fullFileName = path.resolve(__dirname, 'files', fileName)
    //读取文件,异步获取内容
    fs.readFile(fullFileName, (err, data) => {
      if (err) {
        reject(err)
        return
      }
      resolve(
        JSON.parse(data.toString())
      )
    })
  })
  return promise
}
async function readFileData() {
  try {
    const aData = await getFileContent('a.json')
    console.log('a data', aData)
    const bData = await getFileContent(aData.next)
    console.log('b data', bData)
    const cData = await getFileContent(bData.next)
    console.log('c data', cData)
  } catch (err) {
    console.error(err)
  }
}
readFileData()

// async await 要点：
// 1. await 后面可以追加 promise 对象，获取 resolve 的值
// 2. await 必须包裹在 async 函数里面
// 3. async 函数执行返回的也是一个 promise 对象
// 4. try-catch 截获 promise 中 reject 的值
