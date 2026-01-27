# 📖 教会网站模板项目说明（Astro + Decap CMS + GitHub + Cloudflare Pages）

本项目是一个 **现代化、开源、可定制** 的教会网站模板系统，采用 **静态网站 + 内容管理后台（CMS）** 的架构设计。

特点：

* 前台访问 **极快、稳定**
* 后台发布 **像 WordPress 一样简单**
* 不依赖服务器、不依赖数据库
* 易于定制和维护
* 完全开源，可自由使用

---

## 🧱 整体架构概览

```
同工（浏览器）
   ↓
Decap CMS（/admin 后台）
   ↓
GitHub 仓库（代码 + 内容）
   ↓
Cloudflare Pages（自动构建 & CDN）
   ↓
访客访问（全球高速）
```

### 各组件角色说明

| 组件                   | 角色                                  |
| -------------------- | ----------------------------------- |
| **Astro**            | 静态网站生成器，定义网站页面结构与样式                 |
| **Decap CMS**        | 内容管理后台（贴文发布、编辑）                     |
| **GitHub**           | 内容与代码的唯一存储源（Single Source of Truth） |
| **Cloudflare Pages** | 自动构建、部署与全球 CDN 托管                   |

---

## 🌐 网站页面结构（繁体中文）

所有页面均为 **静态页面**，由 Astro 生成。

### 主页面

* `/` 首页
* `/about` 关于我们
* `/team` 我们的团队
* `/gathering` 聚会
* `/contact` 联络我们
* `/posts` 贴文列表页

### 贴文相关页面

* `/posts`：所有贴文列表
* `/posts/[slug]`：单篇贴文页面
* `/categories/[category]`：分类引文页面
* `/tags/[tag]`：标签引文页面

> 📌 **说明**：
> 所有「分类 / 标签 / 作者」都会自动生成对应的 **引文（汇总）页面**，无需手动创建。

---

## ✍️ 贴文（Post）功能设计

### 每篇贴文支持内容

* ✅ 标题
* ✅ 发布日期
* ✅ 缩略图（用于列表页 / 首页展示）
* ✅ 正文（Markdown 文本）
* ✅ YouTube 视频嵌入（iframe）
* ✅ 分类（Category，可多选）
* ✅ 标签（Tags，可多选）
* ✅ 作者（可选）

### 贴文展示逻辑

* 首页：显示最新贴文 / 精选贴文
* 贴文页：完整内容 + 视频 + 文本
* 分类页：同一分类下的所有贴文
* 标签页：同一标签下的所有贴文

---

## 🗂️ 项目目录结构（建议）

```
/
├─ src/
│  ├─ pages/
│  │  ├─ index.astro            # 首页
│  │  ├─ about.astro            # 关于我们
│  │  ├─ team.astro             # 我们的团队
│  │  ├─ gathering.astro        # 聚会
│  │  ├─ contact.astro          # 联络我们
│  │  └─ posts/
│  │     ├─ index.astro          # 贴文列表
│  │     └─ [slug].astro         # 单篇贴文
│  ├─ layouts/
│  ├─ components/
│  └─ styles/
│
├─ content/
│  └─ posts/
│     └─ example-post.md         # 贴文内容（Markdown）
│
├─ public/
│  └─ images/
│     └─ thumbnails/             # 贴文缩略图
│
├─ admin/
│  ├─ index.html                 # Decap CMS 后台入口
│  └─ config.yml                 # CMS 字段配置
│
├─ astro.config.mjs
├─ package.json
└─ README.md
```

---

## 🛠️ Decap CMS（内容管理后台）

### 后台入口

```
https://你的域名/admin
```

### 同工发布流程

1. 打开 `/admin`
2. 使用 GitHub 帐号登录
3. 新建贴文
4. 填写内容（标题 / 分类 / 标签 / YouTube / 缩略图）
5. 点击 **Publish**
6. 网站将在约 30–60 秒内自动更新

> ✅ 同工 **不需要** 会 Git
> ✅ 同工 **不需要** 知道 Astro / Cloudflare

---

## 🔐 权限与安全说明

* GitHub 仓库为 **内容与代码的唯一来源**
* 只有被授权的 GitHub 帐号才能发布内容
* 网站前台为纯静态页面，无数据库、无后端攻击面
* 后台（/admin）可搭配 Cloudflare Access 进行额外保护（可选）

---

## 🚀 部署流程（一次性设置）

1. 本地开发（Astro）

   ```bash
   npm install
   npm run dev
   ```

2. 推送至 GitHub

   ```bash
   git push
   ```

3. Cloudflare Pages：

   * 连接 GitHub 仓库
   * 构建命令：`npm run build`
   * 输出目录：`dist`
   * Framework preset: Astro

   > **注意**：项目已包含 `wrangler.jsonc` 配置文件，用于 Cloudflare Pages 部署。

4. 绑定自定义域名（可继续使用 GoDaddy 域名）

5. 启用 HTTPS（自动）

---

## 🔄 内容更新流程（长期）

* 内容更新：由 Decap CMS 自动完成
* 网站构建：Cloudflare Pages 自动完成
* 不需要：

  * SSH
  * VPS
  * 数据库维护
  * 插件更新

---

## 🤝 交接说明（给未来同工）

要接手本网站，只需要：

1. GitHub 仓库访问权限
2. Cloudflare Pages 项目访问权限
3. 域名管理权限

不依赖任何个人电脑或服务器。

---

## 📌 项目设计理念总结

> **用静态网站解决“慢与维护”，
> 用 CMS 解决“内容发布与交接”。**

这是一个 **为教会长期服事而设计的技术方案**。
