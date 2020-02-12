# Travis (https://travis-ci.org/) 接入流程

## 首次接入流程

1. 打开 https://travis-ci.org/XFETeam/libs/settings, 当前页面为一个配置页，我们可以在该页配置环境变量 【NPM_EMAIL，NPM_TOKEN】
2. 在 `Environment Variables` 子目录中配置 <br />
    2.1. NPM_EMAIL 529360897@qq.com (key value 形式配置 npm 部署邮箱) <br />
    2.2. NPM_TOKEN 8bc2f282-xxxxxxxx-12feb0332bce, (https://www.npmjs.com/settings/jf3096/tokens/ 其中 jf3096 为企业或个人 npm 账号) <br />
    2.3. GH_TOKEN 8069xxxxxxxx11d6 (https://github.com/settings/tokens 用于 gh-pages 部署)

## 部署需求

1. package.json version 版本更新
2. 确保 package.json script 中正确配置好 build， 即能够使用 npm run build
3. 最终提交时确保 commit message 以 `release:` 开头, 只有以 release: 开头才会真正出发 travis ci

## 作者
She Ailun
