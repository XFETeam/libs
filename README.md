# @xfe-team/universal-auth

> 西山居多端通用登录

## 安裝

```bash
  yarn add @xfe-team/universal-auth
```

## 基本用法
```javascript
import {getAuthInfoByAppEnv, getDailyAuth, getQQWeixinAuth, getXoyoAuth, GeneralTools} from '@xfe-team/universal-auth'

/**
 * 自动根据App环境进行登录
 * @param daily daily端
 * @param limitOnlyHasJx3RoleAccessInDaily 是否限制只有存在剑网3角色的用户登录
 * @param weixinQQ 微信QQ端
 * @param xoyo 使用金山通行证登录
 * @param debug 是否进行登录信息提示
 * @param disable 禁止登录模块
 * @returns {Promise<GlobalAuthData>}
 * @type {GlobalAuthData}
 */
const data = await getAuthInfoByAppEnv({});
if (data.THIRD_PARTY_AUTH) {
  this.setState({
    userName: data.THIRD_PARTY_AUTH.data.uid || data.THIRD_PARTY_AUTH.data.account
  });
} 
else {
  this.setState({
    userName: data.XOYO_AUTH.data.account
  });
}

```

## API

```javascript
/**
 * 获取XOYO登录信息
 */
getXoyoAuth();

/**
 * 获取QQ微信端登录信息
 */
getQQWeixinAuth();

/**
 * 获取daily端登录信息
 * @param token daily token值
 * @param limitGuest 限制登录数: 默认为1
 * @param limitOnlyHasJx3RoleAccessInDaily 是否限制只有剑网3角色的账号的用户才能登录
 */
getDailyAuth();

/**
 * 自动根据App环境进行登录
 * @param daily daily端
 * @param limitOnlyHasJx3RoleAccessInDaily 是否限制只有存在剑网3角色的用户登录
 * @param weixinQQ 微信QQ端
 * @param xoyo 使用金山通行证登录
 * @param debug 是否进行登录信息提示
 * @param disable 禁止登录模块
 * @returns {Promise<GlobalAuthData>}
 * @type {GlobalAuthData}
 */
getAuthInfoByAppEnv({});

/**
 * 调用XOYO登录
 * 微信QQ, daily等第三方授权登录信息不需要额外的登录, 则方法提供的是xoyo登录功能
 */
GeneralTools.login()


/**
 * xoyo退出
 * @param shouldRefresh 是否刷新页面
 * @param onSuccess 退出成功的回调
 * @param onFail 退出失败的回调
 * @returns {Promise<*>}
 */
GeneralTools.logout();

```

## ChangeLog
- Add - when you introduce or expose a new feature, property, class, UI, etc.
- Remove - when you fully removed something and it can no longer be used.
- Deprecate - when you plan on removing something, but it is still accessible.
- Fix an issue with/where… - when you fixed a bug.
- Improve - when you made an existing thing better.
- Update - when you refresh something, but don’t necessarily make it better.
- Upgrade - when upgrading the version of a dependency.
- Release - publish package.
- Initial/Beta release of … - when releasing a brand-new feature.

## 0.0.2 (2020-11-02)
- Fix: 修复 check-is-master-env 中补充输入的 "isMaster" 参数导致页面正常调用时 "isMaster" undefined报错的问题

## 0.0.1 (2020-10-28)
- init: init commit. 整合 mobile-react-v4.1 版本中的三端登录的功能模块.


## 作者
李一鸿
