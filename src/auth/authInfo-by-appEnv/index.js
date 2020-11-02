import getDailyAuth from '../daily-auth';
import getQQWeixinAuth from '../qq-weixin-auth';
import getXoyoAuth from '../xoyo-auth';
import GlobalAuthData from '../../global-auth-data';

/**
 * 自动根据app环境返回登录信息
 *
 *  *
 * @example
 *
 * const authInfo = await getAuthInfoByAppEnv();
 * console.log(authInfo);
 *
 * daily:
 * {
 *	"ua": " daily",
 *	"status": " success",
 *	"data": {
 *  	"uid_encode": " 99bcb26b5b5859024e128f30b6317da5ee8886b2",
 *  	"external_id_name": "passport",
 *  	"account": "136***424",
 *  	"zone_name": "null",
 *  	"server_name": "null",
 *  	"role_name": "",
 *  	"token": "b93039cd0a9642b 7 bce95597d1b9b145 ",
 *  	"force": null,
 *  	"bodily": null,
 *  	"person_name": "壹加壹",
 *  	"person_avatar": "https://dl.pvp.xoyo.com/static/avatars/moren1@2x.png",
 *  	"is_wegame": 0,
 *  	"app_default_ passport_ roles": null,
 *	  "session_id'": " GdSkBWQr01RSzsbbvfCEanL445CeXCFSzbIJlMum",
 *	  "request_id": " 4ba9d5cbc992ea9f62143f32b5ac70ea1a52f29f"
 *	}
 *}
 *
 * 微信:
 *{
 *  "ua": "wechat",
 *  "status": " success",
 *  "data": {
 *	  "login_type": "wechat",
 *	  "uid": "壹",
 *	  "head_img_ url": "//thirdwx.qlogo.cn/mmopen/vi_32/.../132",
 *	  "city": "湛江",
 *	  "sex": 1,
 *	  "nickname": "壹",
 *	  "uid_encode ": "49308ecac7a551c9c2c6c4b3558619d3c34b6e8d ",
 *	  "session_id ": "OQo5ZijqWZUPdkdWlM7so3BrGNG63nk23zeQo7Ov ",
 *	  "request_id ": "ea04989dab061489d99ff558c60e50f20f4f3967 "
 *  }
 *}
 * XOYO:
 * {
 *	"code": 1,
 *	"data": {
 *		"account": "hdt******007",
 *		"account_uid": "200f51285985df39663d505a7a800b72021d52e3",
 *		"pf": "",
 *		"request_id": "8b96de3626fc81be5f63de95418ea4e8ba978333"
 *	},
 *	"status": 1,
 *	"msg": "SUCCESS",
 *	"message": "SUCCESS"
 * }
 *
 *
 * @param daily daily端
 * @param limitOnlyHasJx3RoleAccessInDaily 是否限制只有存在剑网3角色的用户登录
 * @param weixinQQ 微信QQ端
 * @param xoyo 使用金山通行证登录
 * @param debug 是否进行登录信息提示
 * @param disable 禁止登录模块
 * @returns {Promise<GlobalAuthData>}
 */
// eslint-disable-next-line max-len
const getAuthInfoByAppEnv = async ({daily = true, limitOnlyHasJx3RoleAccessInDaily = false, weixinQQ = true, xoyo = true, debug = false, disable = false}) => {
  let response;
  const globalAuthData = new GlobalAuthData();

  if (!disable) {
    if (daily) {
      response = await getDailyAuth({limitOnlyHasJx3RoleAccessInDaily: limitOnlyHasJx3RoleAccessInDaily});
      globalAuthData.THIRD_PARTY_AUTH = response;
    } else {
      if (weixinQQ) {
        response = await getQQWeixinAuth();
        globalAuthData.THIRD_PARTY_AUTH = response;
      }
    }

    if (xoyo) {
      response = await getXoyoAuth();
      globalAuthData.XOYO_AUTH = response;
    }
    if (debug) {
      setTimeout(function () {
        // eslint-disable-next-line max-len
        alert('THIRD_PARTY_AUTH\n' + JSON.stringify(globalAuthData.THIRD_PARTY_AUTH));
        alert('XOYO_AUTH\n' + JSON.stringify(globalAuthData.XOYO_AUTH));
      }, 800);
    }
  }

  return globalAuthData;
};

export default getAuthInfoByAppEnv;
