import * as readline from 'readline';
import getDir from './utils/getDir.js';
import { getWelcomMessage, getFarewellMessage } from './utils/getMessages.js';
import readCommand from './utils/readCommand.js';

const startManager = () => {
  getWelcomMessage();
  getDir();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (input) => {
    readCommand(input);
  });

  process.on('exit', () => {
    getFarewellMessage();
  });
};
startManager();
