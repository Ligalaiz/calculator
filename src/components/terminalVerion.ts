const readline = require('readline');
const runner = require('../utils/runner');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const request = (): Promise<void> =>
  new Promise((resolve) => {
    rl.question('> ', (str: string) => {
      const answer = runner(str);
      if (answer) {
        console.log(answer);
      }

      resolve();
    });
  });

const start = async (): Promise<null> => {
  while (true) {
    await request();
  }
};
start();
