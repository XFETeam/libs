import getXoyoAuth from './auth/xoyo-auth';
import getDailyAuth from './auth/daily-auth';
import getQQWeixinAuth from './auth/qq-weixin-auth';
import getAuthInfoByAppEnv from './auth/authInfo-by-appEnv';
import GeneralTools from './auth/general';
require('./global-config');

export {getXoyoAuth, getDailyAuth, getQQWeixinAuth, GeneralTools, getAuthInfoByAppEnv };
