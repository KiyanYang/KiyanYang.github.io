---
title: VS Code 中关于 Hexo 的任务（Tasks）
abbrlink: "5a271947"
date: 2021-12-14 13:50:25
updated: 2021-12-18 22:15:20
categories:
  - [学习之路]
tags:
  - VS Code
  - Hexo
---

VS Code 中关于 Hexo 的任务（Tasks）。

<!-- more -->

> **本文章长期更新。**

## `tasks.json`

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "清理、生成并预览",
      "dependsOrder": "sequence",
      "dependsOn": ["清理", "生成", "预览"],
      "problemMatcher": [],
      "group": {
        "kind": "build",
        "isDefault": true
      }
    },
    {
      "type": "shell",
      "label": "清理",
      "command": "hexo clean",
      "presentation": {
        "panel": "dedicated",
        "clear": true
      },
      "problemMatcher": []
    },
    {
      "type": "shell",
      "label": "生成",
      "command": "hexo generate",
      "presentation": {
        "panel": "dedicated",
        "clear": true
      },
      "problemMatcher": []
    },
    {
      "type": "shell",
      "label": "预览",
      "command": "hexo server",
      "presentation": {
        "panel": "dedicated",
        "clear": true
      },
      "problemMatcher": []
    },
    {
      "type": "shell",
      "label": "新建文章",
      "command": "hexo",
      "args": ["new", "post", "${input:postName}"],
      "presentation": {
        "panel": "dedicated",
        "clear": true
      },
      "problemMatcher": []
    },
    {
      "type": "shell",
      "label": "新建草稿",
      "command": "hexo",
      "args": ["new", "draft", "${input:postName}"],
      "presentation": {
        "panel": "dedicated",
        "clear": true
      },
      "problemMatcher": []
    }
  ],
  "inputs": [
    {
      "type": "promptString",
      "id": "postName",
      "description": "文章名称"
    }
  ]
}
```

## 参考

- VS Code docs
  - [Integrate with External Tools via Tasks](https://code.visualstudio.com/docs/editor/tasks)
  - [Variables Reference](https://code.visualstudio.com/docs/editor/variables-reference)
- Hexo docs
  - [Commands](https://hexo.io/docs/commands)
