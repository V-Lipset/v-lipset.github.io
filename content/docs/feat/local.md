---
title: "本地术语表"
description: ""
summary: ""
date: 2026-01-24T12:00:00+02:00
lastmod: 2026-01-24T12:00:00+02:00
draft: false
weight: 410
toc: true
seo:
  title: "本地术语表" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## 1. 翻译术语表

* 格式
  * `原文：译文`
  * `"带标点符号的原文"：译文`
  * `原文部分1 原文部分2 = 译文部分1 译文部分2`
  * `原文部分1 原文部分2 = 译文部分1·译文部分2`

* 说明
  * 每条规则之间，使用 `，` 作为分隔符。
  * 一般情况下，使用 `:` 连接原文和译文。
  * 如果原文词条中有标点符号，请使用 `"` 将其包裹，译文词条则不做要求。
  * 在进行多词条关联定义时，使用 `=` 连接原文和译文；原文和译文的部分数量必须完全一致，译文每部分之间使用 `空格` 或者 `·` 隔开。

* 示例及解析
  * 输入框内容示例
    * `Hypatia：伊帕希娅，"-chan"：酱，Wakaba Mutsumi = 若叶 睦，Elvira Stewart = 艾尔维拉·斯图尔特`
  * `Hypatia：伊帕希娅`
    * 插件会自动生成以下规则：
      * `Hypatia` → `伊帕希娅`
  * `"-chan"：酱`
    * 插件会自动生成以下规则：
      * `-chan` → `酱`
  * `Wakaba Mutsumi = 若叶 睦`
    * 插件会自动生成以下规则：
      * `Wakaba Mutsumi` → `若叶睦`
      * `Mutsumi Wakaba` → `若叶睦`
      * `Wakaba` → `若叶`
      * `Mutsumi` → `睦`
  * `Elvira Stewart = 艾尔维拉·斯图尔特`
    * 插件会自动生成以下规则：
      * `Elvira Stewart` → `艾尔维拉·斯图尔特`
      * `Stewart Elvira` → `艾尔维拉·斯图尔特`
      * `Elvira` → `艾尔维拉`
      * `Stewart` → `斯图尔特`

## 2. 禁翻术语表

* 格式
  * `原文`
  * `"带标点符号的原文"`

* 说明
  * 每条规则之间，使用 `，` 作为分隔符。
  * 如果原文词条中有标点符号，请使用 `"` 将其包裹。

* 输入框内容示例
  * `EDGE，HUSH，"BanG Dream! Girl's Band Party! (Video Game)"`
