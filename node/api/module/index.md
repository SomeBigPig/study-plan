# 模块作用域
## __dirname
```
当前模块的目录名, 与__filename 的path.dirname()相同
```

## __filename
```
当前模块的文件名, 绝对路径
```



# issue
## __dirname, __filename, process.cwd(), ./ 的区别
```
__dirname：返回当前模块目录名的绝对路径
__filename：返回当前模块文件名的绝对路径
process.cwd()：返回当前执行node命令的目录名
./：在require中使用时，等同于__dirname，不在require中使用时等同于process.cwd()
```

# link
[require()源码解析-阮一峰的网络日志](http://www.ruanyifeng.com/blog/2015/05/require.html)