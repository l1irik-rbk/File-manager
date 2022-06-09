import * as path from 'path';
import { copyFile } from 'node:fs/promises';
import { OPERATION_FAILED } from '../../utils/errors.js';
import exists from '../../utils/exists.js';
import { currentDir } from '../../src/nwd/currentDir.js';
import getDir from '../../utils/getDir.js';

const cp = async (pathToCopyFile, pathToNewDirectory) => {
  try {
    const pathToFile = path.join(currentDir, pathToCopyFile);
    const fileBase = path.parse(pathToFile).base;
    const pathToDirectory = path.join(currentDir, pathToNewDirectory);

    const accessResponseFile = await exists(pathToFile);
    const accessResponseDirectory = await exists(pathToDirectory);
    if (!accessResponseFile && !accessResponseDirectory) throw new Error(OPERATION_FAILED);

    const newPath = path.join(pathToDirectory, fileBase);
    await copyFile(pathToFile, newPath);
  } catch (error) {
    console.error(error.message);
  } finally {
    getDir();
  }
};

export default cp;
