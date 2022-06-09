import * as path from 'path';
import { rm } from 'node:fs/promises';
import { OPERATION_FAILED } from '../../utils/errors.js';
import exists from '../../utils/exists.js';
import { currentDir } from '../../src/nwd/currentDir.js';
import getDir from '../../utils/getDir.js';

const remove = async (pathToRemoveFile) => {
  try {
    const pathToFile = path.join(currentDir, pathToRemoveFile);

    const accessResponse = await exists(pathToFile);
    if (!accessResponse) throw new Error(OPERATION_FAILED);

    await rm(pathToFile);
  } catch (error) {
    console.error(error.message);
  } finally {
    getDir();
  }
};

export default remove;
