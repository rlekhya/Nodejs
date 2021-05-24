const yargs = require('yargs')
const add = require('./utils')
//customize version
//yargs.version('1.1.0')


yargs.command({
    command: 'add',
    description:'Adding a note',
    builder :{
        title:{
            description:'Note title'
        }
    },
    handler:function(){
        console.log('Add a Note')
    }
})
yargs.command({
    command: 'remove',
    description:'Removing a note',
    handler:function(){
        console.log('Remove Note')
    }
})


yargs.command({
    command: 'list',
    description:'list your notes',
    handler:function(){
        console.log('List of books')
    }
})
yargs.command({
    command: 'read',
    description:'Read Book',
    handler:function(){
        console.log('Reading the books')
    }
})
console.log(yargs.argv)