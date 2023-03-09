#! /usr/bin/env node

const { program } = require("commander");
const { chooseTemplate } = require("./inquirer");
const download = require("download-git-repo");

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

            const downloadUrl =
                "https://github.com:MormasMingo/grace-template-basic";

            download(downloadUrl, projectName, (error) => {
                if (error) {
                    console.log(`创建项目失败：${projectName}`);
                    console.log(`失败原因：${error}`);
                } else {
                    console.log(`成功创建项目：${projectName}`);
                    console.log(`所使用的模板：${template}`);
                }
            });
        });

    program.parse(process.argv);
}

run();
