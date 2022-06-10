import * as path from 'path';
import * as fs from 'fs';
import { rm } from 'node:fs/promises';
import { OPERATION_FAILED } from '../../utils/errors.js';
import exists from '../../utils/exists.js';
import { currentDir } from '../../src/nwd/currentDir.js';
import getDir from '../../utils/getDir.js';

const mv = async (pathToCopyFile, pathToNewDirectory) => {
  try {
    const pathToFile = path.join(currentDir, pathToCopyFile);
    const fileBase = path.parse(pathToFile).base;
    const pathToDirectory = path.join(currentDir, pathToNewDirectory);

    const accessResponseFile = await exists(pathToFile);
    const accessResponseDirectory = await exists(pathToDirectory);
    if (!accessResponseFile || !accessResponseDirectory) throw new Error(OPERATION_FAILED);

    const newPath = path.join(pathToDirectory, fileBase);

    const stream = fs.createWriteStream(newPath, { encoding: 'utf-8' });
    const file = fs.createReadStream(pathToFile, { encoding: 'utf-8' });

    file.on('data', (chunk) => {
      stream.write(chunk);
    });

    await rm(pathToFile);
  } catch (error) {
    console.error(error.message);
  } finally {
    getDir();
  }
};

export default mv;
