const { chooseTemplate } = require('../tools/inquirer');
const templateConfig = require('../config/template');
const download = require('../tools/download');

async function create(projectName, options) {
    projectName = projectName || 'untitled';

    let template = options.template;

    if (!template) {
        template = await chooseTemplate();
    }

    const downloadUrl = templateConfig[template];

    download(downloadUrl, projectName, template);
}

function test() {
    /* const spinner = ora({
                text: chalk.green('测试chalk颜色'),
                color: 'red',
                spinner: {
                    interval: 80,
                    frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
                },
            });
            spinner.start(); */
    console.log(chalk.yellow('进行中'));
    console.log(chalk.green('成功'));
    console.log(chalk.redBright('失败'));
    console.log(chalk.cyan('信息'));
}

module.exports = [
    {
        command: 'create <projectName>',
        description: '创建一个项目模板',
        option: ['-T, --template [template]', '输入使用额模板数字'],
        action: create,
    },
    {
        command: 'test',
        description: '测试ora和chalk',
        action: test,
    },
];
