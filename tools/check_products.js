const fs = require('fs');
const vm = require('vm');
const path = require('path');

const files = [
  'products/pickles.js',
  'products/snacks.js',
  'products/sweets.js',
  'products/papadums.js',
  'products/podis.js',
  'products/mixes.js',
  'products/pastes.js',
  'products/other.js'
];

files.forEach((f) => {
  const full = path.join(__dirname, '..', f);
  try {
    const code = fs.readFileSync(full, 'utf8');
    const ctx = { window: {} };
    vm.runInNewContext(code, ctx, { filename: full });

    const keys = Object.keys(ctx.window);
    if (!keys.length) {
      console.log(`${f} -> no window.* exports`);
      return;
    }

    keys.forEach((k) => {
      const arr = ctx.window[k];
      const len = Array.isArray(arr) ? arr.length : `[not array: ${typeof arr}]`;
      console.log(`${f} -> window.${k} => ${len}`);
    });
  } catch (err) {
    console.error(`ERROR reading ${f}:`, err.message);
  }
});
