# @xfe-team/quick-http-job

> 基于 fiddler 快速 http 工作任务, 主要用于定时任务的基础工具库.

## 使用

```js
const test = require("ava");
const QuickHttpJob = require('./').default;

test("基本测试, 确保能够完成基本解析", async (t) => {
  const job = new QuickHttpJob({
    robot: {
      api: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=24d3395a-9c3b-44b8-9866-9b3a913edbc9',
    }
  });
  const result = await job.start(
    `POST https://zhweb.kingsoft.com/ncov/health_report/submitDailyState HTTP/1.1
Host: zhweb.kingsoft.com
Connection: keep-alive
Content-Length: 461
Accept: application/json, text/plain, */*
Origin: https://zhweb.kingsoft.com
User-Agent: Mozilla/5.0 (Linux; Android 10; MI 9 Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/67.0.3396.87 XWEB/1177 MMWEBSDK/200201 Mobile Safari/537.36 MMWEBID/887 MicroMessenger/7.0.12.1620(0x27000C37) Process/tools NetType/WIFI Language/zh_CN ABI/arm64
Content-Type: application/json;charset=UTF-8
Referer: https://zhweb.kingsoft.com/p/hrep/
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,en-US;q=0.9
Cookie: pgv_pvi=7952370688; RK=vUDdwbJsWm; ptcz=a2b5ee19b1e063d65efd0c7f0f89ae5b79f6ec4b45f33218dee6c910dc6f5d88; pgv_pvid=3670855978; pac_uid=1_529360897; _ga=GA1.2.1441753114.1557455098; eas_sid=K1s5y5k7J7P3N6Q4u9A6b9J8P5; ied_qq=o0529360897; gr_user_id=716609b8-c2ff-4087-ab6b-9fe585b02e37; grwng_uid=76d5329c-2c9d-4e1b-8605-2b7e8a3a14ee; o_cookie=529360897; LW_uid=g1V5c6b2l2p9K7r5I7f8I7F4m8; Qs_lvt_311470=1563523197; Qs_pv_311470=1796951583517303800%2C2263366404372549600; LW_sid=W1u5z6m3Z5R283s2C077d8b3V1;
X-Requested-With: com.tencent.mm

{"id":0,"lastReportInfo":"珠海/在家/无14天接触史/无异常","workType":"园区办公楼","workTypeOther":"","workTypeDetail":"在家","healthStateList":["无异常"],"backLocation":1,"fromProvince":"","fromCity":"","fromDistrict":"","fromLocation":"","currentProvince":"","currentCity":"","currentDistrict":"","currentLocation":"","backLocationDate":"","touch14":0,"report":false}
`
  );
  t.is(typeof result.data === 'object', true);
});

```

## API

```typescript
export interface IRobot {
    api: string;
    prefixWithTime?: boolean;
}
export interface IQuickHttpJob {
    start: Function;
    report: Function;
}
export interface IQuickHttpJobConstructorParams {
    robot?: IRobot;
    reportWhenStartSuccess?: boolean;
    reportWhenStartFail?: boolean;
}
export default class QuickHttpJob implements IQuickHttpJob {
    private readonly robot?;
    private readonly reportWhenStartSuccess;
    private readonly reportWhenStartFail;
    constructor({ robot, reportWhenStartSuccess, reportWhenStartFail }?: IQuickHttpJobConstructorParams);
    /**
     * 上报或提醒
     */
    report(message: string): Promise<any>;
    /**
     * 启动
     */
    start(fiddlerRawText: string): Promise<any>;
}
```

## TRAVIS CI 地址

https://travis-ci.com/XFETeam/libs

## ChangeLog

## 0.0.2 (2020-05-13)

* fix: remove debug console log

## 0.0.1 (2020-05-13)

* init: init commit

## 作者
She Ailun
