import * as os from 'os';
import * as path from 'path';
import { OPERATION_FAILED } from '../../utils/errors.js';
import exists from '../../utils/exists.js';
import getDir from '../../utils/getDir.js';

export let currentDir = os.homedir();

export const up = () => {
  const newPath = path.join(currentDir, '..');
  currentDir = newPath;

  getDir();
};

export const changeDir = async (pathToNewPlace) => {
  try {
    if (!pathToNewPlace) throw new Error(OPERATION_FAILED);
    const newPath = path.join(currentDir, pathToNewPlace);
    const accessResponse = await exists(newPath);
    if (!accessResponse) throw new Error(OPERATION_FAILED);
    currentDir = newPath;
  } catch (error) {
    console.log(error.message);
  } finally {
    getDir();
  }
};
