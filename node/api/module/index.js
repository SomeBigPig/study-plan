const path = require('path');

/**
 * __dirname 当前模块目录名, 绝对路径
 * __filename 当前模块的文件名, 绝对路径
 */
 console.log(`filename: ${__filename}`);
 console.log(`dirname: ${__dirname}`);
 console.log(`path.dirname: ${path.dirname(__filename)}`)
 console.log(`------------------------------------------`);

 /**
  * ./ compare with __dirname , process.cwd()
  */
console.log(`dirname: ${__dirname}`);
console.log(`process.cwd: ${process.cwd()}`);
console.log(`./: ${path.resolve('./')}`);

exports.name = 'hamb'

console.log(require.main)