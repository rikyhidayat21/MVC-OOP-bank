const fs = require('fs')
const Bank = require('./Bank')
const LocalBank = require('./LocalBank')
const NationalBank = require('./NationalBank')
const Customer = require('./Customer')

class Model { // disini biasanya pakai static
  
  static readFile() {
    const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'))
    return data;
  }

  static saveFile(data) {
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
  }
  
  static findAllData() {
    // return this.readFile() ok berhasil mengembalikan data ke controller
    const data = Model.readFile()
    let output = []
    
    data.forEach(el => {
      if (el.type === 'LocalBank') {
        let id = el.id
        let name = el.name 
        let customers = el.customers
        let addCustomers = []

        customers.forEach(elem => {
          addCustomers.push(new Customer(elem.name, elem.ktp, elem.depositAmount))
        })

        let addBank = new LocalBank(id, name, addCustomers)
        output.push(addBank)
      } else if (el.type === 'NationalBank') {
        let id = el.id
        let name = el.name
        let customers = el.customers
        let addCustomers = []

        customers.forEach(elem => {
          addCustomers.push(new Customer(elem.name, elem.ktp, elem.depositAmount))
        })

        let addBank = new NationalBank(id, name, addCustomers)
        output.push(addBank)
      }
    })  
    return output  
  }

  static addNewBank(value) {
    const data = Model.findAllData()
    let instanceNewBank;

    let id = data[data.length  - 1].id + 1
    let name = value.name
    let type = value.type

    if(type === 'LocalBank') {
      instanceNewBank = new LocalBank(id, name, [])
      data.push(instanceNewBank)
    } else if (type === 'NationalBank') {
      instanceNewBank = new NationalBank(id, name, [])
      data.push(instanceNewBank)
    }
    
    Model.saveFile(data)
    return name
  }

  static deleteBank(value) {
    const data = Model.findAllData()
    // let id = +value
    let updatedBank = []
    let deletedBank
    // for (let i = 0; i < data.length; i++) {
    //   if (data[i].id !== +value) {
    //     updatedBank.push(data[i])
    //   } else {
    //     deletedBank = data[i].name
    //   }
    // }
    data.forEach(el => {
      if (el.id !== +value) {
        updatedBank.push(el)
      } else {
        deletedBank = el.name
      }
    })
    Model.saveFile(updatedBank)
    return deletedBank
  }


}

module.exports = Model