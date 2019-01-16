const fs = require('fs');
const execAsync = require('./utils/execAsync');

let isRunning = false;

fs.watch(__dirname, async (event, filename) => {
  if (isRunning) {
    return;
  }
  if (filename === 'apiDefinitions.yml'
    || (filename.startsWith('generate') && filename.endsWith('.js'))) {
    isRunning = true;
    console.log('generate!');
    await execAsync('node generateAll');
    isRunning = false;
  }
})
