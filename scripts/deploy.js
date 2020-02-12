/**
 * 因为 gh-pages 默认仓库地址是 https, 但是 travis CI 里，用 https 会报 `remote: Invalid username or password.`
 * 将 github 地址改为 'git@github.com:XFETeam/libs.git'
 * 最终能解决问题。
 */

const ghpages = require('gh-pages');
const appName = require('../package.json').name;

function callback(e) {
  if (e) {
    console.err(e);
  } else {
    console.log('deploy succeed !');
  }
}

ghpages.publish('example/build', {
  repo: 'https://github.com/XFETeam/libs',
  remove: `${appName}/**/*`,
  dest: appName
}, callback);
