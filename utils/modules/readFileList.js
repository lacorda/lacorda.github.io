/**
 *  读取所有md文件数据
 */
const fs = require('fs'); // 文件模块
const path = require('path'); // 路径模块
const chalk = require('chalk') // 命令行打印美化
const { getUuid } = require('./fn');
const docsRoot = path.join(__dirname, '..', '..', 'docs'); // docs文件路径
const log = console.log;

function readFileList(dir = docsRoot, filesList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((item, index) => {
    let filePath = path.join(dir, item);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      readFileList(path.join(dir, item), filesList);  //递归读取文件
    } else {
      if (path.basename(dir) !== 'docs') { // 过滤docs目录级下的文件
        const fileNameArr = path.basename(filePath).split('.')
        let name = null, type = null;
        if (fileNameArr.length === 2) { // 没有序号的文件
          name = fileNameArr[0]
          type = fileNameArr[1]
        } else if (fileNameArr.length === 3) { // 有序号的文件
          name = fileNameArr[1]
          type = fileNameArr[2]
        } else { // 超过两个‘.’的
          log(chalk.yellow(`warning: 该文件 "${filePath}" 没有按照约定命名，将忽略生成相应数据。`))
          return
        }
        if (type === 'md' || type === 'mdx') { // 过滤非md文件
          filesList.push({
            name,
            unicode: getUuid().slice(0, 7),
            filePath
          });
        }
      }
    }
  });
  return filesList;
}

module.exports = readFileList;