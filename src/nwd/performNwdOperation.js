import { INVAILD_INPUT } from '../../utils/errors.js';
import getDir from '../../utils/getDir.js';
import { changeDir, up } from './currentDir.js';
import list from './ls.js';

const performNwdOperation = (operationFirstPart, operationSecondPart) => {
  if (operationFirstPart !== 'cd' && operationSecondPart) {
    console.log(INVAILD_INPUT);
    getDir();
    return;
  }

  switch (operationFirstPart) {
    case 'ls':
      list();
      break;
    case 'up':
      up();
      break;
    case 'cd':
      changeDir(operationSecondPart);
      break;
    default:
      console.log(INVAILD_INPUT);
      break;
  }
};

export default performNwdOperation;
