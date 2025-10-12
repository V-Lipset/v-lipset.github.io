---
title: "翻译服务介绍"
description: ""
summary: ""
date: 2025-10-01T12:00:00+02:00
lastmod: 2025-10-01T12:00:00+02:00
draft: false
weight: 230
toc: true
seo:
  title: "翻译服务介绍" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

> **注意**：如果访问某个网址或使用某项翻译服务时，出现异常错误，请科学上网并开启全局代理。
{.alert-note}

## 1. 谷歌翻译

**备注**：需要科学上网。

## 2. Anthropic

**API Key 获取地址**：[https://console.anthropic.com](https://console.anthropic.com)

## 3. Cerebras

**模型**：`Llama 4 Maverick`、`Llama 4 Scout`、`Qwen 3 235B`、`GPT-OSS 120B`

**简介**：有每日免费额度、可翻译敏感内容

**API Key 获取地址**：[https://cloud.cerebras.ai](https://cloud.cerebras.ai)

**免费额度查询文档**：Cerebras 控制台

**备注**：每个模型一百万 tokens / 天。

## 4. DeepSeek

**模型**：`DeepSeek V3.2 Think`、`DeepSeek V3.2 Non-Think`

**简介**：付费、可翻译敏感内容

**API Key 获取地址**：[https://platform.deepseek.com](https://platform.deepseek.com)

**价格查询**：[https://api-docs.deepseek.com/zh-cn/quick_start/pricing](https://api-docs.deepseek.com/zh-cn/quick_start/pricing)

**备注**：非必要情况下，不要使用 `DeepSeek V3.2 Think` ，它是大体量推理模型，拥有过多思考过程，返回译文异常缓慢。

## 5. Google AI

**模型**：`Gemini 2.5 Pro`、`Gemini 2.5 Flash`、`Gemini 2.5 Flash-Lite`

**简介**：有每日免费额度、不可翻译敏感内容

**API Key 获取地址**：[https://aistudio.google.com](https://aistudio.google.com)

**免费额度查询文档**：[https://ai.google.dev/gemini-api/docs/rate-limits](https://ai.google.dev/gemini-api/docs/rate-limits)

**备注**：非必要情况下，不要使用 `Gemini 2.5 Pro` ，它也是大体量推理模型，并且由于调用量太大，时常会有模型过载的问题。

**小技巧**：可准备多个谷歌账号，每个账号下创建不超过 5 个项目，每个项目下创建一个 API Key，将这些 API Key 填入选框中（Key 之间以逗号隔开），翻译时，脚本将自动进行轮询，从而提高每日免费额度。一个项目下，每天可调用 `Gemini 2.5 Pro` 100 次，`Gemini 2.5 Flash` 250 次，`Gemini 2.5 Flash-Lite` 1000 次。

## 6. Groq AI

**模型**：`Llama 4 Maverick`、`Llama 4 Scout`、`Kimi K2`、`DeepSeek 70B`、`GPT-OSS 120B`

**简介**：有每日免费额度、前 3 个模型（L/K/D）可翻译敏感内容

**API Key 获取地址**：[https://console.groq.com](https://console.groq.com)

**免费额度查询文档**：[https://console.groq.com/docs/rate-limits](https://console.groq.com/docs/rate-limits)

**备注**：每天可免费使用的 tokens 分别为 500k 、300k、100k、200k。

## 7. ModelScope

**模型**：`Llama 4 Maverick`、`DeepSeek V3.1`、`GLM 4.6`、`Qwen3 235B`

**简介**：有每日免费额度、不可翻译敏感内容

**API Key 获取地址**：[https://www.modelscope.cn/my/myaccesstoken](https://www.modelscope.cn/my/myaccesstoken)

**免费额度查询文档**：[https://www.modelscope.cn/docs/model-service/API-Inference/intro](https://www.modelscope.cn/docs/model-service/API-Inference/intro)

**阿里云账号绑定与授权教程**：[https://www.modelscope.cn/docs/accounts/aliyun-binding-and-authorization](https://www.modelscope.cn/docs/accounts/aliyun-binding-and-authorization)

**备注**：所有模型共计 2000 次/天。需要进行阿里云账号绑定与授权才能正常使用。

## 8. OpenAI

**API Key 获取地址**：[https://platform.openai.com](https://platform.openai.com)

## 9. Together AI

**模型**：`Llama 4 Maverick`、`DeepSeek V3`、`Kimi K2`、`Qwen3 235B`

**简介**：付费、可翻译敏感内容

**API Key 获取地址**：[https://api.together.ai](https://api.together.ai)

**价格查询**：[https://api.together.ai/models](https://api.together.ai/models)

## 10. Zhipu AI

**模型**：`GLM-4.5-Flash`、`GLM-4-Flash-250414`

**简介**：免费、不可翻译敏感内容

**API Key 获取地址**：[https://www.bigmodel.cn](https://www.bigmodel.cn)

## 11. 自定义

① 自定义翻译服务时，必须将接口地址域名手动添加至 AO3 汉化插件的 `域名白名单` 中才能正常使用。具体操作过程可参考文档：[添加域名白名单](https://v-lipset.github.io/docs/guides/whitelist/) 。

② 填写并保存 `接口地址`、`API Key`后，如果 `模型 ID` 为空，脚本会自动尝试获取当前服务的所有可用模型。
