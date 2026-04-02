# 网站样式与动画指南

## 📋 目录
1. [颜色变量](#颜色变量)
2. [全局样式](#全局样式)
3. [动画效果](#动画效果)
4. [组件样式](#组件样式)
5. [响应式设计](#响应式设计)

---

## 颜色变量

网站使用CSS自定义属性定义的全局颜色主题：

```css
:root {
  --color-primary: #2f80ed;      /* 主要蓝色 */
  --color-dark: #1f2d3d;         /* 深色背景 */
  --color-light: #ffffff;        /* 白色 */
  --color-text: #333333;         /* 文本颜色 */
  --color-gray: #f5f5f5;         /* 灰色背景 */
}
```

### 颜色应用
- **主色调**：蓝色 (`#2f80ed`) - 用于按钮、链接悬停、主要交互元素
- **深色背景**：深灰蓝 (`#1f2d3d`) - 用于section背景和footer
- **浅色背景**：浅灰 (`#f5f5f5`) - 用于section和卡片背景
- **文本**：深灰 (`#333333`) - 主要文本颜色

---

## 全局样式

### 字体配置
- **正文字体**：`Inter` (sans-serif)
- **标题字体**：`Playfair Display` (serif)
  - 用于所有heading标签 (h1-h6)
  - 字重：600
  - 行高：1.2

### 布局容器
```css
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}
```

---

## 动画效果

### 1. **fadeInUp** - 淡入向上动画
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```
- **持续时间**：1秒
- **时间函数**：ease
- **应用场景**：Hero内容在页面加载时

### 2. **bounce** - 弹跳动画
```css
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}
```
- **上下振幅**：最多10px
- **应用场景**：可用于引导用户注意的元素

### 3. **Scroll Reveal** - 滚动显示动画
```css
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
```
- **持续时间**：0.8秒
- **触发**：当元素滚动到视口时激活 `.active` 类

---

## 组件样式

### 导航栏 (Navbar)
```css
.navbar {
  position: fixed;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);      /* 毛玻璃效果 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}
```

**特性**：
- 固定位置，顶部吸附
- 毛玻璃背景效果
- 平滑过渡 (0.3s)

**隐藏状态**：
```css
.navbar.hidden {
  transform: translateY(-100%);     /* 向上滑出 */
}
```

**透明模式**（hero区域）：
```css
.navbar.transparent {
  background: transparent;
  box-shadow: none;
}
.navbar.transparent .nav-links a {
  color: white;
}
```

#### 导航链接
```css
.nav-links a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--color-primary);      /* 悬停变蓝 */
}
```

#### 下拉菜单动画
```css
.dropdown-menu {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
```
- **显示动画**：从上方向下显示，3秒过渡

### Hero 区域
```css
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-background {
  background: url('/hero.jpg') center/cover no-repeat;
  z-index: -2;
}

.hero-overlay {
  background: rgba(0, 0, 0, 0.45);  /* 45%黑色覆盖 */
  z-index: -1;
}

.hero-content {
  animation: fadeInUp 1s ease;       /* 内容淡入向上 */
}

.hero h1 {
  font-size: 56px;
  font-weight: 600;
}
```

### 按钮样式

#### 主按钮 (Primary)
```css
.btn.primary {
  background: var(--color-primary);  /* 蓝色背景 */
  color: white;
  padding: 14px 28px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.btn.primary:hover {
  background: #2068c9;               /* 深蓝色 */
  transform: translateY(-2px);       /* 轻微上浮 */
}
```

#### 次级按钮 (Secondary)
```css
.btn.secondary {
  border: 2px solid white;
  color: white;
  background: transparent;
}

.btn.secondary:hover {
  background: white;
  color: var(--color-primary);       /* 文字变蓝 */
}
```

**共性**：
- 14px 垂直 + 28px 水平 padding
- 6px 圆角
- 所有悬停效果均0.3s过渡

### Section 区域
```css
.section {
  padding: 140px 20px;               /* 上下140px padding */
  text-align: center;
}

.section h2 {
  font-size: 42px;
  margin-bottom: 24px;
}

.section p {
  font-size: 18px;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
}
```

**变体**：
- `.section.dark` - 深色背景，白色文字
- `.section.gray` - 浅灰背景

### 卡片网格 (Cards Grid)
```css
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

.card {
  padding: 40px 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);       /* 上浮效果 */
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);  /* 阴影加深 */
}
```

**特性**：
- 响应式网格布局
- 卡片悬停时上浮5px
- 阴影动态加深

### FAQ 部分
```css
.faq-question {
  width: 100%;
  padding: 24px 0;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: color 0.3s ease;
}

.faq-question:hover {
  color: var(--color-primary);       /* 悬停变蓝 */
}

.faq-question::after {
  content: '+';
  font-size: 24px;
  transition: transform 0.3s ease;
}

.faq-question.active::after {
  transform: rotate(45deg);          /* 打开时变为 × */
}
```

#### 答案展开动画
```css
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}

.faq-answer.active {
  max-height: 500px;
  padding-bottom: 24px;
}
```

**动画方式**：使用max-height收缩展开，3秒过渡

### Footer
```css
.footer {
  background: var(--color-dark);     /* 深色背景 */
  color: white;
  padding: 60px 20px 30px;
}

.footer-links a {
  color: white;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--color-primary);       /* 链接悬停变蓝 */
}
```

---

## 响应式设计

### 断点：768px（平板/手机）

#### 文字缩放
- Hero h1：56px → 36px
- Section h2：42px → 32px
- 整体更紧凑

#### 移动导航
```css
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 1002;
}

/* 汉堡菜单动画 */
.hamburger span:nth-child(1).active {
  transform: rotate(45deg) translateY(8px);  /* 上条旋转 */
}

.hamburger span:nth-child(2).active {
  opacity: 0;                                 /* 中条隐藏 */
}

.hamburger span:nth-child(3).active {
  transform: rotate(-45deg) translateY(-8px);  /* 下条旋转 */
}
```

#### 全屏移动菜单
```css
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transform: translateX(100%);       /* 从右边滑入 */
  transition: transform 0.3s ease;
  z-index: 1001;
}

.mobile-nav.open {
  transform: translateX(0);
}
```

#### 移动菜单下拉动画
```css
.mobile-dropdown-toggle .arrow {
  transition: transform 0.3s ease;
}

.mobile-dropdown-toggle .arrow.open {
  transform: rotate(180deg);         /* 箭头180度旋转 */
}
```

#### 其他响应式调整
- **按钮布局**：水平排列 → 竖直堆叠
- **卡片网格**：多列 → 单列
- **导航内容**：水平导航 → 隐藏，显示汉堡菜单
- **Footer链接**：水平排列 → 竖直排列

---

## 过渡效果总结

| 元素 | 属性 | 时间 | 时间函数 |
|------|-----|------|---------|
| 导航链接 | color | 0.3s | ease |
| 导航栏隐藏 | transform | 0.3s | ease |
| 下拉菜单 | all | 0.3s | ease |
| 按钮悬停 | all | 0.3s | ease |
| 卡片悬停 | transform, box-shadow | 0.3s | ease |
| FAQ问题 | color | 0.3s | ease |
| FAQ答案展开 | max-height, padding | 0.3s | ease |
| FAQ图标旋转 | transform | 0.3s | ease |
| 链接悬停 | color | 0.3s | ease |
| Scroll Reveal | all | 0.8s | ease |

---

## 动画应用最佳实践

1. **加载动画** (`fadeInUp`): 用于Hero区域和关键内容
2. **滚动动画** (`reveal`): 用于sections和卡片，增加视觉兴趣
3. **交互动画** (悬停效果): 
   - 轻微上浮 (transform: translateY(-2px 到 -5px))
   - 颜色变化 (0.3s过渡)
   - 阴影改变
4. **展开/收缩动画** (FAQ): 使用max-height实现平滑动画
5. **菜单动画**:
   - 桌面：下拉效果
   - 移动：侧滑效果

---

## 可访问性考虑

- 所有动画使用 `transition` 而非 `animation`，便于用户禁用
- 过渡时间控制在 0.3-0.8s 范围内，保证流畅但不缓慢
- 高对比度颜色：主色蓝 (#2f80ed) vs 背景
- 按钮足够大的点击区域 (14px padding)

