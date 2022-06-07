import * as os from 'os';

const getHomeDir = () => {
  const homeDir = os.homedir();
  console.log(`You are currently in ${homeDir}, enter a command and wait a result:`);
};

export default getHomeDir;
