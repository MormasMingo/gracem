import require from './require.js';

import choiceConfig from '../config/choice.js';

const inquirer = require('inquirer');

async function chooseTemplate() {
    const promptList = [
        {
            name: 'template',
            message: '选择一个需要创建的工程化模板',
            type: 'list',
            choices: choiceConfig,
        },
    ];

    const answers = await inquirer.prompt(promptList);
    const { template } = answers;

    console.log(`你选择的模板是：${template}`);

    return template;
}

export { chooseTemplate };
