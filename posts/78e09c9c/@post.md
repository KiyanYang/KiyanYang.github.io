---
title: Markdown 语法 基本篇
abbrlink: "78e09c9c"
date: 2021-07-11 13:15:32
updated: 2021-12-10 14:19:38
categories:
  - [学习之路]
  - [语法]
tags:
  - 教程
  - 语法
  - Markdown
math: true
---

Markdown 是一种轻量级标记语言，排版语法简洁，让人们更多地关注内容本身而非排版。它使用易读易写的纯文本格式编写文档，可与 HTML 混编。因简洁、高效、易读、易写，Markdown 被大量使用。

<!--more-->

## 文本元素

- **效果**

  **加粗**
  _斜体_
  ~~删除线~~
  **_加粗斜体_**
  ~~**加粗删除线**~~
  ~~_斜体删除线_~~
  ~~**_加粗斜体删除线_**~~

- **Markdown**

  ```md_txt
  **加粗**

  _斜体_

  ~~删除线~~

  **_加粗斜体_**

  ~~**加粗删除线**~~

  ~~_斜体删除线_~~

  ~~**_加粗斜体删除线_**~~
  ```

## 区块元素

### 段落和换行

一个 Markdown 段落是由一个或多个连续的文本行组成，它的前后要有一个以上的空行。普通段落不该用空格或制表符来缩进。

**提示**：空行的定义是显示上看起来像是空的，便会被视为空行。比方说，若某一行只包含空格或制表符，则该行也会被视为空行。

### 标题

Markdown 支持两种标题的语法，类 Setext 和类 atx 形式。

类 Setext 形式是用底线的形式，利用 =（最高阶标题）和 -（第二阶标题），例如：

```md_txt
This is an H1
=============

This is an H2
-------------
```

任何数量的 = 和 - 都可以有效果。

类 Atx 形式则是在行首插入 1 到 6 个 # ，对应到标题 1 到 6 阶，例如：

```md_txt
# 这是H1

## 这是H2

### 这是H3

#### 这是H4

##### 这是H5

###### 这是H6
```

你可以选择性地「闭合」类 atx 样式的标题，即在行尾加上 #，而行尾的 # 数量也不用和开头一样（行首的 # 数量决定标题的阶数）：

```md_txt
# 这是 H1 #

## 这是 H2 ##

### 这是 H3 ######
```

## 区块引用

Markdown 标记区块引用是使用 `>` 的引用方式。在 Markdown 文件中建立一个区块引用，那会看起来像是你自己先断好行，然后在每行的最前面加上 `>` ：

- **效果**

  > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
  > consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
  > Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
  >
  > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
  > id sem consectetuer libero luctus adipiscing.

- **Markdown**

  ```md_txt
  > This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
  > consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
  > Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
  >
  > Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
  > id sem consectetuer libero luctus adipiscing.
  ```

区块引用可以嵌套，只要根据层次加上不同数量的 `>` ：

- **效果**

  > This is the first level of quoting.
  >
  > > This is nested blockquote.
  >
  > Back to the first level.

- **Markdown**

  ```md_txt
  > This is the first level of quoting.
  >
  > > This is nested blockquote.
  >
  > Back to the first level.
  ```

引用的区块内也可以使用其他的 Markdown 语法，包括列表、代码区块等：

- **效果**

  > 1. 这是第一个列表项。
  > 2. 这是第二个列表项。
  >
  > 给出一个代码的例子：
  >
  > ```python
  >     return "Welcome to KiyanYang's Blog"
  > ```

- **Markdown**

  ````md_txt
  > 1. 这是第一个列表项。
  > 2. 这是第二个列表项。
  >
  > 给出一个代码的例子：
  >
  > ```python
  >     return "Welcome to KiyanYang's Blog"
  > ```
  ````

## 列表

Markdown 支持有序列表和无序列表。

列表项目标记通常是放在最左边，但是也可以缩进，最多 3 个空格，项目标记后面则一定要接着至少一个空格或制表符。

### 无序列表

无序列表使用星号、加号或减号作为列表标记：

- **效果**

  - Red
  - Green
  - Blue

- **Markdown**

  ```md_txt
  * Red
  * Green
  * Blue

  + Red
  + Green
  + Blue

  - Red
  - Green
  - Blue
  ```

- **注意**

  星号 `*`、加号 `+` 或减号 `-` 仅起到标记这是无序列表的作用，即列表标记上使用不同的符号并不会影响输出的 HTML 结果。例如无序列表也可以这样写：

  ```md_txt
  * Red
  + Green
  - Blue
  ```

### 有序列表

有序列表则使用数字接着一个英文句点：

- **效果**

  1\. Bird
  2\. McHale
  3\. Parish

- **Markdown**

  ```md_txt
  1. Bird
  2. McHale
  3. Parish
  ```

- **注意**

  数字仅起到标记这是有序列表的作用，即列表标记上使用的数字并不会影响输出的 HTML 结果。例如有序列表也可以这样写：

  ```md_txt
  1. Bird
  1. McHale
  1. Parish
  ```

  或者：

  ```md_txt
  2. Bird
  3. McHale
  1. Parish
  ```

  虽然可以得到完全相同的 HTML 输出，但是建议第一个项目最好还是从 `1. `开始，因为 Markdown（可能）支持有序列表的 start 属性。

### 列表段落

列表项目可以包含多个段落，每个项目下的段落都必须缩进 4 个空格或是 1 个制表符：

- **效果**

  - 金樽清酒斗十千，玉盘珍羞直万钱。
    停杯投箸不能食，拔剑四顾心茫然。
    欲渡黄河冰塞川，将登太行雪满山。
    闲来垂钓碧溪上，忽复乘舟梦日边。
    行路难，行路难，多歧路，今安在？
    长风破浪会有时，直挂云帆济沧海。

  - 莫听穿林打叶声，何妨吟啸且徐行。
    竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。

    料峭春风吹酒醒，微冷，山头斜照却相迎。
    回首向来萧瑟处，归去，也无风雨也无晴。

- **Markdown**:

  ```md_txt
  - 金樽清酒斗十千，玉盘珍羞直万钱。
    停杯投箸不能食，拔剑四顾心茫然。
    欲渡黄河冰塞川，将登太行雪满山。
    闲来垂钓碧溪上，忽复乘舟梦日边。
    行路难，行路难，多歧路，今安在？
    长风破浪会有时，直挂云帆济沧海。

  - 莫听穿林打叶声，何妨吟啸且徐行。
    竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。

    料峭春风吹酒醒，微冷，山头斜照却相迎。
    回首向来萧瑟处，归去，也无风雨也无晴。
  ```

- **注意**

  对于某些渲染器来说，项目列表内以及项目列表之间如果需要换行，则和普通文本元素一样需要使用空行。

### 列表嵌套

项目内可以使用其他引用元素，例如：

- **效果**

  - A list item with a blockquote:

    > This is a blockquote
    > inside a list item.
    >
    > > 各种效果都可以实现

  * 简单来说，项目列表内的区域等价于缩进之后的普通区域
    ```python
    def main():
        pass
    ```

- **Markdown**

  ````md_txt
  - A list item with a blockquote:

    > This is a blockquote
    > inside a list item.
    >
    > > 各种效果都可以实现

  * 简单来说，项目列表内的区域等价于缩进之后的普通区域
    ```python
    def main():
        pass
    ```
  ````

### 转义

如果想表达

2004\. 雅典奥运会

2008\. 北京奥运会

2012\. 伦敦奥运会

但是却得到如下项目列表效果：

1. 雅典奥运会

2. 北京奥运会

3. 伦敦奥运会

解决方案：在 `.` 前加上 `\` ，即：

```md_txt
2004\. 雅典奥运会

2008\. 北京奥运会

2012\. 伦敦奥运会
```

## 代码区块

### 代码区块的基础用法

要在 Markdown 中建立代码区块很简单，只要简单地缩进 4 个空格或是 1 个制表符就可以，例如：

- **效果**

  这是一个普通段落：

      这是一个代码区块。

- **Markdown**

  ```md_txt
  这是一个普通段落：

      这是一个代码区块。
  ```

一个代码区块会一直持续到没有缩进的那一行（或是文件结尾）。

也可以使用 `` ` `` 或 ` ``` ` 来实现行内代码，这种方法可以标识代码语言，例如：

- **效果**

  这是`行内代码 code`，这是多行代码：

  ```python
  def main():
      pass
  ```

- **Markdown**

  ````md_txt
  这是`行内代码 code`，这是多行代码：

  ```python
  def main():
      pass
  ```
  ````

### 代码区块的进阶用法

要在多行代码里嵌套多行代码，可使用更大的围栏包裹代码，如用 4 个反引号 `` ` ``，例如写出上面内容的 Markdown 代码为

`````md_txt
````
这是`行内代码 code`，这是多行代码：

```python
def main():
    pass
```
````
`````

当然为了让此部分以代码块的形式显示，我使用了 5 个反引号来包裹此部分的代码。

行内代码的开头或结尾包含反引号 `` ` `` 时，则开头和结尾必须包含空格。

- **效果**

  使用 `` ` `` 或 ` ``` ` 来实现行内代码

- **Markdown**

  ````md_txt
  使用 `` ` `` 或 ` ``` ` 来实现行内代码
  ````

**反引号的使用规则**

对于区块代码，只需反引号做到前后闭合且反引号 `` ` `` 的数量和代码内反引号 `` ` `` 的数量不一致即可。例如可以使用 3 个反引号包围 4 个反引号：

- **效果**

  `````md
  ````python
  def main(...):
      pass
  ````
  `````

- **Markdown**

  `````md_txt
  ```
  ````python
  def main(...):
      pass
  ````
  ```
  `````

- **评价**

  虽然可以这样使用，但是不建议在多行代码中使用这种用法，一般只在行内代码中这样使用。

## 分隔线

你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。例如：

```md_txt
***
* * *
*****
- - -
-----
```

## 链接

Markdown 支持两种形式的链接语法： 行内式和参考式两种形式。

不管是哪一种，链接文字都是用 `[方括号]` 来标记。

要建立一个行内式的链接，只要在方块括号后面紧接着圆括号并插入网址链接即可，如果你还想要加上链接的`标题`，只要在网址后面，用双引号把`标题`包起来即可，例如：

- **效果**

  这是行内式的 [例子](http://example.com/ "标题")。

  这是行内式的 **[加粗例子](http://example.com/ "标题")**.

  [这个链接](http://example.net/) 没有`标题`文本段。

- **Markdown**

  ```md_txt
  这是行内式的 [例子](http://example.com/ "标题")。

  这是行内式的 **[加粗例子](http://example.com/ "标题")**.

  [这个链接](http://example.net/) 没有`标题`文本段。
  ```

  如果你是要链接到同样主机的资源，你可以使用相对路径：

  ```md_txt
  See my [About](/about/) page for details.
  ```

参考式的链接是在链接文字的括号后面再接上另一个方括号，而在第二个方括号里面要填入用以辨识链接的标记：

```md_txt
This is [an example][id] reference-style link.
```

接着，在文件的任意处，你可以把这个标记的链接内容定义出来：

```md_txt
[id]: http://example.com/  "可选标题"
```

链接内容定义的形式为：

- 方括号（前面可以选择性地加上至多三个空格来缩进），里面输入链接文字
- 接着一个冒号
- 接着一个以上的空格或制表符
- 接着链接的网址
- 选择性地接着`标题`内容，可以用单引号、双引号或是括弧包着

下面这三种链接的定义都是相同：

```md_txt
[foo]: http://example.com/  "可选标题"
[foo]: http://example.com/  '可选标题'
[foo]: http://example.com/  (可选标题)
```

注意：有些渲染器可能会忽略单引号包起来的链接标题。

链接网址也可以用方括号包起来：

```md_txt
[id]: [http://example.com] "可选标题"
```

你也可以把 title 属性放到下一行，也可以加一些缩进，若网址太长的话，这样会比较好看：

```md_txt
[id]: http://example.com/longish/path/to/resource/here
    "可选标题"
```

网址定义只有在产生链接的时候用到，并不会直接出现在文件之中。

链接辨别标签可以有字母、数字、空白和标点符号，但是并不区分大小写，因此下面两个链接是一样的：

```md_txt
[link text][a]
[link text][A]
```

隐式链接标记功能让你可以省略指定链接标记，这种情形下，链接标记会视为等同于链接文字，要用隐式链接标记只要在链接文字后面加上一个空的方括号，如果你要让 "Google" 链接到 google.com，你可以简化成：

```md_txt
[Google][]
```

然后定义链接内容：

```md_txt
[Google]: http://google.com/
```

由于链接文字可能包含空白，所以这种简化型的标记内也许包含多个单词：

```md_txt
Visit [Python documentation][] for more information.

  [Python documentation]: https://docs.python.org/
```

链接的定义可以放在文件中的任何一个地方，一般直接放在链接出现段落的后面，也可以把它放在文件最后面，就像是注解一样。

下面是两个参考式链接的例子：

使用辨识链接的标记：

```md_txt
I get 10 times more traffic from **[Google][1]** than from
_[Yahoo][2]_ or [MSN][3].

  [1]: http://google.com/        "Google"
  [2]: http://search.yahoo.com/  "Yahoo Search"
  [3]: http://search.msn.com/    "MSN Search"
```

使用链接名称的方式：

```md_txt
I get 10 times more traffic from [Google][] than from
[Yahoo][] or [MSN][].

  [google]: http://google.com/        "Google"
  [yahoo]:  http://search.yahoo.com/  "Yahoo Search"
  [msn]:    http://search.msn.com/    "MSN Search"
```

## 公式

- **效果**

  行内公式：$m\times n$

  行内公式：$C_{m\times k}=A_{m\times n}\cdot B_{n\times k}$

  块级公式：
  $$C_{m\times k}=A_{m\times n}\cdot B_{n\times k}$$

  块级公式：

  $$
  C_{m\times k}=A_{m\times n}\cdot B_{n\times k}
  $$

- **Markdown**

  ```md_txt
  行内公式：$m\times n$

  行内公式：$C_{m\times k}=A_{m\times n}\cdot B_{n\times k}$

  块级公式：
  $$C_{m\times k}=A_{m\times n}\cdot B_{n\times k}$$

  块级公式：

  $$
  C_{m\times k}=A_{m\times n}\cdot B_{n\times k}
  $$
  ```

## 图片

Markdown 使用一种和链接很相似的语法来标记图片，同样也允许两种样式： 行内式和参考式。

- **效果**

  ![图片—1](https://cdn.jsdelivr.net/gh/KiyanYang/Source/img/blog/common/pexels-photo-7175579.webp)
  ![图片-2](https://cdn.jsdelivr.net/gh/KiyanYang/Source/img/blog/common/pexels-photo-7175579.webp "自定义标题")

- **Markdown**

  ```md_txt
  ![图片-1](https://cdn.jsdelivr.net/gh/KiyanYang/Source/img/blog/common/pexels-photo-7175579.webp)
  ![图片-2](https://cdn.jsdelivr.net/gh/KiyanYang/Source/img/blog/common/pexels-photo-7175579.webp "自定义标题")
  ```

详细叙述如下：

- 一个惊叹号 !
- 接着一个方括号，里面放上图片的替代文字
- 接着一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上 选择性的`标题`文字。

参考式的图片语法：

```md_txt
![Alt text][id]

  [id]: url/to/image  "Optional title attribute"
```

到目前为止， Markdown 还没有办法指定图片的宽高，如果你需要的话，你可以使用普通的`<img>`标签，参见[拓展](#拓展)。

## 表格

- **效果**

  | 左对齐 | 居中对齐 | 右对齐 |
  | :----- | :------: | -----: |
  | A1     |    B1    |     C1 |
  | A2     |    B2    |     C2 |

- **Markdown**

  ```md_txt
  | 左对齐 |  居中对齐  | 右对齐 |
  | :----- | :------: | -----: |
  | A1     |    B1    |     C1 |
  | A2     |    B2    |     C2 |
  ```

  表格只需要拥有形如 `| 内容 |` 或 `| :--|` 等结构即可，不必追求 `|` 对齐。例如下面的 Markdown 语句拥有和上面相同的效果：

  ```md_txt
  |  左对齐|居中对齐  |右对齐 |
  |:-|:-:|-:|
  |    A1| B1|C1 |
  |A2|     B2|     C2 |
  ```

  此外表格内的内容也支持文字效果，图片等其他效果，可以参见[拓展篇-折叠](/posts/89b5ce09/#折叠)。

## 反斜杠

Markdown 可以利用反斜杠来插入一些在语法中有其它意义的符号，例如：

- **效果**:

  \*\*加粗\*\*

- **Markdown**

  ```md_txt
  \*\*加粗\*\*
  ```

## 自动链接

Markdown 支持以比较简短的自动链接形式来处理网址和电子邮件信箱，只要是用尖括号包起来， Markdown 就会自动把它转成链接。一般网址的链接文字就和链接地址一样，例如：

- **效果**:

  <address@example.com>

- **Markdown**

  ```md_txt
  <address@example.com>
  ```

## 拓展

本片为基础篇，也就是讲解 Markdown 自身的语法。此外有一些常用的功能，比如文字颜色、位置、图片大小等，这些只使用 Markdown 自身的语法无法实现。这时我们可以依托 Markdown 可与 HTML 混编的特性，直接在 Markdown 中使用 HTML，但是 HTML 内容丰富，对于普通用户而言只需使用其中一小部分内容，因此我在“[Markdown 语法 拓展篇](/posts/89b5ce09/)”中记录了一些常用的 HTML 语句来满足需求。

## 参考

- [JOHN GRUBER](https://daringfireball.net/projects/markdown/)
- [Markdown 语法说明](https://markdown.com.cn/basic-syntax/)
