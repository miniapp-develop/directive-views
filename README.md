# directive-views

用组件方式来调用小程序的API。

## 安装

## 使用

```xml
<view class="container">
    <view>
        <copy value="你好">
            <button type="default">复制 value 的值</button>
        </copy>
    </view>
    <view>
        <debug open="开启调试" close="关闭调试" />
    </view>
    <view>
        <function directive-class="function" name="function1" arg="{name:'fn1'}" auto />
    </view>
    <view>
        <route directive-class="route" url="/pages/page2/index" auto />
    </view>
</view>
```

## ChangeLog



