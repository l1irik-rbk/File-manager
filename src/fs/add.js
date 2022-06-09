import * as path from 'path';
import * as fs from 'fs';
import { currentDir } from '../../src/nwd/currentDir.js';
import getDir from '../../utils/getDir.js';

const add = async (fileName) => {
  try {
    const pathToFile = path.join(currentDir, `${fileName}.txt`);
    fs.createWriteStream(pathToFile, { encoding: 'utf-8' });
  } catch (error) {
    console.error(error.message);
  } finally {
    getDir();
  }
};

export default add;
