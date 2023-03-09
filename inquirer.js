const inquirer = require("inquirer");

async function chooseTemplate() {
    const promptList = [
        {
            name: "template",
            message: "选择一个需要创建的工程化模板",
            type: "list",
            choices: [
                {
                    name: "repo-basic",
                    value: "repo-basic",
                },
            ],
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
