const fs = require('fs');
const code = fs.readFileSync('server.js', 'utf8');

let openCurly = 0;
let closeCurly = 0;
let openParens = 0;
let closeParens = 0;

for (let i = 0; i < code.length; i++) {
  if (code[i] === '{') openCurly++;
  if (code[i] === '}') closeCurly++;
  if (code[i] === '(') openParens++;
  if (code[i] === ')') closeParens++;
}

console.log("\n📊 BRACKET COUNTER REPORT:");
console.log("--------------------------------------");
console.log(`Curly Braces   -> Open { : ${openCurly} | Close } : ${closeCurly}`);
console.log(`Parentheses    -> Open ( : ${openParens} | Close ) : ${closeParens}`);
console.log("--------------------------------------");

if (openCurly > closeCurly) {
  console.log(`💡 FIX: You need to add exactly ${openCurly - closeCurly} more closing curly brackets ( } ) at the end of the file.`);
} else if (closeCurly > openCurly) {
  console.log(`💡 FIX: You have ${closeCurly - openCurly} too many closing curly brackets ( } ) at the end of the file.`);
}

if (openParens > closeParens) {
  console.log(`💡 FIX: You need to add exactly ${openParens - closeParens} more closing parentheses ( ) ) at the end of the file.`);
}
