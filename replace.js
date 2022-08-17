//Load the library and specify options
const replace = require('replace-in-file');

const someProcessingA = (input) => {
  if (!!input.match(/<img src\=\"[a-zA-Z]/g)) return input.replace(/<img src\=\"/g, '<img src\=\"./');
  return input;
}
const someProcessingB = (input) => input.replace(/https\:\/\/github.com\/getify\/You-Dont-Know-JS\/blob\/2nd-ed\/external-logos\//g, './external-logos/');

replace.sync({
  files: './src/ydkjs/**/*.md',
  processor: [someProcessingA, someProcessingB],
});

console.log('');
console.log('🚀 ~ Replace Success ✅');
console.log('');
