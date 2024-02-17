const {Command}=require('commander')
const myAdder = require('./commands/dbConnectandAdd')
const read = require('./commands/readGoals')
const deleteId = require('./commands/deleteById')
const update = require('./commands/update')
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

program
.command('delete')
.description('This will delete a goal')
.action(()=>{
    deleteId()
})
program
.command('update')
.description('This will update a goal')
.action(()=>{
    update()
})
program.parse(process.argv)