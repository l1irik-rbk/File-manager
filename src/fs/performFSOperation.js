import { INVAILD_INPUT } from '../../utils/errors.js';
import getDir from '../../utils/getDir.js';
import add from './add.js';
import cat from './cat.js';
import remove from './rm.js';
import rn from './rn.js';

const performFSOperation = (operationFirstPart, operationSecondPart, operationThirdPart) => {
  if (
    (operationFirstPart === 'cat' || operationFirstPart === 'add' || operationFirstPart === 'rm') &&
    operationThirdPart
  ) {
    console.log(INVAILD_INPUT);
    getDir();
    return;
  }

  switch (operationFirstPart) {
    case 'cat':
    case 'add':
    case 'rm':
      performSimpleOperations(operationFirstPart, operationSecondPart);
      break;
    case 'rn':
    case 'cp':
    case 'mv':
      performComplexOperations(operationFirstPart, operationSecondPart, operationThirdPart);
      break;
    default:
      console.log(INVAILD_INPUT);
      break;
  }
};

const performComplexOperations = (operationFirstPart, operationSecondPart, operationThirdPart) => {
  if (!operationThirdPart) {
    console.log(INVAILD_INPUT);
    getDir();
    return;
  }

  switch (operationFirstPart) {
    case 'rn':
      rn(operationSecondPart, operationThirdPart);
      break;
    case 'cp':
      console.log('cp');
      break;
    case 'mv':
      console.log('mv');
      break;
    default:
      console.log(INVAILD_INPUT);
      break;
  }
};

const performSimpleOperations = (operationFirstPart, operationSecondPart) => {
  if (!operationSecondPart) {
    console.log(INVAILD_INPUT);
    getDir();
    return;
  }

  switch (operationFirstPart) {
    case 'cat':
      cat(operationSecondPart);
      break;
    case 'add':
      add(operationSecondPart);
      break;
    case 'rm':
      remove(operationSecondPart);
      break;
    default:
      console.log(INVAILD_INPUT);
      break;
  }
};

export default performFSOperation;
