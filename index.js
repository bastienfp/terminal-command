// you're requiring or importing the my-library module, which you previously exported here
const myLibrary = require('./my-library');
// execute my-library here
myLibrary.myFirstMethod();

// requiring uuid
const uuid = require('uuid');
const newUuid = uuid();

console.log(`your new Universally unique identifier is ${newUuid}`);

// requiring terminal-commands module
const terminalCommands = require('./terminal-commands');

terminalCommands.ls();

terminalCommands.touch('hello-world.txt');

terminalCommands.mkdir('test');
