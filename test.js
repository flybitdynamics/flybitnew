const fs = require('fs');
const babel = require('@babel/core');
const code = fs.readFileSync('src/components/about/ServicesDetailed.tsx', 'utf8');

try {
  babel.transformSync(code, {
    presets: ['@babel/preset-react', '@babel/preset-typescript']
  });
  console.log("No syntax errors!");
} catch (e) {
  console.log("Syntax error:");
  console.log(e.message);
}
