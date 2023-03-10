const chalk = require('chalk');

function colorText(text, type) {
    let typeText = null;

    switch (type) {
        case 'info':
            typeText = chalk.cyan(text);
            break;
        case 'success':
            typeText = chalk.green(text);
            break;
        case 'danger':
            typeText = chalk.redBright(text);
            break;
        case 'running':
            typeText = chalk.yellow(text);
            break;
    }

    return typeText;
}

module.exports = colorText;
