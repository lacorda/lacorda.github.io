---
description: npm link本地调试组件库
slug: /3aefa4c
tags: 
  - npm link本地调试组件库
---

# npm link本地调试组件库

## 前言

我们平常在项目中调试组件库的新功能，需要以下几步：

- 更新代码
- `package.json`修改`version`
- `npm publish`发布包
- 应用项目`npm i`安装组件库新版本

:::info 这样存在问题

代码修改麻烦、不断地打 ***tag*** ，可能产生很多 ***alpha版本***

:::

## 使用npm link实现本地调试

### 第一步：在组件库中

- 在一个包文件夹内执行 `npm link`
  
:::tip

- `npm link`: 将在全局文件 {prefix}/lib/node_modules/{packageName} 内，创建一个符号链接（symlink），这个链接指向当前包文件
  
- `npm link`连接组件库与项目，最好保证两个库的使用相同版本的`node`。
  
- `npm link`之前要先执行`npm run build`，因为在项目中使用包，指向的是包中的 ***lib***

- 为了让项目中实时更新组件库的修改，组件库需要执行设置 ***热更新***，并实时生成  ***lib*** 输出文件

:::

### 第二步：在项目中

- 到应用项目下，执行 `npm link {packageName}` 命令，将会创建一个从全局安装的 ***packageName*** 到当前文件内的 ***node_modules*** 下的符号链接。

:::tip

需要注意的的是， packageName 是取自包的 package.json 中 name 字段，不是文件夹名称。

:::

## 解除 link

### 第一步：在项目中

到项目下执行下面的命令：

```bash
npm unlink --no-save {packageName}
```

:::tip

`npm uninstall` 文档中可以发现，`unlink` 其实是 `uninstall` 的别名，实质上也是删除了包，需要 ***重新安装***

:::

### 第二步：在组件库中

```bash
npm unlink 
```
