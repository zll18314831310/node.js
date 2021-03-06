// COMMONJS require NODE 内置支持的js模块化方案
// es6 module
// sea.js
const fs = require('fs');
let data;

// fs.readFile('./f1.txt','utf8',(err,data)=>{
//     console.log('真正的读取完成了');
//     console.log('文件的内容'+data)
// })
// console.log('读取完成')

const p = new Promise((resolve,reject)=> {

    fs.readFile('./f14.txt','utf8',(err,data)=>{
        // console.log('真正的读取完成了');
        // console.log('文件的内容'+data);
        if(err) {
            reject(err)
        }else {
            resolve(data);
        }
        
        
    })
    
})
p.then((data)=>{
    console.log('读取完成，做其他事情')
}).catch(e=>{
    console.log(e)
})