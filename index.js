#! /usr/bin/env node

const { program } = require('commander');
const commandList = require('./config/command');

function run() {
    program.version(require('./package.json').version);

    commandList.forEach((commandConfig) => {
        let p = program
            .command(commandConfig.command)
            .description(commandConfig.description);

        if (Array.isArray(commandConfig.option)) {
            p = p.option(...commandConfig.option);
        }
        if ('string' === typeof commandConfig.option) {
            p = p.option(commandConfig.option);
        }

        p.action(commandConfig.action);
    });

    program.parse(process.argv);
}

run();
