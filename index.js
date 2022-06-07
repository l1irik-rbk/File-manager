import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';
import * as fs from 'fs';
import * as readline from 'readline';
import * as os from 'os';
import getHomeDir from './utils/getHomeDir.js';
import { getWelcomMessage, getFarewellMessage } from './utils/getMessages.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const startManager = () => {
  console.log(__dirname);
  getWelcomMessage();
  getHomeDir();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (input) => {
    if (input === '.exit') {
      process.exit();
    }
    console.log(`Input^ ${input}`);
    getHomeDir();
  });

  process.on('exit', () => {
    getFarewellMessage();
  });
};
startManager();
