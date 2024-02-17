const {Command}=require('commander')
const myAdder = require('./commands/dbConnectandAdd')
const read = require('./commands/readGoals')
const program =new Command()
program
.name('to')
.description('I am your CLI tool')

program
.command('add')
.description('Adds new goals')
.action(( )=>{
    myAdder()
 })
 program
 .command('read')
 .description('read all goals')
.action(()=>{
    read()
})
program.parse(process.argv)