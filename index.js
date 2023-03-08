#! /usr/bin/env node

const { program } = require("commander");
const { chooseTemplate } = require("./inquirer");

function run() {
    program.version(require("./package.json").version);

    program
        .command("create <projectName>")
        .description("创建一个项目模板")
        .option("-T, --template [template]", "输入使用额模板数字")
        .action(async (projectName, options) => {
            projectName = projectName || "untitled";

            let template = options.template;

            if (!template) {
                template = await chooseTemplate();
            }

            console.log(`成功创建项目：${projectName}`);
            console.log(`所使用的模板：${template}`);
        });

    program.parse(process.argv);
}

run();
