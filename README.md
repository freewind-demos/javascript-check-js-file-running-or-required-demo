在一个JS文件中怎么检查自己是被直接被node执行了，还是被别的module require了？
================================================

关键点就在于`module.parent`这个属性。

```
npm install
```

直接执行：

```
$ node server.js
Server is started
```

被别人引用：

```
$ node hello.js
Server is required by other module, will not start automatically
I required server: hello-server
```

有时候我们需要对某个server进行单元测试，就可以使用这个技术：
- 如果是在单元测试代码中require了，那么就不自动启动，由单元测试来处理
- 如果是直接由node执行，那么就启动