const args = process.env;
const user = args['username'];

export const getWelcomMessage = () => {
  console.log(`Welcome to the File Manager, ${user}!\n`);
};

export const getFarewellMessage = () => {
  console.log(`Thank you for using File Manager, ${user}!`);
};
