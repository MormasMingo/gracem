import require from './require.js';

const downloadGitRepo = require('download-git-repo');
const ora = require('ora');
import colorText from './colorText.js';

function download(url, name, template) {
    const spinner = ora({
        text: colorText('正在下载模板...', 'running'),
        color: 'yellow',
        spinner: {
            interval: 80,
            frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
        },
    });
    spinner.start();

    downloadGitRepo(url, name, (error) => {
        if (error) {
            spinner.fail(colorText(`创建项目失败：${name}`, 'danger'));
            console.log(`失败原因：${error}`);
        } else {
            spinner.succeed(colorText(`成功创建项目：${name}`, 'success'));
            console.log(`所使用的模板：${template}`);
        }
    });
}

export default download;
