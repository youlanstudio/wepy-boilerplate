# wepy 基础模板(Wepy Boilerplate)

WePY (发音: /'wepi/)是一款腾讯自己开发的让小程序支持组件化开发的框架，通过预编译的手段让开发者可以选择自己喜欢的开发风格去开发小程序。
本项目是 WePY 的一个基础模板，采用 babel+scss，支持 Promise 和 async/await，支持自动补充前缀。

## 安装 (Installation)

```Bash
# 安装wepy命令行工具
npm install -g wepy-cli
```

## 使用(Usage)

1.  初始化项目

```Bash
# 使用本模板初始化项目
wepy init youlanstudio/wepy-boilerplate myproject
```

2.  安装依赖

```bash
cd myproject
npm install
```

3.  编译(根据需要，下面的编译命令，任选其一)

```Bash
# 编译生成微信小程序项目
wepy build

# 编译并监控文件改动
wepy build --watch

# 对于引用到的文件，即使无改动也会再次编译
wepy build --no-cache
```
