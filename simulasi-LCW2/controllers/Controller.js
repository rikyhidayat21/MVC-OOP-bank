const Model = require('../models/Model')
const View = require('../views/View')

class Controller { // disini juga biasanya pakai static
  static list() {
    const data = Model.findAllData()
    View.showAllData(data)
  }

  static addBank(params) {
    let newBank = {
      name: params[0],
      type: params[1]
    }

    let output = Model.addNewBank(newBank)
    View.show(`Bank ${output} added successfully`)
  }

  static deleteBank(params) {
    let output = Model.deleteBank(params)
    View.show(`Bank with name ${output} deleted successfully`)
  }
}

module.exports = Controller