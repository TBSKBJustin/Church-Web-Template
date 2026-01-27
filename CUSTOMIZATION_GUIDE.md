# 如何使用此教会网站模板 / How to Use This Church Website Template

## 快速开始 / Quick Start

这是一个现代化的教会网站模板，已经删除了所有特定教会的信息。您可以按照以下步骤来定制您自己的教会网站。

### 必须修改的内容 / Required Changes

#### 1. 更新网站标题和基本信息 / Update Site Title and Basic Info

在以下文件中，将 `教會名稱` 替换为您的教会名称：

- `src/pages/index.astro` - 首页
- `src/pages/about.astro` - 关于页面
- `src/pages/team.astro` - 团队页面
- `src/pages/gathering.astro` - 聚会页面
- `src/pages/contact.astro` - 联络页面
- `src/pages/en/*.astro` - 所有英文页面

#### 2. 更新联系信息 / Update Contact Information

在 `src/pages/contact.astro` 和 `src/pages/en/contact.astro` 中：

```astro
- 地址：[您的教會地址]
- 电子邮件：[church@example.com]
- 电话：[您的聯系電話]
- 办公时间：请填写您的办公时间
```

#### 3. 更新团队成员信息 / Update Team Information

在 `src/pages/team.astro` 和 `src/pages/en/team.astro` 中：

- 替换团队成员姓名、职位和简介
- 上传团队成员照片到 `public/images/team/` 目录
- 更新图片路径（当前使用 `placeholder.jpg`）

#### 4. 更新聚会时间 / Update Gathering Schedule

在 `src/pages/gathering.astro` 和 `src/pages/en/gathering.astro` 中：

- 修改聚会时间
- 修改聚会类型
- 添加或删除聚会项目

#### 5. 更新关于页面内容 / Update About Page

在 `src/pages/about.astro` 和 `src/pages/en/about.astro` 中：

- 更新教会简介
- 更新使命宣言
- 更新牧师姓名和联系方式
- 根据需要修改信仰声明

#### 6. 更新 YouTube 链接 / Update YouTube Links

在首页 (`src/pages/index.astro` 和 `src/pages/en/index.astro`) 中：

```astro
<!-- 将 # 替换为您的 YouTube 频道链接 -->
<a href="#" target="_blank" class="btn-youtube btn-recordings">
  觀看錄像
</a>
<a href="#" target="_blank" class="btn-youtube btn-live">
  觀看直播
</a>
```

#### 7. 添加贴文内容 / Add Post Content

参考示例文件 `src/content/posts/example-post.md`：

1. 在 `src/content/posts/` 目录下创建新的 `.md` 文件
2. 复制示例文件的 frontmatter 格式
3. 填写贴文标题、日期、分类、标签等信息
4. 撰写贴文正文（支持 Markdown）
5. 如果有视频，添加 YouTube 链接

### 可选修改 / Optional Changes

#### 1. 自定义样式 / Customize Styles

- 修改 CSS 变量来改变颜色主题
- 更新字体
- 调整布局

#### 2. 添加更多页面 / Add More Pages

参考现有页面的结构，在 `src/pages/` 目录下创建新页面

#### 3. 图片资源 / Image Assets

- 上传教会照片到 `public/images/`
- 更新背景图片路径
- 添加教会 logo

## 技术说明 / Technical Details

### 项目结构 / Project Structure

```
├── public/          # 静态资源
│   └── images/      # 图片文件
├── src/
│   ├── content/     # 贴文内容（Markdown）
│   │   └── posts/   # 贴文文件
│   ├── layouts/     # 布局模板
│   ├── pages/       # 页面文件
│   │   ├── en/      # 英文页面
│   │   └── *.astro  # 中文页面
```

### 开发命令 / Development Commands

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

### 部署 / Deployment

本项目设计为部署在 Cloudflare Pages，但也可以部署到其他支持静态网站的平台：

- Vercel
- Netlify
- GitHub Pages
- 等等

## 需要帮助？ / Need Help?

如果您在使用过程中遇到问题，请：

1. 检查现有文件的格式
2. 参考 Astro 官方文档：https://docs.astro.build
3. 查看项目的 README.md 了解架构设计

## 许可 / License

此模板基于开源项目，可自由使用和修改。
