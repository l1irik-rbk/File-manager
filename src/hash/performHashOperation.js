import * as path from 'path';
import * as fs from 'fs';
import * as crypto from 'crypto';
import { INVAILD_INPUT, OPERATION_FAILED } from '../../utils/errors.js';
import getDir from '../../utils/getDir.js';
import { currentDir } from '../nwd/currentDir.js';
import exists from '../../utils/exists.js';

const performHashOperation = async (pathToHashFile) => {
  if (!pathToHashFile) {
    console.log(INVAILD_INPUT);
    getDir();
    return;
  }

  try {
    const pathToFile = path.join(currentDir, pathToHashFile);
    const accessResponse = await exists(pathToFile);
    if (!accessResponse) throw new Error(OPERATION_FAILED);

    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(pathToFile, { encoding: 'utf-8' });

    stream.on('data', (chunk) => {
      hash.update(chunk);
      const hex = hash.digest('hex');
      console.log(`Hash for file: ${hex}`);
      getDir();
    });
  } catch (error) {
    console.error(error);
    getDir();
  }
};

export default performHashOperation;
