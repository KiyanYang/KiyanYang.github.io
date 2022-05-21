---
title: Markdown 语法 拓展篇
abbrlink: "89b5ce09"
date: 2021-08-10 15:23:41
updated: 2021-12-16 13:34:57
categories:
  - [学习之路]
  - [语法]
tags:
  - 教程
  - 语法
  - Markdown
math: true
---

在我们使用时会发现，只使用 Markdown 无法满足一些常用需求，比如文字颜色、位置、图片大小等。这时我们可以依托 Markdown 可与 HTML 混编的特性，直接在 Markdown 中使用 HTML，但是 HTML 内容丰富，对于普通用户而言只需使用其中一小部分内容，因此我在这里记录了一些常用的 HTML 语句来满足需求。

<!-- more -->

## 颜色

- **效果**:

  <span style="color: #123ABC;">

  #123ABC 颜色

  </span>

- **Markdown**

  ```html
  <span style="color: #123ABC;"> #123ABC 颜色 </span>
  ```

## 大小

- **效果**:

  <span  style="font-size:0.85em;">

  0.85em 文字大小

  </span>

- **Markdown**

  ```html
  <span style="font-size:0.85em;"> 0.85em 文字大小 </span>
  ```

## 位置

- **效果**:

  <div align=center>

  居中

  </div>

- **Markdown**

  ```html
  <div align="center">居中</div>
  ```

  位置可选值：`left | center | right`。

## 折叠

- **效果**:

  <details>
    <summary>点击查看效果</summary>

  | 左对齐 | 居中对齐 |                              右对齐 |
  | :----- | :------: | ----------------------------------: |
  | _A1_   |   `B1`   |                              ~~C1~~ |
  | A2     |  **B2**  | [链接](https://KiyanYang.github.io) |

  </details>

- **Markdown**

  ```md
  <details>
    <summary>点击查看效果</summary>

  | 左对齐 | 居中对齐 |                              右对齐 |
  | :----- | :------: | ----------------------------------: |
  | _A1_   |   `B1`   |                              ~~C1~~ |
  | A2     |  **B2**  | [链接](https://KiyanYang.github.io) |

  </details>
  ```

  `summary` 填写显示名称。

- **注意**

  在内部使用 Markdown 语句时要在前后留有空行，否则可能会当作普通文本处理，而且某些渲染器可能不支持在 html 内写 Markdown 文本，不支持时可以直接使用 html。

## 图片

- **效果**:

  <img src="https://cdn.jsdelivr.net/gh/KiyanYang/Source/img/blog/common/pexels-photo-7175579.webp" alt="图片-1" width = "100" height = "100"></img>

  <img src="https://cdn.jsdelivr.net/gh/KiyanYang/Source/img/blog/common/pexels-photo-7175579.webp" alt="图片-2" width = "100"></img>

  <img src="https://cdn.jsdelivr.net/gh/KiyanYang/Source/img/blog/common/pexels-photo-7175579.webp" alt="图片-3" width = 20% height = 20%></img>

- **Markdown**

  ```html
  <img src="https://cdn.jsdelivr.net/gh/KiyanYang/Source/img/blog/common/pexels-photo-7175579.webp" alt="图片-1" width = "100" height = "100"></img>

  <img src="https://cdn.jsdelivr.net/gh/KiyanYang/Source/img/blog/common/pexels-photo-7175579.webp" alt="图片-2" width = "100"></img>

  <img src="https://cdn.jsdelivr.net/gh/KiyanYang/Source/img/blog/common/pexels-photo-7175579.webp" alt="图片-3" width = 20% height = 20%></img>
  ```

  `width` 和 `height` 可全写、或只写 1 个、或全部不写，其值可为数字或百分比。

  备注：图片居中显示是博客的效果，一般情况下是靠左显示，不过可以在其外面包裹[位置](#位置)，来调整图片的水平位置。

## 表格

> 由于博客的主题样式，表格的边框、背景等元素可能与你使用下列代码时的效果不同。

### 普通表格

- **效果**:

  <table>
    <tr>
      <td>11</td>
      <td>12</td>
      <td>13</td>
    </tr>
    <tr>
      <td>21</td>
      <td>22</td>
      <td>23</td>
    </tr>
    <tr>
      <td>31</td>
      <td>32</td>
      <td>33</td>
    </tr>
  </table>

- **Markdown**

  ```html
  <table>
    <tr>
      <td>11</td>
      <td>12</td>
      <td>13</td>
    </tr>
    <tr>
      <td>21</td>
      <td>22</td>
      <td>23</td>
    </tr>
    <tr>
      <td>31</td>
      <td>32</td>
      <td>33</td>
    </tr>
  </table>
  ```

### 纵向合并单元格

- **效果**:

  <table>
    <tr>
      <td>11</td>
      <td>12</td>
      <td>13</td>
    </tr>
    <tr>
      <th rowspan="2">21</th>
      <td>22</td>
      <td>23</td>
    </tr>
    <tr>
      <td>32</td>
      <td>33</td>
    </tr>
  </table>

- **Markdown**

  ```html
  <table>
    <tr>
      <td>11</td>
      <td>12</td>
      <td>13</td>
    </tr>
    <tr>
      <th rowspan="2">21</th>
      <td>22</td>
      <td>23</td>
    </tr>
    <tr>
      <td>32</td>
      <td>33</td>
    </tr>
  </table>
  ```

### 横向合并单元格

- **效果**:

  <table>
    <tr>
      <td>11</td>
      <td>12</td>
      <td>13</td>
    </tr>
    <tr>
      <th colspan="2">21</th>
      <td>23</td>
    </tr>
    <tr>
      <td>31</td>
      <td>32</td>
      <td>33</td>
    </tr>
  </table>

- **Markdown**

  ```html
  <table>
    <tr>
      <td>11</td>
      <td>12</td>
      <td>13</td>
    </tr>
    <tr>
      <th colspan="2">21</th>
      <td>23</td>
    </tr>
    <tr>
      <td>31</td>
      <td>32</td>
      <td>33</td>
    </tr>
  </table>
  ```
