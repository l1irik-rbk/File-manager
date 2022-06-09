import { INVAILD_INPUT } from '../../utils/errors.js';
import getDir from '../../utils/getDir.js';
import compress from './compress.js';

const performCsAndDsOperation = (operationFirstPart, operationSecondPart, operationThirdPart) => {
  if (!operationThirdPart) {
    console.log(INVAILD_INPUT);
    getDir();
    return;
  }

  switch (operationFirstPart) {
    case 'compress':
      compress(operationSecondPart, operationThirdPart);
      break;
    case 'decompress':
      console.log('decompress');
      break;
    default:
      console.log(INVAILD_INPUT);
      break;
  }
};

export default performCsAndDsOperation;
