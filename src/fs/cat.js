import * as path from 'path';
import * as fs from 'fs';
import { OPERATION_FAILED } from '../../utils/errors.js';
import exists from '../../utils/exists.js';
import { currentDir } from '../../src/nwd/currentDir.js';
import getDir from '../../utils/getDir.js';

const cat = async (pathToReadFile) => {
  try {
    const pathToFile = path.join(currentDir, pathToReadFile);
    const accessResponse = await exists(pathToFile);
    if (!accessResponse) throw new Error(OPERATION_FAILED);

    const stream = fs.createReadStream(pathToFile, { encoding: 'utf-8' });
    stream.on('data', (chunk) => {
      console.log('File content:');
      process.stdout.write(chunk + '\n');
      getDir();
    });
  } catch (error) {
    console.error(error.message);
    getDir();
  }
};

export default cat;
