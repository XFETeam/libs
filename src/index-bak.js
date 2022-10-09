/* eslint-disable */
import React from 'react';
import Script from '../../utils/script';
import InvalidRedirect from './invalid-redierct';

// noinspection SpellCheckingInspection
const XoyoAuth = ({ xoyo, weixinQQ, daily }) => {
  if (xoyo) {
    return <Script>{require('!!raw-loader!./xoyo')}</Script>;
  } else {
    return <InvalidRedirect weixinQQ={weixinQQ} daily={daily} />;
  }
};

const DailyAuth = ({ daily, limitOnlyHasJx3RoleAccessInDaily }) => {
  if (daily) {
    return (
      <React.Fragment>
        {limitOnlyHasJx3RoleAccessInDaily && <script>window.LIMIT_ONLY_HAS_JX3_ROLE_ACCESS_IN_DAILY = true;</script>}
        <Script>{require('!!raw-loader!./jianghudaily/auth-with-token')}</Script>
        <Script>{require('!!raw-loader!./jianghudaily/get-account-info')}</Script>
      </React.Fragment>
    );
  }
  return null;
};

// noinspection SpellCheckingInspection
const WeixinQQAuth = ({ weixinQQ }) => {
  if (weixinQQ) {
    return (
      <React.Fragment>
        <Script>{require('!!raw-loader!./qq-weixin-auth/get-account-info')}</Script>
        <Script>{require('!!raw-loader!./qq-weixin-auth/get-auth-url')}</Script>
      </React.Fragment>
    );
  }
  return null;
};

// noinspection SpellCheckingInspection
/**
 * 通用授权
 * @param {boolean} [weixinQQ] - 启用微信 qq 登录
 * @param {boolean} [xoyo] - 启用 xoyo 登录
 * @param {boolean} [daily] - 启用指尖江湖推栏(原名: 江湖daily) 登录
 * @param {boolean} [limitOnlyHasJx3RoleAccessInDaily] - 是否限制只有 jx3 角色才可以访问进入推栏, 如果设置为 true, 内部将判断是否有 jx3 角色, 如果没有角色将跳转至失败页面
 * @param {boolean} [debug] - 是否启用调试模式, 启用调试模式后授权完毕后会弹窗提示 alert 详细信息
 * @param {boolean} [disable] - 是否禁用
 * @returns {*} 进行授权后 window.THIRD_PARTY_AUTH 将被赋值, 如果是 XOYO 登录 window.XOYO_AUTH 将被赋值
 */
const UniversalAuth = ({ weixinQQ = true, xoyo = true, daily = true, limitOnlyHasJx3RoleAccessInDaily = false, debug, disable }) => {
  if (disable) {
    return null;
  }
  // language=JavaScript
  return (
    <React.Fragment>
      <Script>{require('!!raw-loader!./tools')}</Script>
      <Script>{require('!!raw-loader!./global-config')}</Script>
      <DailyAuth daily={daily} limitOnlyHasJx3RoleAccessInDaily={limitOnlyHasJx3RoleAccessInDaily} />
      <WeixinQQAuth weixinQQ={weixinQQ} />
      <XoyoAuth xoyo={xoyo} weixinQQ={weixinQQ} daily={daily} />
      {debug && <Script>{
        `setTimeout(function() {
          alert('THIRD_PARTY_AUTH\\n' + JSON.stringify(window.THIRD_PARTY_AUTH)); alert('XOYO_AUTH\\n' + JSON.stringify(window.XOYO_AUTH));
        }, 800)`
      }</Script>}
    </React.Fragment>
  );
};

export default UniversalAuth;
