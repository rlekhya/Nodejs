var data = require('./notes.js')
var chalk = require('chalk')
console.log(chalk.inverse.green.bold('success !'))
const msg = data()
console.log(msg)
console.log(process.argv[2])