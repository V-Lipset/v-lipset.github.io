---
title: "添加域名白名单"
description: ""
summary: ""
date: 2025-10-01T12:00:00+02:00
lastmod: 2025-10-01T12:00:00+02:00
draft: false
weight: 310
toc: true
seo:
  title: "添加域名白名单" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

> 如果接口地址为：`https://api.example.com/v1/chat/completions`\
> 需要添加的域名则是：`api.example.com`
{.alert-note}

## 方法一

**概述**：将接口域名添加到脚本管理器的`用户域名白名单`。

**备注**：只需操作一次，不会随插件更新而失效。

{{< steps >}}

{{< step >}}
点击`篡改猴`扩展程序，打开`管理面板`。

{{< lightbox src="1.1.png" alt="步骤 1.1" >}}
{{< /step >}}

{{< step >}}
点击 AO3 Translator 右侧的`钢笔图标`，进入`编辑`页面。

{{< lightbox src="1.2.png" alt="步骤 1.2" >}}
{{< /step >}}

{{< step >}}
点击左上角的`设置`。
{{< lightbox src="1.3.png" alt="步骤 1.3" >}}

{{< /step >}}

{{< step >}}
下滑找到`XHR 安全`→`用户域名白名单`，点击`添加`。

{{< lightbox src="1.4.png" alt="步骤 1.4" >}}
{{< /step >}}

{{< step >}}
填入接口地址域名后，点击`确定`。

{{< lightbox src="1.5.png" alt="步骤 1.5" >}}
{{< /step >}}

{{< step >}}
操作完成。请刷新 AO3 页面。

{{< lightbox src="1.6.png" alt="步骤 1.6" >}}
{{< /step >}}

{{< /steps >}}

## 方法二

**概述**：在脚本代码元数据区添加一行代码。

**备注**：每次插件更新后，都需要重新添加代码行。

{{< steps >}}

{{< step >}}
点击`篡改猴`扩展程序，打开`管理面板`。

{{< lightbox src="2.1.png" alt="步骤 2.1" >}}
{{< /step >}}

{{< step >}}
点击 AO3 Translator 右侧的`钢笔图标`，进入`编辑`页面。

{{< lightbox src="2.2.png" alt="步骤 2.2" >}}
{{< /step >}}

{{< step >}}
在脚本代码最上面的`==UserScript==`元数据区添加`@connect`代码行：

`// @connect      api.example.com`

{{< lightbox src="2.3.png" alt="步骤 2.3" >}}
{{< /step >}}

{{< step >}}
点击左上角的`文件`，`保存`刚刚做了修改的代码。

{{< lightbox src="2.4.png" alt="步骤 2.4" >}}
{{< /step >}}

{{< step >}}
操作完成。请刷新 AO3 页面。

{{< lightbox src="2.5.png" alt="步骤 2.5" >}}
{{< /step >}}

{{< /steps >}}
