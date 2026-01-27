# 教会网站模板 - 更改说明

## 已完成的修改

本模板已从特定教会网站（安提阿恩典堂 Antioch Grace Church）转换为通用的教会网站模板。

### 主要更改内容

#### 1. **项目配置文件**
- ✅ `package.json` - 项目名称改为 `church-web-template`
- ✅ `wrangler.toml` - 名称改为 `church-web-template`
- ✅ `wrangler.jsonc` - 名称改为 `church-web-template`
- ✅ `astro.config.mjs` - 网站URL改为占位符
- ✅ `README.md` - 更新为通用模板说明

#### 2. **页面文件（中文）**
- ✅ `src/pages/index.astro` - 删除教会名称和地点信息
- ✅ `src/pages/about.astro` - 改为通用介绍模板
- ✅ `src/pages/team.astro` - 团队成员改为占位符
- ✅ `src/pages/gathering.astro` - 聚会信息改为模板格式
- ✅ `src/pages/contact.astro` - 联系方式改为占位符
- ✅ `src/pages/posts/[...slug].astro` - 标题改为通用
- ✅ `src/pages/posts/index.astro` - 标题改为通用
- ✅ `src/pages/categories/[category].astro` - 标题改为通用
- ✅ `src/pages/tags/[tag].astro` - 标题改为通用

#### 3. **页面文件（英文）**
- ✅ `src/pages/en/index.astro` - 删除教会名称和地点信息
- ✅ `src/pages/en/about.astro` - 改为通用介绍模板
- ✅ `src/pages/en/team.astro` - 团队成员改为占位符
- ✅ `src/pages/en/gathering.astro` - 聚会信息改为模板格式
- ✅ `src/pages/en/contact.astro` - 联系方式改为占位符
- ✅ `src/pages/en/posts/[...slug].astro` - 标题改为通用
- ✅ `src/pages/en/posts/index.astro` - 标题改为通用
- ✅ `src/pages/en/categories/[category].astro` - 标题改为通用
- ✅ `src/pages/en/tags/[tag].astro` - 标题改为通用

#### 4. **布局文件**
- ✅ `src/layouts/Layout.astro` 
  - Logo文字改为"教會名稱 Church Name"
  - Footer教会名称改为通用
  - Footer地址改为占位符
  - Footer邮箱改为占位符
  - Footer版权信息改为通用
  - YouTube链接改为占位符

#### 5. **内容文件**
- ✅ 删除所有示例贴文 (2025和2026目录)
- ✅ 创建示例贴文模板 `example-post.md`

#### 6. **图片资源**
- ✅ 删除特定教会成员照片：
  - Pastor-Fung.jpg
  - pastor-feng.jpg
  - ruth-chen.jpg
  - peter-young.jpg
- ✅ 保留 `placeholder.jpg` 作为占位符

#### 7. **链接更新**
- ✅ 所有YouTube链接改为 `#` 占位符
- ✅ 所有社交媒体链接改为占位符
- ✅ 所有电子邮件改为 `church@example.com`
- ✅ 所有电话号码改为占位符
- ✅ 所有地址改为占位符

### 需要用户自定义的内容

使用此模板时，您需要替换以下占位符内容：

1. **教會名稱 / Church Name** - 在所有页面中替换
2. **[您的教會地址]** - 联系页面和footer
3. **[church@example.com]** - 所有邮件地址
4. **[您的聯系電話]** - 所有电话号码
5. **[Your Church Address]** - 英文页面地址
6. **YouTube 频道链接** - 将所有 `#` 替换为实际链接
7. **团队成员信息** - 更新姓名、职位、简介和照片
8. **聚会时间** - 更新为实际聚会安排
9. **关于页面内容** - 添加教会历史和使命
10. **网站域名** - 在 `astro.config.mjs` 中更新

### 文档文件

- ✅ `CUSTOMIZATION_GUIDE.md` - 详细的定制指南
- ✅ `TEMPLATE_CHANGES.md` - 本文件，记录所有更改

## 使用建议

1. 从 `CUSTOMIZATION_GUIDE.md` 开始，按步骤定制网站
2. 使用全局搜索替换功能快速更新占位符
3. 上传团队成员照片到 `public/images/team/`
4. 添加贴文到 `src/content/posts/`
5. 测试所有页面和链接

## 技术栈

- **框架**: Astro 4.16
- **内容管理**: Decap CMS
- **部署**: Cloudflare Pages
- **语言**: 中文/英文双语

## 许可

此模板基于开源项目，可自由使用和修改。
