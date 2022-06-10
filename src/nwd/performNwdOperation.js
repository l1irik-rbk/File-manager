import { INVAILD_INPUT } from '../../utils/errors.js';
import getInvalidInputMessage from '../../utils/getInvalidInputMessage.js';
import { changeDir, up } from './currentDir.js';
import list from './ls.js';

const performNwdOperation = (operationFirstPart, operationSecondPart, operationThirdPart) => {
  if ((operationFirstPart !== 'cd' && operationSecondPart) || operationThirdPart) {
    getInvalidInputMessage();
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
