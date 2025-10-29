---
tags: 
  - clashX使用
description: clashX使用
slug: /dc617db
---

# clashX使用

## 公司内网无限制使用clashX

- 编辑`~/.config/clash/proxyIgnoreList.plist`(如果没有该文件，则新建)
- 参考Demo文件加入自定义的白名单域名

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<array>
 <string>192.168.0.0/16</string>
 <string>10.0.0.0/8</string>
 <string>172.16.0.0/12</string> 
 <string>127.0.0.1</string>
 <string>localhost</string>
 <string>*.local</string>
 <string>*.crashlytics.com</string>
 <!-- 上面的不能删掉 -->
 <!-- ...加入新的域名，如：<string>*.baidu.com</string> -->
</array>
</plist>
```

- 重启ClashX
