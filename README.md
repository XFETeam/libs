# libs

> library 仓库，一个分支作为一个 library 存在。

## 使用流程

1. 通过 template 分支 checkout 并进行如组件等工具开发
2. 完成 checkout 后阅读 [TRAVIS.md](./TRAVIS.md) 文件，这里会讲述目前持续集成的基本部署流程
3. 开始进行开发，完成开发后阅读 `CHANGELOG_FORMAT.md`
4. 使用 webstorm 等工具全局替换如 `<%= projectName %>` 等字段
5. 最终决定通过 npm 上线时， 更新 `package.json` 中 `version` 版本， 并以 `release:` 作为 `commit message` 进行提交 

## TRAVIS CI 地址

https://travis-ci.com/XFETeam/libs

## 作者
She Ailun
