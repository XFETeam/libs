export interface IHeaders {
  [key: string]: string;
}

export interface IParserResult<TData> {
   data: TData;
   method: ('Get' | 'Post' | 'HEAD' | 'OPTIONS') | string;
   url: string;
   headers: IHeaders
}


/**
 * 解析函数
 * @param {string} fiddlerRawString - fiddler 原始请求字符串 
 */
export default function parser<TData>(fiddlerRawString: string): IParserResult<TData> {
    const splits = fiddlerRawString
      .split(/\n/);
    const requestUrlMethodInfo = splits[0];
    const requestUrlMethodInfoSplits = requestUrlMethodInfo.split(' ');
    const requestMethod = requestUrlMethodInfoSplits[0];
    const requestUrl = requestUrlMethodInfoSplits[1];
    const headerRows = splits.slice(1, splits.length);

    const { headers, body } = (function () {
      let bodyIndex = -1;
      let bodyString = '';
      const headers = headerRows.reduce((result, row, index) => {
        row = row.trim();
        if (row.length === 0) {
          bodyIndex = index;
          return result;
        }
        if (bodyIndex > -1) {
          bodyString = bodyString + row;
          return result;
        } else {
          const splitIndex = row.indexOf(':');
          result[row.substring(0, splitIndex).trim()] = row.substring(splitIndex + 1).trim();
          return result;
        }
      }, {});

      return { headers, body: bodyString ? JSON.parse(bodyString) : undefined }
    }());
    return { data: body, method: requestMethod, url: requestUrl, headers }
}