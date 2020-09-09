const Bank = require('./Bank')

class NationalBank extends Bank{
  constructor(id, name, customers) {
    super(id, name, 'NationalBank', 5, customers)
  }
}

module.exports = NationalBank