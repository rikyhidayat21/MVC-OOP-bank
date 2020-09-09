const Bank = require('./Bank')

class LocalBank extends Bank{
  constructor(id, name, customers) {
    super(id, name, 'LocalBank', 3, customers)
  }
}

module.exports = LocalBank