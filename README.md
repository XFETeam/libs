# 用于剑网三推栏App金山通行证授权

## 使用方法
在头部head标签内按顺序先引入 daily-app-auth脚本，然后引入get-daily-account-info.js脚本

请将{VERSION}更换为具体的版本
```html
<head>
 ...
   <script src="//zhcdn01.xoyo.com/xassets/lib/daily-app-auth/{VERSION}/daily-app-auth.js" crossOrigin="anonymous" />
   <script src="//zhcdn01.xoyo.com/xassets/lib/daily-app-auth/{VERSION}/get-daily-account-info.js" crossOrigin="anonymous" />
 ...
</head>
```

// 执行脚本后可以在window.THIRD_PARTY_AUTH获取相关授权信息
```javascript
console.log(window.THIRD_PARTY_AUTH);
//成功返回
{
	"ua": "daily",
	"status": "success",
	"data": {
		"uid_encode": "c4e60ae03514c02ec5ebf4748eb5a2006fc092b0",
		"account": "hdt***062",
		"zone_name": "测试专区",
		"server_name": "聊天测试",
		"token": "0cd31785fd3a460d8c17af19de181b11",
		"force": "蓬莱",
		"bodily": "成男",
		"person_name": "辣条",
		"person_avatar": "https://qdla.pvp.xoyo.com/dev/avatar/tmp/f8c146ac3ec24bab9adf21f3881a288a/avatar.jpg/d0d100fff27645108cea5afc1e47b0d4.jpg",
		"is_wegame": 0,
		"session_id": "WpMtMML4mhYGgdsWkuXD4BKY620UB5t8Jvdvzqhp",
		"request_id": "11878089719ae013f79321d21d9ba3f674ce19b8"
	}
}
```

## ChangeLog

## 0.0.1
* add: init

