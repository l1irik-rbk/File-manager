import { INVAILD_INPUT } from './errors.js';
import getDir from './getDir.js';

const getInvalidInputMessage = () => {
  console.log(INVAILD_INPUT);
  getDir();
};

export default getInvalidInputMessage;
