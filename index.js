#! /usr/bin/env node

import require from './tools/require.js';

import commandList from './config/command.js';
import version from './config/version.js';

const { program } = require('commander');

function run() {
    program.version(version);

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
