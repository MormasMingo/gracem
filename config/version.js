import require from '../tools/require.js';

import path from 'path';
import { fileURLToPath } from 'url';
const fs = require('fs');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.resolve(__dirname + '/../package.json');

const json = fs.readFileSync(jsonPath, {
    encoding: 'utf8',
    flag: 'r',
});

const version = JSON.parse(json).version;

export default version;
