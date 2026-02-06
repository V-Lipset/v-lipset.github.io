---
title: "创建在线术语表"
description: ""
summary: ""
date: 2025-10-01T12:00:00+02:00
lastmod: 2025-10-01T12:00:00+02:00
draft: false
weight: 460
toc: true
seo:
  title: "创建在线术语表" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

{{< steps >}}

{{< step >}}
登录 Github 。

GitHub 网址：[https://github.com](https://github.com)
{{< /step >}}

{{< step >}}
访问 AO3 汉化插件项目，复刻此仓库。

 AO3 汉化插件：[https://github.com/V-Lipset/ao3-chinese](https://github.com/V-Lipset/ao3-chinese)

{{< lightbox src="2.1.png" alt="步骤 2.1" >}}

{{< lightbox src="2.2.png" alt="步骤 2.2" >}}
{{< /step >}}

{{< step >}}
进入所复刻仓库的术语表文件夹，创建或上传你的术语表文件。

术语表编写指南：[https://v-lipset.github.io/docs/guides/glossary/write](https://v-lipset.github.io/docs/guides/glossary/write)

注意：遵循指南中的编写规则可节省大量后续编写时所花费的精力。

{{< lightbox src="3.1.png" alt="步骤 3.1" >}}

{{< lightbox src="3.2.png" alt="步骤 3.2" >}}
{{< /step >}}

{{< step >}}
这里以创建术语表文件为例。

4.1 输入你的术语表名称（建议用同人圈来命名），加上 `.txt` 后缀。

{{< lightbox src="4.1.png" alt="步骤 4.1" >}}

4.2 在代码框内填写术语表信息及词条。

* `维护者`、`版本号`是必须要有的项。
* 词条区域至少需要包含`词条`、`通用词条`、`禁翻词条`、`正则表达式`这 4 个部分中的 1 个。
* 以`//`开头表示这是一行注释。可用于整理、分类词条。
* 格式
  * 翻译词条
    * `原文：译文`
    * `"带标点符号的原文"：译文`
    * `原文部分1 原文部分2 = 译文部分1 译文部分2`
    * `原文部分1 原文部分2 = 译文部分1·译文部分2`
  * 禁翻词条
    * `原文`
    * `"带标点符号的原文"`
* 术语表示例

```txt
版本号：1.0.1
维护者：V-Lipset
更新时间：2025-09-22

// 编写时，请至少包含“词条”、“通用词条”、“禁翻词条”、“正则表达式”这 4 个部分中的 1 个
// 正则表达式区域外，使用引号包裹带有标点符号的原文词条

词条
// 此区域区分大小写，用于翻译人名等专有名词
Wakaba Mutsumi = 若叶 睦
Elvira Stewart = 艾尔维拉·斯图尔特
Hypatia：伊帕希娅
"-chan"：酱
Dis City：狄斯城

通用词条
// 此区域不区分大小写，用于翻译通用概念
Hypercube：异方晶
Sinner：禁闭者

禁翻词条
// 此区域区分大小写，用于保持原文
EDGE
HUSH
"BanG Dream! Girl's Band Party! (Video Game)"

正则表达式
// 匹配德语中 "Wachmann" 的单数和复数形式
\bWachm(?:ann|änner)\b: 守卫
```

4.3 编辑完术语表后，点击提交。

{{< lightbox src="4.3.png" alt="步骤 4.3" >}}

4.4 打开刚刚创建好的术语表，点击`Raw`获取它的源代码链接。

{{< lightbox src="4.4.png" alt="步骤 4.4" >}}

{{< lightbox src="4.5.png" alt="步骤 4.5" >}}

{{< lightbox src="4.6.png" alt="步骤 4.6" >}}
{{< /step >}}

{{< step >}}
把刚刚获取到的链接粘贴进`导入在线术语表`选框，就可以导入各项词条了。有这条链接的人都可以使用你维护的术语表。

{{< lightbox src="5.1.png" alt="步骤 5.1" >}}
{{< /step >}}

{{< step >}}
如果后续想要更新术语表，需要打开此文件编辑并提交。\
修改好术语表后，不要忘了**提高版本号**（例如从 `1.0.0` 改为 `1.0.1`）、修改更新日期。几分钟后，导入了此术语表的 AO3 汉化插件就会检测到其新版本，然后自动进行更新。

{{< lightbox src="6.1.png" alt="步骤 6.1" >}}
{{< /step >}}

{{< step >}}
如果想要贡献此术语表到 AO3 汉化插件项目的在线术语表库，只需回到你 Fork 的 GitHub 库主页，同步复刻，点击贡献，创建拉取请求即可。

{{< lightbox src="7.1.png" alt="步骤 7.1" >}}

{{< lightbox src="7.2.png" alt="步骤 7.2" >}}

{{< lightbox src="7.3.png" alt="步骤 7.3" >}}
{{< /step >}}

{{< step >}}
贡献完成后，你的账户会出现在 AO3 汉化插件的贡献者名单中。期待和你共同维护这个项目！

{{< lightbox src="8.1.png" alt="步骤 8.1" >}}
{{< /step >}}

{{< /steps >}}
