const {Command}=require('commander')
const myAdder = require('./commands/dbConnectandAdd')
const program =new Command()
program
.name('to')
.description('I am your CLI tool')

program
.command('add')
.description('Adds new task to the db')
.action(( )=>{
    myAdder()
 })

program.parse(process.argv)