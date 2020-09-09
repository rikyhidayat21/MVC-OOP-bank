const Controller = require('./controllers/Controller')
const command = process.argv[2]
const params = process.argv.slice(3)

switch(command) {
  case 'list':
    Controller.list()
    break;
  case 'addBank':
    Controller.addBank(params)
    break;
  case 'deleteBank':
    Controller.deleteBank(params)
    break;
}