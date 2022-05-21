---
title: Hexo-Fluid 博客美化和修改
abbrlink: "f92be1eb"
date: 2021-12-14 14:45:22
updated: 2022-01-08 14:42:32
categories:
  - [学习之路]
  - [教程]
tags:
  - 教程
  - Hexo
  - Fluid
  - 美化
---

基于 Hexo-Theme-Fluid 博客的简单美化和修改，美化或修改效果参见本博客自身。

<!-- more -->

## 版本

- Hexo - 6.0.0
- Fluid - 1.8.14

## CSS

下面所描述的代码使用 `stylus` 格式，自行在 `source/css` 目录下新建 `.styl` 文件，将代码复制进来，并在主题配置的 `custom_css` 添加文件路径（不带文件扩展名）。

比如新建了 `source/css/test.styl` 文件，那就要在主题配置的 `custom_css` 添加 `/css/test`：

```yaml
custom_css:
  - /css/test
```

### 滚动条

```stylus
::-webkit-scrollbar {
  width: 10px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: #a6a6a6;
  border-radius: 1rem;
  min-height: 60px;

  &:hover {
    background-color: #757575;
  }

  &:active {
    background-color: #424242;
  }
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}

[data-user-color-scheme='dark'] {
  ::-webkit-scrollbar-thumb {
    background-color: #687582;

    &:hover {
      background-color: #9da8b3;
    }

    &:active {
      background-color: #c5d0db;
    }
  }
}
```

### 代码块的复制按钮

```stylus
.copy-btn {
  font-size: 1rem;

  > i {
    font-size: 0.875rem;
    font-weight: bold;
  }
}

.copy-btn-dark {
  color: darkslategrey;
}
```

### 代码块的首列固定

```stylus
figure.highlight {
    td:first-child {
        position: sticky;
        left: 0;
        z-index: 1;
    }
}
```

### 圆角

包括对如下内容设置圆角：

- 分类和归档页面内的文章列表
- 友链页面的卡片
- 菜单栏的按钮
- 页面背景板
- 返回顶部按钮

```stylus
// 分类页
.category {
  .row {
    border-radius: 1rem;
  }

  .category-item {
    border-radius: 1rem;
  }

  .category-post-list {
    border-radius: 1rem;
  }
}

// 归档页
.list-group {
  border-radius: 1rem;
}

// 分类和归档页共同
.list-group-item {
  border-radius: 1rem;
}

// 友链页
.links .card-body {
  border-radius: 1rem;
}

// 菜单栏
.navbar {
  .nav-item .nav-link {
    border-radius: 0.5rem;
  }

  .dropdown-menu {
    border-radius: 0.5rem;
  }

  .dropdown-item {
    border-radius: 0.25rem;
  }
}

// 页面背景板
#board {
  border-radius: 1rem;
}

// 返回顶部按钮
#scroll-top-button {
  border-radius: 0.5rem;
}
```

### Waline 评论

```stylus
#waline {
  --waline-avatar-size: 4rem;
  --waline-badge-font-size: 0.75em;

  // 调整输入框左侧标签的大小，位置，文字
  label {
    min-width: 28px;
    font-size: 0.875em;
    font-weight: bold;
  }

  // 调整输入框文字大小
  input {
    font-size: 0.875em;
  }

  .v[data-class='v'] {
    .vcard {
      // 调整名称后面的小盾牌的位置
      .vhead .vnick svg {
        bottom: 0.125em;
      }

      // 调整博主名称标记的大小
      .vhead .vbadge {
        line-height: normal;
        padding: 0.1em 0.3em;
      }

      // 调整 UA 标记的圆角和间距
      .vmeta > span {
        border-radius: 0.5em;
        margin-right: 1em;
      }
    }

    .vcontent {
      // 调整表情位置
      .vemoji {
        vertical-align: top;
      }
    }

    .vinfo {
      // 将右下角的“计数，登录，提交”的伸缩属性设为自动，减少计数的换行
      flex: auto;
    }
  }
}
```

### 目录标题前的光标

**注意：此内容已过时。Hexo-Theme-Fluid 主题自 v1.8.14 起添加了此功能。**

关于目录标题前的光标的详细描述可以参见“[Hexo-Fluid 在目录的标题前增加光标](/posts/277e1260/)”。

```stylus
// 光标依赖位置
.toc-body > ol {
  position: absolute;
}

// 当前标题前的光标
.toc-list-item {
  // 初始状态
  &::before {
    content: '';
    position: absolute;
    left: 0.25rem;
    height: 0.25rem;
    margin: 0.625rem 0;
    width: 0.25rem;
    border-radius: 0.125rem;
    background: black;
    visibility: hidden;
    transition: height 0.2s ease-in-out, margin 0.2s ease-in-out, visibility 0.2s ease-in-out;
  }

  // 激活状态
  &.is-active-li::before {
    height: 1rem;
    margin: 0.25rem 0;
    visibility: visible;
  }
}

[data-user-color-scheme='dark'] {
  .tocbot-active-link {
    color: orange;
  }

  .toc-list-item {
    &::before {
      background: orange;
      transition: background 0.2s ease-in-out;
    }
  }
}
```

## JS

### 网站运行时间

在主题配置中的 `footer: content` 添加：

```yaml
footer:
  # 前三行是 Fluid 原有的页脚内容，后面的是新增的内容
  content: |
    <a href="https://hexo.io" target="_blank" rel="nofollow noopener"><span>Hexo</span></a>
    <i class="iconfont icon-love"></i>
    <a href="https://github.com/fluid-dev/hexo-theme-fluid" target="_blank" rel="nofollow noopener"><span>Fluid</span></a>
    <div style="font-size: 0.85rem">
      <span id="website-duration">载入网站运行时间...</span>
      <script src="/js/duration.js"></script>
    </div>
```

duration.js 包含的是功能代码，在博客目录下创建 `source/js/duration.js`，内容如下：

```js
!(function () {
  // 前面补零
  function prefixInteger(num, n) {
    return (Array(n).join(0) + num).slice(-n);
  }

  // 计时起始时间，仿照格式自行修改
  var start = Date.parse("2021-07-10T16:03:05");

  function update() {
    var now = Date.now() + 250;
    var interval = (now - start) / 1000;
    var days = Math.floor(interval / 60 / 60 / 24);
    var hours = Math.floor((interval / 60 / 60) % 24);
    var minutes = Math.floor((interval / 60) % 60);
    var seconds = Math.floor(interval % 60);

    hours = prefixInteger(hours, 2);
    minutes = prefixInteger(minutes, 2);
    seconds = prefixInteger(seconds, 2);

    document.getElementById(
      "website-duration"
    ).innerHTML = `本站已运行 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒`;
  }

  update();
  setInterval(update, 250);
})();
```

## 参考

- Hexo Theme Fluid
  - [Fluid 页脚增加网站运行时长](https://hexo.fluid-dev.com/posts/fluid-footer-custom)
