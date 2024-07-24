# directive-views

用组件方式来调用小程序的API。

## 安装

```bash
npm install @mini-dev/directive-views --save
```

## 使用

### 复制（copy）

```xml

<copy value="你好">
    <button type="default">复制 value 的值</button>
</copy>
```

### 调试开关（debug）

```xml

<debug open="开启调试" close="关闭调试"/>
```

### 函数调用（function）

```xml

<function directive-class="function" name="function1" arg="{name:'fn1'}" auto/>
```

### 路由（route）

```xml

<route directive-class="route" url="/pages/page2/index" auto/>
```

更多配置方式：具体可以参见示例 [pages](./pages)

## ChangeLog

### 0.0.1

1. 添加常用的操作；


