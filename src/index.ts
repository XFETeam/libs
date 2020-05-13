import axios from "axios";
import parser from "@xfe-team/http-request-text-parser";
import dayjs from "./dayjs";

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
  private readonly robot?: IRobot;
  private readonly reportWhenStartSuccess: boolean;
  private readonly reportWhenStartFail: boolean;

  public constructor(
    {
      robot,
      reportWhenStartSuccess = true,
      reportWhenStartFail,
    } = {} as IQuickHttpJobConstructorParams
  ) {
    this.robot = robot;
    this.reportWhenStartSuccess = reportWhenStartSuccess;
    this.reportWhenStartFail = reportWhenStartFail;
  }

  /**
   * 上报或提醒
   */
  public async report(message: string): Promise<any> {
    const { robot } = this;
    if (robot) {
      const { api, prefixWithTime = true } = robot;
      let content = "";
      if (prefixWithTime) {
        content += dayjs().format("YYYY-MM-DD hh:mm:ss") + "\n" + message;
      }
      return await axios.post(api, {
        msgtype: "text",
        text: {
          content,
        },
      });
    }
    return null;
  }

  /**
   * 启动
   */
  public async start(fiddlerRawText: string) {
    const fiddlerParams = parser(fiddlerRawText);
    const { url, data, method, headers } = fiddlerParams;
    console.log(method.toLowerCase());
    const response = await axios[method.toLowerCase()](url, data, {
      headers,
    }).catch((err) => {
      if (err && err.message) {
        if (this.reportWhenStartFail) {
          this.report(JSON.stringify(response.message));
        }
      }
      throw err;
    });
    if (this.reportWhenStartSuccess) {
      await this.report(JSON.stringify(response.data, null, 2));
    }
    return response;
  }
}
