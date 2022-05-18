const { exec, execSync } = require("child_process");


var rootDir = __dirname;

execSync(`${rootDir}/node_modules/.bin/browserify ${rootDir}/testFile.js -g [ babelify --presets [ @babel/preset-env ] ] > output.js`);
