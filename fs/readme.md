性能优化

http createServer   (req res )=>{   callback    }
web 一切皆资源

web server 资源(html,css,json,img)  createReadStream(读)

将相应的资源"传输"到客户端 client proxy

优化空间？

传输的体积能够减少，gzip

服务器端是可以进行文件操作的 有读写，权限，压缩，解压缩

客户端

res.writeHead(200,{
    'Content-Type':'text/html;charset=utf8'
})
带有一个压缩的字段，unzip

减少传输的体积，除了更快，还可以省带宽


