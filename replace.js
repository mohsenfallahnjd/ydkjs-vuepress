//Load the library and specify options
const replace = require('replace-in-file');

const someProcessingA = (input) => {
  if (!!input.match(/<img src\=\"[a-zA-Z]/g)) return input.replace(/<img src\=\"/g, '<img src\=\"./');
  return input;
}
const someProcessingB = (input) => input.replace(/https\:\/\/github.com\/getify\/You-Dont-Know-JS\/blob\/2nd-ed\/external-logos\//g, './external-logos/');

replace.sync({
  files: './docs/ydkjs/**/*.md',
  processor: [someProcessingA, someProcessingB],
});

// replace.sync({
//   files: './docs/index.md',
//   from: '%time%',
//   to: new Date().toString(),
// });

replace.sync({
  files: './docs/ydkjs/objects-classes/foreword.md',
  from: '[You Don\'t Know JS Yet: Objects & Classes]()',
  to: '[You Don\'t Know JS Yet: Objects & Classes](README.md)',
});

console.log('');
console.log('🚀 ~ Replace Success ✅');
console.log('');
