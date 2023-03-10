const inquirer = require('inquirer');
const choiceConfig = require('../config/choice');

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

module.exports = {
    chooseTemplate,
};
