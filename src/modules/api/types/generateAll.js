const fs = require('fs-extra');
const path = require('path');
const execAsync = require('./utils/execAsync');


async function generateAll() {
  const dir = await fs.readdir(__dirname);

  process.chdir(__dirname);

  await fs.remove(path.join(__dirname, 'generated'));
  await fs.mkdir(path.join(__dirname, 'generated'));

  await Promise.all(dir.map(async (filename) => {
    if (!filename.startsWith('generate') || !filename.endsWith('.js') || filename === 'generateAll.js') {
      return;
    }
    console.log(filename);
    await execAsync(`node ${filename}`, false);
  }));
}

generateAll().catch((err) => {
  console.error(err);
});
