/**
 * 批量添加和修改front matter ，需要配置 ./config.yml 文件。
 */
const fs = require('fs'); // 文件模块
const path = require('path'); // 路径模块
const matter = require('gray-matter'); // front matter解析器 https://github.com/jonschlinkert/gray-matter
const jsonToYaml = require('json2yaml')
const yamlToJs = require('yamljs')
const inquirer = require('inquirer') // 命令行操作
const chalk = require('chalk') // 命令行打印美化
const readFileList = require('./modules/readFileList');
const { type, repairDate } = require('./modules/fn');
const log = console.log

const configPath = path.join(__dirname, 'config.yml') // 配置文件的路径

main();

/**
 * 主体函数
 */
async function main() {

  const promptList = [{
    type: "confirm",
    message: chalk.yellow('批量操作frontmatter有修改数据的风险，确定要继续吗？'),
    name: "edit",
  }];
  let edit = true;

  await inquirer.prompt(promptList).then(answers => {
    edit = answers.edit
  })

  if (!edit) { // 退出操作
    return
  }

  const config = yamlToJs.load(configPath) // 解析配置文件的数据转为js对象

  if (!config.path) {
    const argvs = process.argv.slice(2);
    console.log('argvs===', argvs);
    config.path = argvs;
  }

  if (type(config.path) !== 'array') {
    log(chalk.red('路径配置有误，path字段应该是一个数组'))
    return
  }

  const filePath = path.join(__dirname, '..', ...config.path); // 要批量修改的文件路径
  const files = readFileList(filePath); // 读取所有md文件数据

  files.forEach(file => {
    let dataStr = fs.readFileSync(file.filePath, 'utf8');// 读取每个md文件的内容
    const fileMatterObj = matter(dataStr) // 解析md文件的front Matter。 fileMatterObj => {content:'剔除frontmatter后的文件内容字符串', data:{<frontmatter对象>}, ...}
    let matterData = fileMatterObj.data; // 得到md文件的front Matter

    const configData = {
      ...config.data,
      slug: matterData.slug || `/${file.unicode}`,
      tags: [file.name],
      description: file.name
    };

    Object.assign(matterData, configData); // 将配置数据合并到front Matter对象
    delete matterData.title;

    const path = config.path[0];

    if (path.includes('docs') || path.includes('tips')) {
      delete matterData.authors;
    } else if (path.includes('blog') || path.includes('third')) {
      configData.authors = ['Rabbit'];
    }

    if (matterData.date && type(matterData.date) === 'date') {
      matterData.date = repairDate(matterData.date) // 修复时间格式
    }
    const newData = jsonToYaml.stringify(matterData).replace(/\n\s{2}/g, "\n").replace(/"/g, "") + '---\r\n' + fileMatterObj.content;

    if (dataStr !== newData) {
      fs.writeFileSync(file.filePath, newData); // 写入
      log(chalk.green(`update frontmatter：${file.filePath} `))
    }
  })
}
