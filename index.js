#! /usr/bin/env node

const { program } = require('commander');
const { chooseTemplate } = require('./inquirer');
const download = require('download-git-repo');
const templateConfig = require('./templateConfig');
const ora = require('ora');

function run() {
    program.version(require('./package.json').version);

    program
        .command('create <projectName>')
        .description('创建一个项目模板')
        .option('-T, --template [template]', '输入使用额模板数字')
        .action(async (projectName, options) => {
            projectName = projectName || 'untitled';

            let template = options.template;

            if (!template) {
                template = await chooseTemplate();
            }

            const downloadUrl = templateConfig[template];

            const spinner = ora({
                text: '正在下载模板...',
                color: 'yellow',
                spinner: {
                    interval: 80,
                    frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
                },
            });
            spinner.start();

            download(downloadUrl, projectName, (error) => {
                if (error) {
                    spinner.fail(`创建项目失败：${projectName}`);
                    console.log(`失败原因：${error}`);
                } else {
                    spinner.succeed(`成功创建项目：${projectName}`);
                    console.log(`所使用的模板：${template}`);
                }
            });
        });

    program
        .command('test')
        .description('测试ora')
        .action(() => {
            const spinner = ora({
                text: '正在下载模板...',
                color: 'red',
                spinner: {
                    interval: 80,
                    frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
                },
            });
            spinner.start();
        });

    program.parse(process.argv);
}

run();
