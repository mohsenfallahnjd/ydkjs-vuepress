//Load the library and specify options
const replace = require('replace-in-file');

const someProcessingA = (input) => {
  if (!!input.match(/<img.*withBase\('(.*)'\).*alt="([^"]*)".*>/g)) return input.replace(/<img.*withBase\('(.*)'\).*alt="([^"]*)".*>/g, /![$2]($1)/);
  return input;
}
const someProcessingB = (input) => input.replace(/https\:\/\/github.com\/getify\/You-Dont-Know-JS\/blob\/2nd-ed\/external-logos\//g, './external-logos/');

replace.sync({
  files: './src/ydkjs/**/*.md',
  processor: [someProcessingA, someProcessingB],
});

replace.sync({
  files: './src/index.md',
  from: '%time%',
  to: new Date().toString(),
});

console.log('');
console.log('🚀 ~ Replace Success ✅');
console.log('');
