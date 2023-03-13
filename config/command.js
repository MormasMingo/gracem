import templateConfig from './template.js';

import { chooseTemplate } from '../tools/inquirer.js';
import download from '../tools/download.js';

async function create(projectName, options) {
    projectName = projectName || 'untitled';

    let template = options.template;

    if (!template) {
        template = await chooseTemplate();
    }

    const downloadUrl = templateConfig[template];

    download(downloadUrl, projectName, template);
}

/* function test() {
    console.log(chalk.yellow('进行中'));
    console.log(chalk.green('成功'));
    console.log(chalk.redBright('失败'));
    console.log(chalk.cyan('信息'));
} */

export default [
    {
        command: 'create <projectName>',
        description: '创建一个项目模板',
        option: ['-T, --template [template]', '输入使用额模板数字'],
        action: create,
    },
    /* {
        command: 'test',
        description: '测试ora和chalk',
        action: test,
    }, */
];
