const exec = require('child_process').exec;

function execAsync(cmd, skipError = true) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        return reject(error);
      }
      if (stderr) {
        if (skipError) {
          console.warn(stderr);
        } else {
          throw stderr;
        }
      }
      if (stdout) {
        console.log(stdout);
      }
      resolve(stdout);
    });
  });
}

module.exports = execAsync;
